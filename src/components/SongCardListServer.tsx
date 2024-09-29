import React from 'react';

import SongCardServer from './SongCardServer';
import fetchSongs from '@/app/actions/fetchSongs';
import Link from './Link';


export default async function SongCardListServer() {
	const songs = await fetchSongs();;
	return (
		<div className="m-auto w-full max-w-7xl grid grid-cols-4 gap-6 py-10 px-4 2xl:px-0">
			<h1 className="text-2xl font-bold col-span-4 text-center">Server Example</h1>
			<div className="col-span-4 flex items-center justify-center gap-4">
				<Link className="btn btn-primary" href="/">
					Go Back
				</Link>
			</div>
			{songs.map((song, i) => (
				<SongCardServer key={i} song={song} />
			))}
		</div>
	);
}
