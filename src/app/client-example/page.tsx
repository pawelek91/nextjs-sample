import React from 'react';
import BoxLoader from '@/components/BoxLoader';

import dynamic from 'next/dynamic';
import SongListLoader from '@/components/SongListLoader';
const ClientExampleView = dynamic(() => import('./ClientExampleView'), {
	loading: () => <SongListLoader />,
	ssr: false,
});

export default function ClientExamplePage() {
	return (
		<div className="m-auto w-full max-w-7xl grid grid-cols-4 gap-6 py-10 px-4 2xl:px-0">
			<h1 className="text-2xl font-bold col-span-4 text-center">Client Example</h1>

			<ClientExampleView />
		</div>
	);
}
