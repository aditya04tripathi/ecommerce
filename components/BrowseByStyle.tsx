import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DRESS_STYLES = [
	{
		name: "Casual",
		image: "/casual.png",
		area: "casual",
	},
	{
		name: "Formal",
		image: "/formal.png",
		area: "formal",
	},
	{
		name: "Party",
		image: "/party.png",
		area: "party",
	},
	{
		name: "Gym",
		image: "/gym.png",
		area: "gym",
	},
];

const BrowseByStyle = () => {
	return (
		<div className="container mx-auto mt-10 bg-gray-100 p-5 m-5 rounded-lg md:p-10">
			<h1 className="text-center font-black text-3xl mb-5 md:mb-10">
				BROWSE BY DRESS STYLE
			</h1>
			<div className="flex flex-col gap-5 md:grid md:gap-6 md:grid-template-areas-browse">
				{DRESS_STYLES.map((item, idx) => (
					<Card
						key={idx}
						className={`!p-0 !shadow-none relative rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow md:grid-area-${item.area}`}
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
				))}
			</div>
		</div>
	);
};

export default BrowseByStyle;
