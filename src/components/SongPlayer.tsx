'use client';

import React, { Suspense } from 'react';
import FullScreenLoader from './FullScreenLoader';
import fetchSong from '@/app/actions/fetchSong';
import { I_SongDetails, I_SongItem } from '@/types/backend.interfaces';

// Lazy loading of Spotify component
const Spotify = React.lazy(() => import('./Players/Spotify'));

interface Props {
    songData: I_SongItem;
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

// Function to fetch song data
const fetchSongData = async (slug: string) => {
    const song = await fetchSong(slug);
    return song;
};

export default function SongPlayer({ songData, show, setShow }: Props) {
    const [song, setSong] = React.useState<I_SongDetails | null>(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (show) {
            setIsLoading(true);
            fetchSongData(songData.slug)
                .then(setSong)
                .catch(() => setError('Failed to load song'))
                .finally(() => setIsLoading(false));
        }
    }, [show, songData.slug]);

    //if (isLoading) return <FullScreenLoader />;
    if (error) return <div className="m-auto text-error">{error}</div>;
    
    // Use Suspense to wrap Spotify
    return (
        // <Suspense fallback={<FullScreenLoader />}>
        //     {song && <Spotify show={show} song={song} setShow={setShow} />}
        // </Suspense>

<Suspense fallback="loading">
{song && <Spotify show={show} song={song} setShow={setShow} />}
</Suspense>
    );
}
