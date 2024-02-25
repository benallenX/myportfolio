'use client';
import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';
import { TextGenerateEffectDemo } from './words';
export function Sparkles() {
	return (
		<div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
			<div className=" absolute inset-0 ">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#FFFFFF"
				/>
			</div>
			<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl font-bold overflow-hidden">
				{/* Image container */}
				<div className="h-1/2 lg:h-full lg:w-1/2 ">
					<TextGenerateEffectDemo />
				</div>
				{/* Text container */}
				<div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
					{/* Title */}

					<div className="flex flex-row gap-5 overflow-hidden">
						<button className="p-4 ring-1 ring-slate-400 rounded-lg bg-white text-black">
							View My Work
						</button>
						<button className="p-4 ring-1 ring-blue-300 bg-white text-black rounded-lg">
							Contact
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
