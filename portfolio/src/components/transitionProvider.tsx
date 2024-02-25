'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './navbar';
import { usePathname } from 'next/navigation';
export default function transitionProvider({ children }) {
	const pathName = usePathname();
	return (
		<AnimatePresence>
			<div key={pathName} className="w-screen h-screen bg-black">
				<motion.div
					className="h-screen w-screen fixed bg-black rounded-b-[100px] z-50"
					animate={{ height: '0Vh' }}
					exit={{ height: '140vh' }}
					transition={{ duration: 0.4, ease: 'easeOut' }}
				/>
				<div className="h-24">
					<Navbar />
				</div>
				<div className="h-[calc(100vh-6rem)]">{children}</div>
			</div>
		</AnimatePresence>
	);
}
