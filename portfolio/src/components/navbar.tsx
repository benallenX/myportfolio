'use client';

import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';

export default function Navbar() {
	const links = [
		{ url: '/', title: 'Home' },
		{ url: '/about', title: 'About' },
		{ url: '/portfolio', title: 'Portfolio' },
		{ url: '/contact', title: 'Contact' },
	];

	const [open, setOpen] = useState(false);
	const topVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: 'rgb(255,255,255)',
		},
	};

	const centerVariants = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariants = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: 'rgb(255,255,255)',
		},
	};

	const listVariants = {
		closed: {
			x: '100vw',
		},
		opened: {
			x: 0,
			transition: {
				when: 'beforeChildren',
				staggerChildren: 0.2,
			},
		},
	};

	const listItemVariants = {
		closed: {
			x: -10,
			opacity: 0,
		},
		opened: {
			x: 0,
			opacity: 1,
		},
	};
	return (
		<div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48  text-blue-300 text-xl">
			{/* links */}

			<div className="hidden md:flex gap-4 w-1/3">
				{links.map((link) => (
					<NavLink link={link} key={link.title} />
				))}
			</div>
			{/* LOGO */}
			<div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
				<Link
					href="/"
					className="text-sm bg-white rounded-md p-1 font-bold flex items-center justify-center">
					<span className="text-black mr-1">Ben</span>
					<span className="w-12 h-8 rounded bg-black text-white flex items-center justify-center">
						Allen
					</span>
				</Link>
			</div>
			{/* social */}
			<div className="  flex flex-row gap-4 w-1/3">
				<Link href="https://github.com/benallenX">
					<FaGithub style={{ width: '48px', height: '48px', color: 'white' }} />
				</Link>
				<Link href="https://www.linkedin.com/in/bjallen12/">
					<FaLinkedin
						style={{ width: '48px', height: '48px', color: 'white' }}
					/>
				</Link>
			</div>
			<div className="md:hidden">
				{/* Menu Button */}
				<button
					className="w-10 h-8 flex flex-col justify-between z-50 relative"
					onClick={() => setOpen(!open)}>
					<motion.div
						variants={topVariants}
						animate={open ? 'opened' : 'closed'}
						className="w-10 h-1 bg-white rounded origin-left"></motion.div>
					<motion.div
						variants={centerVariants}
						animate={open ? 'opened' : 'closed'}
						className="w-10 h-1 bg-white  rounded"></motion.div>
					<motion.div
						variants={bottomVariants}
						animate={open ? 'opened' : 'closed'}
						className="w-10 h-1 bg-white  rounded origin-left"></motion.div>
				</button>
				{/* menu list */}
				{open && (
					<motion.div
						variants={listVariants}
						initial="closed"
						animate="opened"
						className="absolute top-0 left-0 w-screen h-screen bg-black text-blue-300 text-3xl flex flex-col items-center justify-center gap-8 z-10">
						{links.map((link) => (
							<motion.div variants={listItemVariants} key={link.title}>
								<Link href={link.url}>{link.title}</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
}
