import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const STATS = [
	{
		value: "200+",
		label: "International Brands",
	},
	{
		value: "2,000+",
		label: "High-Quality Products",
	},
	{
		value: "30,000+",
		label: "Happy Customers",
	},
];

const HeroSection = () => {
	return (
		<div className="container mx-auto flex flex-col md:flex-row md:items-center md:gap-10">
			<div className="md:w-1/2 md:pr-5 flex flex-col">
				<h1 className="px-5 md:px-0 font-black text-3xl my-5 md:text-5xl md:leading-tight">
					FIND CLOTHES THAT MATCHES YOUR STYLE
				</h1>
				<p className="px-5 md:px-0 text-muted-foreground text-sm font-light mb-5 md:mb-8 md:max-w-md">
					Browse through our diverse range of meticulously crafted garments,
					designed to bring out your individuality and cater to your sense of
					style.
				</p>
				<Button className="mx-auto md:mx-0 w-[calc(100vw-40px)] md:w-fit md:px-10 rounded-full mb-5">
					Shop Now
				</Button>

				<div className="px-5 md:px-0 flex flex-wrap justify-center md:justify-start gap-2.5 md:gap-x-16 md:mt-8">
					{STATS.map((item) => (
						<div
							key={item.label}
							className="flex flex-col justify-center items-center mb-2 md:mb-0 md:items-start"
						>
							<span className="font-medium text-lg md:text-2xl">
								{item.value}
							</span>
							<span className="text-muted-foreground text-sm font-light">
								{item.label}
							</span>
						</div>
					))}
				</div>
			</div>

			<div className="md:w-1/2 md:relative">
				<Image
					alt="hero"
					src="/person.png"
					width={1080}
					height={1920}
					className="w-full md:h-[600px] md:object-cover md:object-center"
				/>
			</div>

			<div className="p-2.5 bg-foreground flex justify-center items-center flex-wrap gap-2.5 w-full md:hidden">
				{["Versace", "Gucci", "Zara", "Prada", "Chanel"].map((brand) => (
					<span key={brand} className="text-background text-3xl">
						{brand}
					</span>
				))}
			</div>
		</div>
	);
};

export default HeroSection;
