'use client';

import React, {useEffect, useState} from 'react';
import FullScreenLoader from './FullScreenLoader';


import fetchSong from '@/app/actions/fetchSong';
import { I_SongDetails, I_SongItem } from '@/types/backend.interfaces';
import Spotify from './Players/Spotify';

interface Props {
	songData: I_SongItem;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
}

export default function SongPlayer(props: Props) {
	const { songData, show, setShow } = props;
	const [song, setSong] = useState<I_SongDetails | null>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (show) {
			setIsLoading(true);
			fetchSong(songData.slug).then((song) => {
				setSong(song);
				setIsLoading(false);
			});
		}
	}, [show]);

	if (isLoading) {
		return <FullScreenLoader />;
	}

	if (!song) return <div className="m-auto text-error">Failed to load song</div>;

	
	return <Spotify show={show} song={song} setShow={setShow} />;

	
}
