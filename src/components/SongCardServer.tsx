import React from 'react';

import { I_SongItem } from '@/interfaces/contentful.interfaces';
import SongPlayButton from './SongPlayButton';

const SongCardServer = (props: { song: I_SongItem }) => {
	const { song } = props;


	return (
		<>
			<div className="card bordered shadow-lg col-span-4 md:col-span-2 2xl:col-span-1 bg-base-200">
				
				<div className="card-body">
					<div className="flex flex-col gap-2">
						<div className="text-xl font-bold">{song.title}</div>
						<div className="flex items-center justify-between w-full">
							<div className="text-sm text-gray-500">{song.id}</div>
							<SongPlayButton song={song}/>
						</div>
					</div>
				</div>
			</div></>
	);
};

export default SongCardServer;
