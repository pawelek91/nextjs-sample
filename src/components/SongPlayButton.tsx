'use client';

import React, { useState } from 'react';
import SongPlayer from './SongPlayer';
import { FaPlay } from 'react-icons/fa';
import { I_SongItem } from '@/types/backend.interfaces';

const SongPlayButton = ({ song }: { song: I_SongItem }) => {
    const [showPlayer, setShowPlayer] = useState(false);

    const handlePlay = () => {
        setShowPlayer((prev) => !prev);
    };

    return (
        <>
            <button className="btn btn-primary" onClick={handlePlay}>
                <FaPlay />
            </button>
            {showPlayer && <SongPlayer songData={song} show={showPlayer} setShow={setShowPlayer} />}
        </>
    );
};

export default SongPlayButton;
