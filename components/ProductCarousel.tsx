import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Button } from "./ui/button";
import ProductCard, { Product } from "./ProductCard";

// Sample product data to match the image
const SAMPLE_PRODUCTS: Product[] = [
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

			<div className="md:hidden px-5">
				<Carousel>
					<CarouselContent>
						{SAMPLE_PRODUCTS.map((product, idx) => (
							<CarouselItem key={idx} className="basis-[75%] sm:basis-[45%]">
								<ProductCard product={product} />
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>

			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{SAMPLE_PRODUCTS.map((product, idx) => (
					<ProductCard key={idx} product={product} />
				))}
			</div>

			<Button
				variant={"outline"}
				className="cursor-pointer w-[calc(100%-40px)] md:w-fit md:mx-auto rounded-full mx-auto mt-8 px-12"
			>
				View All
			</Button>
		</div>
	);
};

export default ProductCarousel;
