'use client';

import React, { useState } from 'react';
import Link from '@/components/Link';
import BoxLoader from '@/components/BoxLoader';
import SongCard from '@/components/SongCard';

import useSwr from 'swr';
import fetchSongs from '@/app/actions/fetchSongs';

import { LuRefreshCcw } from 'react-icons/lu';
import SongListLoader from '@/components/SongListLoader';

export default function ClientExampleView() {
	const { data: songs, isLoading, isValidating, mutate } = useSwr('songs', fetchSongs);

	if (isLoading) {
		return <SongListLoader />;
	}

	if (!songs) {
		return <div className="m-auto text-error">Failed to load songs</div>;
	}

	return (
		<>
			<div className="col-span-4 flex items-center justify-center gap-4">
				<Link className="btn btn-primary" href="/">
					Go Back
				</Link>
				<button className="btn btn-secondary" onClick={() => mutate()}>
					<div className="w-6 flex items-center justify-center">
						{isValidating ? <div className="loading loading-ring"></div> : <LuRefreshCcw />}
					</div>
					Refresh
				</button>
			</div>
			
				{songs.map((song, i) => (
					<SongCard key={i} song={song} />
				))}
		</>
	);
}
