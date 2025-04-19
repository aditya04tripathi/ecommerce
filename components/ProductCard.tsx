"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

export interface Product {
	id: number;
	name: string;
	price: number;
	originalPrice: number;
	rating: number;
	discount: string | null;
	image: string;
	href: string;
}

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const router = useRouter();

	return (
		<Card
			onClick={() => router.push(product.href)}
			className="w-full !p-0 border-none overflow-clip shadow-none cursor-pointer"
		>
			<CardContent className="!p-0 relative">
				<Image
					alt={product.name}
					src={product.image || "https://picsum.photos/500"}
					width={500}
					height={500}
					className="w-full h-auto overflow-clip aspect-square object-contain transition-transform duration-300"
				/>
				{product.discount && (
					<div className="rounded-bl-full absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-5 py-1">
						{product.discount}
					</div>
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
	);
};

export default ProductCard;
