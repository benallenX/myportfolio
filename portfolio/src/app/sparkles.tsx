'use client';
import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';

export function Sparkles() {
	return (
		<div className="h-[30rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md ">
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
		</div>
	);
}
