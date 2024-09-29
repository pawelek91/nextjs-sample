'use client';

import React, { useState } from 'react';
import SongPlayer from './SongPlayer';

import { FaPlay } from 'react-icons/fa';

import { I_SongItem } from '@/interfaces/contentful.interfaces';

const SongPlayButton = (props: { song: I_SongItem }) => {
	const { song } = props;

	const [selectedSong, setSelectedSong] = useState('');
	const [showPlayer, setShowPlayer] = useState(false);

	const handlePlay = (slug: string) => {
		setSelectedSong(slug);
		setShowPlayer(true);
		
	};

	return (
		<>
			<button className="btn btn-primary" onClick={() => handlePlay(song.slug)}>
								<FaPlay />
							</button>
			{showPlayer ? <SongPlayer songData={song} show={showPlayer} setShow={setShowPlayer} /> : null}
		</>
	);
};

export default SongPlayButton;
