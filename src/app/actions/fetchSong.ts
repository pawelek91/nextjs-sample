'use server';

import { I_SongDetails } from '@/types/backend.interfaces';
import { v4 as uuidv4 } from 'uuid';

interface CacheEntry {
    data: I_SongDetails;
    timestamp: number;
}

const songCache: Record<string, CacheEntry> = {};
const CACHE_DURATION = 600000; // 10 minutes in milliseconds
const MAX_CACHE_SIZE = 100; // Limit of 100 entries

export default async function fetchSong(slug: string): Promise<I_SongDetails> {
    const now = Date.now();

    if (songCache[slug] && (now - songCache[slug].timestamp) < CACHE_DURATION) {
        return songCache[slug].data;
    }

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock data creation
    const song: I_SongDetails = {
        id: uuidv4(),
        title: `Song Title ${slug}`,
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

    songCache[slug] = { data: song, timestamp: now };

    if (Object.keys(songCache).length > MAX_CACHE_SIZE) {
        // Remove the oldest entry
        const oldestKey = Object.keys(songCache).reduce((a, b) => 
            songCache[a].timestamp < songCache[b].timestamp ? a : b
        );
        delete songCache[oldestKey];
    }

    return song;
}
