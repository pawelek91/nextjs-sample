import React, { Suspense } from 'react';

import SongCardListServer from '@/components/SongCardListServer';
import Link from '@/components/Link';
import SongListLoader from '@/components/SongListLoader';

export default async function ServerExamplePage() {
	return (
		<div className="m-auto w-full max-w-7xl grid grid-cols-4 gap-6 py-10 px-4 2xl:px-0">
			<h1 className="text-2xl font-bold col-span-4 text-center">Server Example</h1>
			<div className="col-span-4 flex items-center justify-center gap-4">
				<Link className="btn btn-primary" href="/">
					Go Back
				</Link>
			</div>
			<Suspense fallback={<SongListLoader/>}>
				<SongCardListServer />
			</Suspense>
		</div>
	);
}
