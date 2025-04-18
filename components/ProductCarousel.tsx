import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

// Sample product data to match the image
const SAMPLE_PRODUCTS = [
	{
		id: 1,
		name: "T-shirt with Tape Details",
		price: 120,
		originalPrice: 120,
		rating: 4.5,
		discount: null,
		image: "https://picsum.photos/1080",
	},
	{
		id: 2,
		name: "Skinny Fit Jeans",
		price: 240,
		originalPrice: 260,
		rating: 3.5,
		discount: "-20%",
		image: "https://picsum.photos/1080",
	},
	{
		id: 3,
		name: "Checkered Shirt",
		price: 180,
		originalPrice: 180,
		rating: 4.5,
		discount: null,
		image: "https://picsum.photos/1080",
	},
	{
		id: 4,
		name: "Sleeve Striped T-shirt",
		price: 130,
		originalPrice: 160,
		rating: 4.5,
		discount: "-30%",
		image: "https://picsum.photos/1080",
	},
];

const ProductCarousel = (
	{ title }: { title?: string } = {
		title: "NEW ARRIVALS",
	}
) => {
	return (
		<div className="container mx-auto flex flex-col pt-10">
			<h1 className="text-center text-3xl font-black pb-7">{title}</h1>

			{/* Mobile view - Carousel */}
			<div className="md:hidden">
				<Carousel>
					<CarouselContent>
						{SAMPLE_PRODUCTS.map((product, idx) => (
							<CarouselItem key={idx} className="basis-[75%] sm:basis-[45%]">
								<Card className="w-full !p-0 border-none shadow-none">
									<CardContent className="!p-0 relative">
										<Image
											alt={product.name}
											src={product.image || "https://picsum.photos/500"}
											width={500}
											height={500}
											className="w-full h-auto overflow-clip aspect-square object-contain"
										/>
										{product.discount && (
											<span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
												{product.discount}
											</span>
										)}
										<div className="my-2 flex flex-col space-y-1">
											<h1 className="font-bold">{product.name}</h1>
											<div className="flex gap-1 items-center">
												{[1, 2, 3, 4, 5].map((_, idx) => (
													<Star
														key={idx}
														size={14}
														className={
															idx < Math.floor(product.rating)
																? "fill-yellow-400 text-yellow-400"
																: "text-gray-300"
														}
													/>
												))}
												<span className="text-muted-foreground text-xs font-light ml-2">
													{product.rating}/5
												</span>
											</div>
											<span className="flex items-center gap-1 font-medium">
												<span>${product.price.toFixed(0)}</span>
												{product.originalPrice > product.price && (
													<span className="text-muted-foreground line-through font-light">
														${product.originalPrice.toFixed(0)}
													</span>
												)}
											</span>
										</div>
									</CardContent>
								</Card>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			{/* Desktop view - Grid */}
			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{SAMPLE_PRODUCTS.map((product, idx) => (
					<Card key={idx} className="w-full !p-0 border-none shadow-none">
						<CardContent className="!p-0 relative">
							<Image
								alt={product.name}
								src={product.image || "https://picsum.photos/500"}
								width={500}
								height={500}
								className="w-full h-auto overflow-clip aspect-square object-contain p-4 hover:scale-105 transition-transform duration-300"
							/>
							{product.discount && (
								<span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
									{product.discount}
								</span>
							)}
							<div className="my-3 flex flex-col space-y-1">
								<h1 className="font-bold">{product.name}</h1>
								<div className="flex gap-1 items-center">
									{[1, 2, 3, 4, 5].map((_, idx) => (
										<Star
											key={idx}
											size={14}
											className={
												idx < Math.floor(product.rating)
													? "fill-yellow-400 text-yellow-400"
													: "text-gray-300"
											}
										/>
									))}
									<span className="text-muted-foreground text-xs font-light ml-2">
										{product.rating}/5
									</span>
								</div>
								<span className="flex items-center gap-2 font-medium">
									<span className="text-black text-lg">
										${product.price.toFixed(0)}
									</span>
									{product.originalPrice > product.price && (
										<span className="text-gray-400 line-through font-light">
											${product.originalPrice.toFixed(0)}
										</span>
									)}
								</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>

			<Button
				variant={"outline"}
				className="w-full md:w-fit md:mx-auto rounded-full mx-auto mt-8 px-12"
			>
				View All
			</Button>
		</div>
	);
};

export default ProductCarousel;
