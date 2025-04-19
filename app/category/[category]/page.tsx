import ProductCard from "@/components/ProductCard";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import Filters from "@/components/Filters";

const CategoryPage = ({
	params,
}: {
	params: {
		category: string;
	};
	searchParams?: { [key: string]: string | string[] | undefined };
}) => {
	const formattedCategoryName = () => {
		return `${params.category[0].toUpperCase()}${params.category.slice(1)}`;
	};

	// Sample products with more realistic data
	const sampleProducts = [
		{
			id: 1,
			name: "Gradient Graphic T-shirt",
			price: 145,
			originalPrice: 145,
			rating: 3.5,
			discount: null,
			image: "https://picsum.photos/500",
		},
		{
			id: 2,
			name: "Polo with Tipping Details",
			price: 180,
			originalPrice: 180,
			rating: 4.5,
			discount: null,
			image: "https://picsum.photos/500",
		},
		{
			id: 3,
			name: "Black Striped T-shirt",
			price: 120,
			originalPrice: 160,
			rating: 5.0,
			discount: "-30%",
			image: "https://picsum.photos/500",
		},
		{
			id: 4,
			name: "Skinny Fit Jeans",
			price: 240,
			originalPrice: 260,
			rating: 3.6,
			discount: "-20%",
			image: "https://picsum.photos/500",
		},
		{
			id: 5,
			name: "Checkered Shirt",
			price: 180,
			originalPrice: 180,
			rating: 4.2,
			discount: null,
			image: "https://picsum.photos/500",
		},
		{
			id: 6,
			name: "Sleeve Striped T-shirt",
			price: 130,
			originalPrice: 160,
			rating: 4.6,
			discount: "-30%",
			image: "https://picsum.photos/500",
		},
		{
			id: 7,
			name: "Casual Shirt",
			price: 150,
			originalPrice: 150,
			rating: 4.0,
			discount: null,
			image: "https://picsum.photos/500",
		},
		{
			id: 8,
			name: "Hoodie with Logo",
			price: 200,
			originalPrice: 200,
			rating: 4.8,
			discount: null,
			image: "https://picsum.photos/500",
		},
		{
			id: 9,
			name: "Graphic Tee",
			price: 100,
			originalPrice: 120,
			rating: 3.8,
			discount: "-15%",
			image: "https://picsum.photos/500",
		},
		{
			id: 10,
			name: "Slim Fit Jeans",
			price: 220,
			originalPrice: 240,
			rating: 4.5,
			discount: null,
			image: "https://picsum.photos/500",
		},
	];

	return (
		<div className="container mx-auto mt-10 px-4 md:px-6">
			<Breadcrumb className="mb-5">
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />
					<BreadcrumbItem>
						<BreadcrumbPage>{formattedCategoryName()}</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<div className="flex w-full flex-1 gap-5">
				{/* Desktop Filters */}
				<div className="hidden md:block flex-[0.25] border rounded-lg p-5 h-fit">
					<Filters />
				</div>

				{/* Products Section */}
				<div className={cn("flex flex-col gap-5 w-full md:flex-[0.75]")}>
					<div className="flex justify-between items-center">
						<h1 className="font-bold text-2xl">{formattedCategoryName()}</h1>

						{/* Mobile Filter Button */}
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="outline"
									size="sm"
									className="flex items-center gap-2 md:hidden"
								>
									<Settings size={16} />
									<span>Filters</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="bottom" className="h-[85vh] overflow-y-auto">
								<SheetHeader>
									<SheetTitle className="text-2xl font-bold">
										Filters
									</SheetTitle>
								</SheetHeader>
								<div className="px-5 pb-5">
									<Filters showHeader={false} />
								</div>
							</SheetContent>
						</Sheet>

						{/* Sort Options */}
						<div className="hidden md:flex gap-5 items-center">
							<span className="text-sm font-light text-muted-foreground">
								Showing 1-10 of 100 products
							</span>
							<span className="text-sm text-muted-foreground">Sort by:</span>
							<Select>
								<SelectTrigger className="!border-none !shadow-none">
									<SelectValue placeholder="Most Popular" />
								</SelectTrigger>
								<SelectContent defaultValue={"popular"}>
									<SelectItem value="popular">Most Popular</SelectItem>
									<SelectItem value="newest">Newest</SelectItem>
									<SelectItem value="price-asc">Price: Low to High</SelectItem>
									<SelectItem value="price-desc">Price: High to Low</SelectItem>
									<SelectItem value="rating-asc">
										Rating: Low to High
									</SelectItem>
									<SelectItem value="rating-desc">
										Rating: High to Low
									</SelectItem>
								</SelectContent>
							</Select>
						</div>
					</div>

					{/* Mobile Sort Options */}
					<div className="flex md:hidden justify-between items-center mb-2">
						<Select>
							<SelectTrigger className="w-full">
								<SelectValue placeholder="Sort by: Most Popular" />
							</SelectTrigger>
							<SelectContent defaultValue={"popular"}>
								<SelectItem value="popular">Most Popular</SelectItem>
								<SelectItem value="newest">Newest</SelectItem>
								<SelectItem value="price-asc">Price: Low to High</SelectItem>
								<SelectItem value="price-desc">Price: High to Low</SelectItem>
								<SelectItem value="rating-asc">Rating: Low to High</SelectItem>
								<SelectItem value="rating-desc">Rating: High to Low</SelectItem>
							</SelectContent>
						</Select>
					</div>

					{/* Products Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
						{sampleProducts.map((product, idx) => (
							<ProductCard product={product} key={idx} />
						))}
					</div>

					{/* Pagination */}
					<Pagination className="mt-8">
						<PaginationContent>
							<PaginationItem>
								<PaginationPrevious className="border" href="#" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink className="bg-secondary">1</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink className="text-muted-foreground">
									2
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationEllipsis className="text-muted-foreground" />
							</PaginationItem>
							<PaginationItem>
								<PaginationLink className="text-muted-foreground">
									9
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationLink className="text-muted-foreground">
									10
								</PaginationLink>
							</PaginationItem>
							<PaginationItem>
								<PaginationNext className="border" href="#" />
							</PaginationItem>
						</PaginationContent>
					</Pagination>
				</div>
			</div>
		</div>
	);
};

export default CategoryPage;
