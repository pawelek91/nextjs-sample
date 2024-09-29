'use client';

import SongCard from '@/components/SongCard';
import { I_SongItem } from '@/types/backend.interfaces';
import { Link } from 'nextjs13-progress';
import React, { useEffect, useState } from 'react';
import { LuRefreshCcw } from 'react-icons/lu';
import fetchSongs from '../actions/fetchSongs';

export default function ClientExamplePage() {
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
	
	if (songs) {
		return (
			<div className="m-auto w-full max-w-7xl grid grid-cols-4 gap-6 py-10 px-4 2xl:px-0">
				<h1 className="text-2xl font-bold col-span-4 text-center">Client Example</h1>

				<div className="col-span-4 flex items-center justify-center gap-4">
					<Link className="btn btn-primary" href="/">
						Go Back
					</Link>
					<button className="btn btn-secondary" onClick={() => refreshData()}>
						<div className="w-6 flex items-center justify-center">
							<LuRefreshCcw />
						</div>
						Refresh
					</button>
				</div>

				{songs.map((song, i) => (
					<SongCard key={i} song={song} />
				))}
			</div>
		);
	}
}
