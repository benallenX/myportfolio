'use client ';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function navLink({ link }) {
	const pathName = usePathname();
	return (
		<Link
			className={`rounded p-1 ${
				pathName === link.url && 'bg-white text-blue-400 hover:text-blue-300'
			}`}
			href={link.url}>
			{link.title}
		</Link>
	);
}
