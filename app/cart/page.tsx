import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Tag, Trash2 } from "lucide-react";
import Image from "next/image";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import QuantitySelector from "@/components/QuantitySelector";

const PRODUCTS = [
	{
		id: 1,
		name: "Product 1",
		price: 10.0,
		imageUrl: "https://picsum.photos/500",
		size: "Medium",
		color: "White",
		quantity: 1,
	},
	{
		id: 2,
		name: "Product 2",
		price: 20.0,
		imageUrl: "https://picsum.photos/500",
		size: "Large",
		color: "Black",
		quantity: 2,
	},
	{
		id: 3,
		name: "Product 3",
		price: 15.0,
		imageUrl: "https://picsum.photos/500",
		size: "Small",
		color: "Red",
		quantity: 1,
	},
];

const CartPage = () => {
	return (
		<div className="container mx-auto mt-10 px-4 md:px-6">
			<Breadcrumb className="mb-5">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>Cart</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<h1 className="text-2xl font-bold">Your Cart</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
				<div className="border p-5 rounded h-fit">
					{PRODUCTS.map((product, idx) => (
						<React.Fragment key={product.id}>
							<div className="flex flex-1 justify-start items-center">
								<Image
									alt="logo"
									src={product.imageUrl}
									width={500}
									height={500}
									className="w-32 h-32 rounded"
								/>

								<div className="w-full flex-1 flex flex-col justify-between gap-2.5 ml-5">
									<div className="flex w-full justify-between">
										<h1 className="text-xl font-bold">{product.name}</h1>
										<Button variant={"outline"} className="h-8 w-8 p-0">
											<Trash2 className="text-destructive" />
										</Button>
									</div>

									<div className="flex flex-col">
										<p className="text-xs text-muted-foreground">
											<span className="font-bold">Size:</span>
											<span className="text-muted-foreground">
												{" "}
												{product.size}
											</span>
										</p>
										<p className="text-xs text-muted-foreground">
											<span className="font-bold">Color:</span>
											<span className="text-muted-foreground">
												{" "}
												{product.color}
											</span>
										</p>
									</div>

									<div className="flex items-center justify-between w-full">
										<h1 className="text-xl font-bold">${product.price}</h1>
										<QuantitySelector />
									</div>
								</div>
							</div>
							{idx !== PRODUCTS.length - 1 && <Separator className="my-5" />}
						</React.Fragment>
					))}
				</div>
				<div className="h-fit border p-5 rounded">
					<h1 className="text-xl font-medium">Order Summary</h1>
					<div className="flex justify-between my-2.5">
						<p className="text-muted-foreground">Subtotal</p>
						<p className="text-muted-foreground">$0.00</p>
					</div>
					<div className="flex justify-between my-2.5">
						<p className="text-muted-foreground">Discount (20%)</p>
						<p className="text-destructive">-$0.00</p>
					</div>
					<div className="flex justify-between my-2.5">
						<p className="text-muted-foreground">Shipping</p>
						<p className="text-muted-foreground">$0.00</p>
					</div>
					<Separator className="my-5" />
					<div className="flex justify-between my-2.5">
						<p className="text-muted-foreground">Total</p>
						<p className="text-muted-foreground text-xl">$0.00</p>
					</div>
					<div className="flex justify-between flex-1 gap-2">
						<div className="w-full flex-[0.75] flex relative items-center rounded bg-muted px-4">
							<Tag className="w-4 h-4 text-muted-foreground" />
							<Input
								className="!shadow-none w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pl-2 h-8"
								placeholder="Add promo code"
							/>
						</div>
						<Button variant={"secondary"} className="w-full flex-[0.25]">
							Apply
						</Button>
					</div>
					<Button className="mt-5">
						Proceed to Checkout
						<ArrowRight />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
