import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { FaTimesCircle } from 'react-icons/fa';

interface Props {
	className?: string;
	children?: React.ReactNode;
	show: boolean;
	setShow: React.Dispatch<React.SetStateAction<boolean>>;
	clickBgToClose?: boolean;
}

export default function ModalRoot(props: Props) {
	const { className, children, show, setShow, clickBgToClose = false } = props;
	const classes = ['fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/80 flex items-center justify-center px-4'];
	if (className) classes.push(className);


	return (
		<AnimatePresence mode="wait">
			{show ? (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.3 }}
					className={classes.join(' ')}
					onClick={() => clickBgToClose && setShow(false)}
				>
					<div className="absolute top-4 right-4 p-4">
						<button
							className="text-white hover:text-white/80 transition-colors duration-300 ease-in-out"
							onClick={() => setShow(false)}
						>
							<FaTimesCircle size={32} />
						</button>
					</div>
					{children}
					
				</motion.div>
			) : null}
		</AnimatePresence>
	);
}
