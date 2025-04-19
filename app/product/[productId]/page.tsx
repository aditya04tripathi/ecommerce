import { PageProps } from "@/.next/types/app/page";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	StarIcon,
	MoreHorizontalIcon,
	CheckIcon,
	ShoppingCartIcon,
} from "lucide-react";

const ProductPage = async ({ params }: PageProps) => {
	const { productId } = await params;

	// This would typically come from an API or database
	const product = {
		id: productId,
		name: "ONE LIFE GRAPHIC T-SHIRT",
		rating: 4.5,
		numReviews: 42,
		currentPrice: 260,
		originalPrice: 300,
		discount: 40,
		description:
			"This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
		images: [
			"https://picsum.photos/1000",
			"https://picsum.photos/1000",
			"https://picsum.photos/1000",
		],
		colors: ["olive", "darkgreen", "navy"],
		sizes: ["Small", "Medium", "Large", "X-Large"],
		material: "100% organic cotton",
		sku: "TSHIRT-001",
		inStock: true,
		tags: ["graphic", "t-shirt", "cotton", "comfortable"],
	};

	return (
		<div className="max-w-7xl mx-auto px-4">
			<Breadcrumb className="my-5">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/shop">Shop</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbLink href="/men">Men</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>T-Shirts</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="flex flex-col md:flex-row gap-8">
				<div className="flex gap-6 flex-row flex-1 md:w-1/2">
					<div className="flex flex-col justify-between gap-4 flex-[0.25]">
						{product.images.map((img, index) => (
							<div key={index} className="h-full relative">
								<Image
									src={img}
									alt={`${product.name} view ${index + 1}`}
									height={1000}
									width={1000}
									className="object-cover rounded-lg w-auto h-full"
								/>
							</div>
						))}
					</div>
					<div className="flex-[0.75] bg-gray-100 rounded-lg">
						<Image
							src="https://picsum.photos/1000"
							alt={product.name}
							height={1000}
							width={1000}
							className="object-cover rounded-lg w-auto h-full"
							priority
						/>
					</div>
				</div>

				<div className="md:w-1/2">
					<h1 className="text-3xl md:text-5xl font-bold mb-4">
						{product.name}
					</h1>

					<div className="flex items-center mb-4">
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<StarIcon
									key={i}
									className={`h-5 w-5 ${
										i < Math.floor(product.rating)
											? "text-yellow-400 fill-yellow-400"
											: i < product.rating
											? "text-yellow-400 fill-yellow-400"
											: "text-gray-300 fill-gray-300"
									}`}
								/>
							))}
						</div>
						<span className="ml-2 text-gray-600">{product.rating}/5</span>
						<span className="ml-2 text-gray-400">
							({product.numReviews} reviews)
						</span>
					</div>

					<div className="flex items-center gap-4 mb-6">
						<span className="text-3xl font-bold">${product.currentPrice}</span>
						<span className="text-2xl text-gray-400 line-through">
							${product.originalPrice}
						</span>
						<span className="bg-red-100 text-red-600 px-2 py-1 rounded">
							-{product.discount}%
						</span>
					</div>

					<p className="text-gray-600">{product.description}</p>

					{product.inStock ? (
						<Badge
							variant="outline"
							className="mt-2 text-green-600 bg-green-50 border-green-200"
						>
							In Stock
						</Badge>
					) : (
						<Badge
							variant="outline"
							className="mt-2 text-red-600 bg-red-50 border-red-200"
						>
							Out of Stock
						</Badge>
					)}

					<p className="text-sm text-gray-500 mt-2">SKU: {product.sku}</p>

					<Separator className="my-5" />

					<h3 className="font-medium mb-4">Select Colors</h3>
					<div className="flex gap-3">
						{product.colors.map((color, index) => (
							<Button
								key={color}
								className={`w-10 h-10 rounded-full ${
									index === 0 ? "ring-2 ring-offset-2 ring-gray-800" : ""
								}`}
								style={{ backgroundColor: color }}
								aria-label={`Select ${color} color`}
							/>
						))}
					</div>

					<Separator className="my-5" />

					<h3 className="font-medium mb-4">Choose Size</h3>
					<div className="flex gap-3">
						{product.sizes.map((size) => (
							<Button
								key={size}
								variant={size === "Large" ? "default" : "outline"}
								className={`py-2 px-4 rounded-full ${
									size === "Large"
										? "bg-primary text-primary-foreground"
										: "hover:bg-primary/10"
								}`}
							>
								{size}
							</Button>
						))}
					</div>

					<Separator className="my-5" />

					<div className="flex items-center gap-4 mb-5">
						<h3 className="font-medium">Quantity:</h3>
						<div className="flex items-center border border-gray-300 rounded-full">
							<Button variant="ghost" className="rounded-l-full px-3 h-10">
								−
							</Button>
							<span className="w-10 text-center">1</span>
							<Button variant="ghost" className="rounded-r-full px-3 h-10">
								+
							</Button>
						</div>
					</div>

					<Button className="flex-grow py-3 px-6 rounded-full bg-primary text-primary-foreground w-full sm:w-auto">
						<ShoppingCartIcon className="mr-2 h-5 w-5" />
						Add to Cart
					</Button>
				</div>
			</div>

			<Tabs defaultValue="details" className="mt-10 w-full">
				<TabsList className="w-full">
					<TabsTrigger className="flex-1 w-full" value="details">
						Product Details
					</TabsTrigger>
					<TabsTrigger className="flex-1 w-full" value="reviews">
						Ratings & Reviews
					</TabsTrigger>
					<TabsTrigger className="flex-1 w-full" value="faq">
						FAQs
					</TabsTrigger>
				</TabsList>

				<TabsContent value="details" className="mt-6">
					<h3 className="text-xl font-bold mb-4">Product Details</h3>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="material">
							<AccordionTrigger>Material & Care</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc pl-5 space-y-2">
									<li>100% cotton fabric for breathability and comfort</li>
									<li>Machine wash cold with like colors</li>
									<li>Tumble dry low</li>
									<li>Do not bleach</li>
									<li>Iron on low heat if necessary</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="features">
							<AccordionTrigger>Features</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc pl-5 space-y-2">
									<li>Unique graphic design on front</li>
									<li>Ribbed crew neck for durability</li>
									<li>Short sleeves with double-stitched hems</li>
									<li>Regular fit for everyday comfort</li>
									<li>Pre-shrunk to minimize shrinkage</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="sizing">
							<AccordionTrigger>Sizing Information</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-4">
									<p>
										This t-shirt follows standard sizing with a regular fit. For
										a more relaxed fit, we recommend sizing up.
									</p>
									<div className="overflow-x-auto">
										<table className="min-w-full divide-y divide-gray-200">
											<thead>
												<tr>
													<th className="px-4 py-2 text-left">Size</th>
													<th className="px-4 py-2 text-left">
														Chest (inches)
													</th>
													<th className="px-4 py-2 text-left">
														Length (inches)
													</th>
												</tr>
											</thead>
											<tbody className="divide-y divide-gray-200">
												<tr>
													<td className="px-4 py-2">Small</td>
													<td className="px-4 py-2">36-38</td>
													<td className="px-4 py-2">27</td>
												</tr>
												<tr>
													<td className="px-4 py-2">Medium</td>
													<td className="px-4 py-2">38-40</td>
													<td className="px-4 py-2">28</td>
												</tr>
												<tr>
													<td className="px-4 py-2">Large</td>
													<td className="px-4 py-2">40-42</td>
													<td className="px-4 py-2">29</td>
												</tr>
												<tr>
													<td className="px-4 py-2">X-Large</td>
													<td className="px-4 py-2">42-44</td>
													<td className="px-4 py-2">30</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="shipping">
							<AccordionTrigger>Shipping & Returns</AccordionTrigger>
							<AccordionContent>
								<div className="space-y-2">
									<p>
										<strong>Shipping:</strong> Free standard shipping on all
										orders over $50. Orders typically ship within 1-2 business
										days.
									</p>
									<p>
										<strong>Returns:</strong> We accept returns within 30 days
										of delivery. Item must be unworn, unwashed, and with
										original tags attached.
									</p>
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</TabsContent>

				<TabsContent value="reviews" className="mt-6">
					<div className="flex flex-col md:flex-row justify-between mb-6">
						<div>
							<h3 className="text-xl font-bold">All Reviews</h3>
							<p className="text-muted-foreground">
								{product.numReviews} reviews
							</p>
						</div>
						<Button className="mt-4 md:mt-0 bg-primary rounded-full">
							Write a Review
						</Button>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						<Card>
							<CardContent className="p-6">
								<div className="flex justify-between">
									<div className="flex text-yellow-400 text-lg">
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current opacity-50" />
									</div>
								</div>

								<div className="flex items-center gap-2 mt-2">
									<h4 className="font-semibold">Samantha D.</h4>
									<Badge variant="secondary" className="rounded-full">
										<CheckIcon className="h-3 w-3 text-green-500 mr-1" />
										Verified
									</Badge>
								</div>

								<p className="mt-4 text-gray-600">
									"I absolutely love this t-shirt! The design is unique and the
									fabric feels so comfortable. As a fellow designer, I
									appreciate the attention to detail. It's become my favorite
									go-to shirt."
								</p>

								<p className="text-sm text-muted-foreground mt-4">
									Posted on August 14, 2023
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-6">
								<div className="flex justify-between">
									<div className="flex text-yellow-400 text-lg">
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
									</div>
								</div>

								<div className="flex items-center gap-2 mt-2">
									<h4 className="font-semibold">Michael R.</h4>
									<Badge variant="secondary" className="rounded-full">
										<CheckIcon className="h-3 w-3 text-green-500 mr-1" />
										Verified
									</Badge>
								</div>

								<p className="mt-4 text-gray-600">
									"Great quality material and the fit is perfect. I've washed it
									multiple times and it still looks brand new. Shipping was fast
									too. Will definitely buy more colors!"
								</p>

								<p className="text-sm text-muted-foreground mt-4">
									Posted on July 29, 2023
								</p>
							</CardContent>
						</Card>

						<Card>
							<CardContent className="p-6">
								<div className="flex justify-between">
									<div className="flex text-yellow-400 text-lg">
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current" />
										<StarIcon className="fill-current opacity-50" />
									</div>
								</div>

								<div className="flex items-center gap-2 mt-2">
									<h4 className="font-semibold">Jennifer T.</h4>
									<Badge variant="secondary" className="rounded-full">
										<CheckIcon className="h-3 w-3 text-green-500 mr-1" />
										Verified
									</Badge>
								</div>

								<p className="mt-4 text-gray-600">
									"The design is even better in person. I receive compliments
									every time I wear it. Would recommend sizing up if you're
									between sizes as it shrinks slightly after washing."
								</p>

								<p className="text-sm text-muted-foreground mt-4">
									Posted on August 3, 2023
								</p>
							</CardContent>
						</Card>
					</div>
					<div className="flex w-full justify-center mt-8">
						<Button variant="outline">Load More Reviews</Button>
					</div>
				</TabsContent>

				<TabsContent value="faq" className="mt-6">
					<h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="sizing">
							<AccordionTrigger>How does the sizing run?</AccordionTrigger>
							<AccordionContent>
								Our t-shirts follow standard sizing, but we recommend checking
								the size chart for exact measurements. If you're between sizes
								or prefer a looser fit, we recommend sizing up.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="shipping">
							<AccordionTrigger>
								What are the shipping options and times?
							</AccordionTrigger>
							<AccordionContent>
								We offer standard shipping (5-7 business days), expedited
								shipping (2-3 business days), and overnight shipping (1 business
								day). Orders are processed within 24 hours during weekdays.
								International shipping typically takes 7-14 business days
								depending on the destination.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="returns">
							<AccordionTrigger>What's your return policy?</AccordionTrigger>
							<AccordionContent>
								We accept returns within 30 days of delivery. Items must be
								unworn, unwashed, and have original tags attached. Return
								shipping is free for exchanges, or if the return is due to our
								error. For other returns, a shipping fee may apply.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="wash">
							<AccordionTrigger>
								How should I wash this t-shirt?
							</AccordionTrigger>
							<AccordionContent>
								For best results and to maintain the print quality, machine wash
								cold with like colors, inside-out. Use mild detergent and avoid
								bleach. Tumble dry on low heat or hang to dry. Do not iron
								directly on the printed area.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="sustainable">
							<AccordionTrigger>Is this product sustainable?</AccordionTrigger>
							<AccordionContent>
								Yes! Our graphic t-shirts are made from 100% organic cotton that
								is sustainably sourced and certified. We use eco-friendly
								water-based inks for printing and our packaging is made from
								recycled materials and is fully biodegradable.
							</AccordionContent>
						</AccordionItem>
						<AccordionItem value="bundle">
							<AccordionTrigger>
								Do you offer bundle discounts?
							</AccordionTrigger>
							<AccordionContent>
								Yes, we do! Purchase any 3 t-shirts and get 15% off
								automatically at checkout. For larger orders or custom bulk
								orders, please contact our customer service for special pricing.
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</TabsContent>
			</Tabs>
		</div>
	);
};

export default ProductPage;
