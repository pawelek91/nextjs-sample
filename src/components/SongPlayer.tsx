'use client';

import React from 'react';
import FullScreenLoader from './FullScreenLoader';

import dynamic from 'next/dynamic';
const Spotify = dynamic(() => import('./Players/Spotify'), {
	loading: () => <FullScreenLoader />,
});


import fetchSong from '@/app/actions/fetchSong';
import useSWR from 'swr';
import { I_SongItem } from '@/interfaces/contentful.interfaces';

interface Props {
	songData: I_SongItem;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
}

export default function SongPlayer(props: Props) {
	const { songData, show, setShow } = props;
	const { data: song, error, isLoading } = useSWR(songData.slug, fetchSong);

	if (isLoading) {
		return <FullScreenLoader />;
	}

	if (!song) return <div className="m-auto text-error">Failed to load song</div>;

	// if (song.spotifyUrl) {
	// 	return <Spotify show={show} url={song.spotifyUrl} setShow={setShow} />;
	// } else {
	// 	return <SoundCloud show={show} url={song.soundCloudUrl} setShow={setShow} />;
	// }
	return <Spotify show={show} song={song} setShow={setShow} />;

	
}
