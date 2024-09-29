'use client';

import React, { useState } from 'react';
import SongPlayer from './SongPlayer';

import { FaPlay } from 'react-icons/fa';

import { I_SongItem } from '@/interfaces/contentful.interfaces';

const SongCard = (props: { song: I_SongItem }) => {
	const { song } = props;

	const [selectedSong, setSelectedSong] = useState('');
	const [showPlayer, setShowPlayer] = useState(false);

	const handlePlay = (slug: string) => {
		setSelectedSong(slug);
		setShowPlayer(true);
		
	};

	return (
		<>
			<div className="card bordered shadow-lg col-span-4 md:col-span-2 2xl:col-span-1 bg-base-200">
				
				<div className="card-body">
					<div className="flex flex-col gap-2">
						<div className="text-xl font-bold">{song.title}</div>
						<div className="flex items-center justify-between w-full">
							<div className="text-sm text-gray-500">{song.id}</div>
							<button className="btn btn-primary" onClick={() => handlePlay(song.slug)}>
								<FaPlay />
							</button>
						</div>
					</div>
				</div>
			</div>
			{showPlayer ? <SongPlayer songData={song} show={showPlayer} setShow={setShowPlayer} /> : null}
		</>
	);
};

export default SongCard;
