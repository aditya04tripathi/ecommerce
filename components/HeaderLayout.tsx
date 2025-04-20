import React from "react";
import Image from "next/image";

interface HeaderLayoutProps {
	children: React.ReactNode;
	title: string;
}

const HeaderLayout = ({ children, title }: HeaderLayoutProps) => (
	<>
		<div className="relative w-full h-64 flex items-center justify-center mb-12 overflow-hidden">
			<Image
				src="https://picsum.photos/1920/1080"
				alt="Header background"
				fill
				className="object-cover"
				priority
			/>
			<div className="absolute inset-0 bg-black/50" />
			<h1 className="relative z-10 text-white text-5xl md:text-6xl font-extrabold text-center drop-shadow-lg">
				{title}
			</h1>
		</div>
		<div className="container mx-auto px-4 py-10 max-w-6xl">{children}</div>
	</>
);

export default HeaderLayout;
