import React, { useState, useEffect, Suspense } from 'react';
import SongCardServer from './SongCardServer';
import fetchSongs from '@/app/actions/fetchSongs';
import Link from './Link';
import { I_SongItem } from '@/types/backend.interfaces';

const SongList = async() => {
    const songs = await fetchSongs(); // Rzuca obietnicę, jeśli dane nie są jeszcze dostępne
    return (
        <>
            {songs.map((song) => (
                <SongCardServer key={song.id} song={song} />
            ))}
        </>
    );
};

export default function SongCardListServer() {
    return (
        <div className="m-auto w-full max-w-7xl grid grid-cols-4 gap-6 py-10 px-4 2xl:px-0">
            <h1 className="text-2xl font-bold col-span-4 text-center">Server Example</h1>
            <div className="col-span-4 flex items-center justify-center gap-4">
                <Link className="btn btn-primary" href="/">Go Back</Link>
            </div>
            <Suspense fallback={<div className="text-center">Loading songs...</div>}>
                <SongList />
            </Suspense>
        </div>
    );
}