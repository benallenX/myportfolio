'use client';
import React from 'react';
import { SparklesCore } from '@/components/ui/sparkles';

export function Sparkles() {
	return (
		<div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
			<div className="w-full absolute inset-0 h-screen">
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
			<h1 className="md:text-lg text-3xl lg:text-2xl font-bold text-center text-white relative z-20">
				I'm Ben Allen, a Full-Stack Developer with a passion for building
				scalable web applications and innovative tech solutions. Specializing in
				React, Node.js, and Next.js, I turn complex problems into intuitive,
				user-friendly experiences.
			</h1>
		</div>
	);
}
