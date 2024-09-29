'use server';

import { I_SongDetails } from '@/interfaces/contentful.interfaces';
import { v4 as uuidv4 } from 'uuid';

export default async function fetchSong(slug: string) {
	await new Promise(resolve => setTimeout(resolve, 2000));
		

		// Mock data
		const song:I_SongDetails = {
			id: uuidv4(), // Generate a unique ID
			title: `Song Title ${slug}`, // Unique title based on slug
			releaseDate: new Date().toISOString().split('T')[0],
			soundCloudUrl: `soundCloudUrl ${slug}`,
			spotifyUrl: `spotifyUrl ${slug}`,
			appleMusicUrl: `appleMusicUrl ${slug}`,
			deezerUrl: `deezerUrl ${slug}`,
			youTubeVideoUrl: `youTubeVideoUrl ${slug}`,
			amazonMusicUrl: `amazonMusicUrl ${slug}`,
			createdAt: new Date().toISOString().split('T')[0],
			updatedAt: new Date().toISOString().split('T')[0],
			slug: `Slug ${slug}`,
			duration: '0',
			genre: `Genre ${slug}`
		};


		return song;
}
