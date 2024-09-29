import React from 'react';
import ModalRoot from '@/components/modals/ModalRoot';
import { I_SongDetails } from '@/interfaces/contentful.interfaces';

interface Props {
	song: I_SongDetails;
	className?: string;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
}

export default function Spotify(props: Props) {
	const { song, className, show, setShow } = props;

	return (
		<ModalRoot show={show} setShow={setShow}>
			<div className="w-full max-w-2xl">
				{/* <iframe
					src={url}
					width="100%"
					height="352"
					allowFullScreen={false}
					allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
					loading="lazy"
				></iframe> */}
				<div className="card col-span-4 md:col-span-2 2xl:col-span-1 bg-base-200">
		
		 		<div className="card-body">
		 			<div className="flex flex-col gap-2">
		 				<div className="text-xl font-bold">{song.id}</div>
		 				<div className="flex items-center justify-between w-full">
		 					{song.spotifyUrl}
		 				</div>
					</div>
				</div>
		 	</div>
				<button
					className="mt-4 btn w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
					onClick={() => setShow(false)}
				>
					Close
				</button>
			</div>
		</ModalRoot>
	);
}
