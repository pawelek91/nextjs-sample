import React from 'react';
import Link from '@/components/Link';
import { FaPlay } from 'react-icons/fa';



export default function SongListLoader() {
	return (
		<>
			
			{Array.from({ length: 12 }).map((_, i) => (
				<>
				<div key={i} className="card bordered shadow-lg col-span-4 md:col-span-2 2xl:col-span-1 bg-base-200">
					
					<div className="card-body">
						<div className="flex flex-col gap-2">
							<div className={`loading loading-bars text-white`}>Loading...</div>
							<div className="flex items-center justify-between w-full">
								<div className={`loading loading-bars text-white`}>Loading...</div>
								<button className="btn btn-primary" >
									<FaPlay />
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
			))}
		</>
	);
}
