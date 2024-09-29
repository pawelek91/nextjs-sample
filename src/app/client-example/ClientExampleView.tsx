'use client';

import React, { useEffect, useState } from 'react';
import Link from '@/components/Link';
import SongCard from '@/components/SongCard';

import fetchSongs from '@/app/actions/fetchSongs';

import { LuRefreshCcw } from 'react-icons/lu';
import { I_SongItem } from '@/types/backend.interfaces'; // Import the I_SongItem type

export default function ClientExampleView() {
	const [songs, setSongs] = useState<I_SongItem[] | null>(null);
	const [isValidating, setIsValidating] = useState(false);

	const refreshData = async () => {
		setIsValidating(true);
		const songs = await fetchSongs();
		setSongs(songs);
		setIsValidating(false);
	};

	useEffect(() => {
		refreshData();
	}, []);

	return (
		<>
			<div className="col-span-4 flex items-center justify-center gap-4">
				<Link className="btn btn-primary" href="/">
					Go Back
				</Link>
				<button className="btn btn-secondary" onClick={() => refreshData()}>
					<div className="w-6 flex items-center justify-center">
						{isValidating ? <div className="loading loading-ring"></div> : <LuRefreshCcw />}
					</div>
					Refresh
				</button>
			</div>

			{songs && songs.map((song, i) => (
				<SongCard key={i} song={song} />
			))}
		</>
	);
}
