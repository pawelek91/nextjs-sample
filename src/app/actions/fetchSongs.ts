'use server';

import { v4 as uuidv4 } from 'uuid';

import { I_SongItem } from '@/interfaces/contentful.interfaces';

export default async function fetchSongs(): Promise<I_SongItem[]> {
	try {
		// simulate network delay
				await new Promise((resolve) => setTimeout(resolve, 5000));
				// const songs = await getSongs();
				// if (!songs) throw new Error('Failed to fetch songs');

				// return mapSongs(songs);
				const songs: I_SongItem[] = Array.from({ length: 12 }, (_, index) => ({
					id: uuidv4(), // Generate a unique ID
					title: `Song Title ${index + 1}`, // Unique title
					artist: `Artist ${index + 1}`, // Unique artist
					album: `Album ${index + 1}`, // Unique album
					releaseDate: new Date(2022, index, 1).toISOString().split('T')[0], // Unique date
					slug: `/${index + 1}`, // Add slug property
					duration: '0', // Change duration property to string
					genre: 'Genre1', // Add genre property
					// Add other properties as per your I_SongItem interface
				}));


		return songs;
	} catch (err: any) {
		console.error(err);
		throw new Error('Failed to fetch songs');
	}
}
