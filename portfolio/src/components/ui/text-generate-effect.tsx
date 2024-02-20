'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/utils/cn';

export const TextGenerateEffect = ({
	words,
	className,
}: {
	words: string;
	className?: string;
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(' ');
	useEffect(() => {
		animate(
			'span',
			{
				opacity: 1,
			},
			{
				duration: 3,
				delay: stagger(0.3),
			},
		);
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center opacity-0">
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div className={cn('font-bold', className)}>
			<div className="mt-4">
				<div className=" dark:text-white text-blue-300 text-2xl leading-snug tracking-wide">
					{renderWords()}
				</div>
			</div>
		</div>
	);
};
