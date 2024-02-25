import { Sparkles } from './sparkles';
import { TextGenerateEffectDemo } from './words';
export default function page() {
	return (
		<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl font-bold ">
			{/* Image container */}
			<div className="h-1/2 lg:h-full lg:w-1/2 ">
				<TextGenerateEffectDemo />
			</div>
			{/* Text container */}
			<div className=" lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
				{/* Title */}
				<Sparkles />
				<div className="flex flex-row gap-5">
					<button className="p-4 ring-1 ring-slate-400 rounded-lg bg-white text-black">
						View My Work
					</button>
					<button className="p-4 ring-1 ring-blue-300 bg-white text-black rounded-lg">
						Contact
					</button>
				</div>
			</div>
		</div>
	);
}
