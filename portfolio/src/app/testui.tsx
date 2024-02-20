'use client';
import React from 'react';
import { WavyBackground } from '@/components/ui/wavy-background';
import { TextGenerateEffectDemo } from './words';

export function NewWavyBackground() {
	const words = 'Hello';
	return (
		<WavyBackground className="max-w-4xl mx-auto pb-40">
			<TextGenerateEffectDemo />
		</WavyBackground>
	);
}
