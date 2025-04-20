import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const DRESS_STYLES = [
	{
		name: "Casual",
		image: "https://picsum.photos/1080",
		area: "casual",
		link: "/category/casual",
	},
	{
		name: "Formal",
		image: "https://picsum.photos/1080",
		area: "formal",
		link: "/category/formal",
	},
	{
		name: "Party",
		image: "https://picsum.photos/1080",
		area: "party",
		link: "/category/party",
	},
	{
		name: "Gym",
		image: "https://picsum.photos/1080",
		area: "gym",
		link: "/category/gym",
	},
];

const BrowseByStyle = () => {
	return (
		<div className="container mx-auto mt-10 bg-secondary p-5 md:rounded md:p-10">
			<h1 className="text-center text-secondary-foreground font-black text-3xl mb-5 md:mb-10">
				BROWSE BY DRESS STYLE
			</h1>
			<div className="flex flex-col gap-5 md:grid md:gap-6 md:grid-template-areas-browse">
				{DRESS_STYLES.map((item, idx) => (
					<Link
						className={`w-full h-full cursor-pointer md:grid-area-${item.area}`}
						href={item.link}
						key={idx}
					>
						<Card
							className={`w-full h-full !p-0 !border-secondary !shadow-none relative rounded overflow-hidden cursor-pointer hover:shadow-md transition-shadow`}
						>
							<CardContent
								className="p-0"
								style={{
									backgroundImage: `url("${item.image}")`,
									backgroundSize: "cover",
									backgroundPosition: "center",
									backgroundRepeat: "no-repeat",
									height: "100%",
									minHeight: "220px",
								}}
							>
								<div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
									<h1 className="absolute top-5 left-5 font-medium text-xl text-white">
										{item.name}
									</h1>
								</div>
							</CardContent>
						</Card>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BrowseByStyle;
