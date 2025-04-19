import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const NAV_ITEMS = [
	{ label: "Shop", href: "/shop" },
	{ label: "On Sale", href: "/sale" },
	{ label: "New Arrivals", href: "/new-arrivals" },
	{ label: "Brands", href: "/brands" },
];

const Navbar = () => {
	return (
		<>
			<div className="bg-black text-white py-3 px-4 text-center text-sm relative">
				Sign up and get 20% off to your first order.
				<Link href="/signup" className="font-medium ml-1 underline">
					Sign Up Now
				</Link>
			</div>

			<nav className="px-5 md:px-10 border-b h-20 flex items-center justify-between bg-white sticky top-0 z-50">
				<div className="flex items-center gap-2.5 md:hidden">
					<Sheet>
						<SheetTrigger className="p-2">
							<Menu />
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col flex-1 gap-0">
							<div className="flex-[0.1] flex flex-col items-center justify-center">
								<h2 className="font-bold text-2xl">SHOP.CO</h2>
							</div>
							<div className="flex flex-col items-start justify-start flex-[0.8]">
								{NAV_ITEMS.map((item) => (
									<Link
										key={item.label}
										href={item.href}
										className="font-medium hover:text-gray-600 transition-colors py-2 px-4"
									>
										{item.label}
									</Link>
								))}
							</div>
							<div className="flex flex-[0.1] items-center justify-start px-5">
								<Avatar>
									<AvatarImage src="https://picsum.photos/200" />
									<AvatarFallback>US</AvatarFallback>
								</Avatar>
								<div className="ml-5 flex flex-col">
									<h1 className="text-sm">John Doe</h1>
									<p className="text-xs text-gray-500">john@doe.com</p>
								</div>
							</div>
						</SheetContent>
					</Sheet>
					<h1 className="heading font-black text-2xl">SHOP.CO</h1>
				</div>

				{/* Desktop logo (left side) */}
				<div className="hidden md:block">
					<Link href="/">
						<h1 className="heading font-black text-2xl">SHOP.CO</h1>
					</Link>
				</div>

				{/* Desktop navigation links (center) */}
				<div className="hidden md:flex items-center space-x-8">
					{NAV_ITEMS.map((item) => (
						<Link
							key={item.label}
							href={item.href}
							className="font-medium hover:text-gray-600 transition-colors"
						>
							{item.label}
						</Link>
					))}
				</div>

				{/* Search and icons (right side) */}
				<div className="flex gap-3 items-center justify-end">
					{/* Desktop search bar */}
					<div className="hidden md:flex relative items-center bg-gray-100 rounded-full px-4 py-2 w-72">
						<Search className="w-4 h-4 text-gray-500" />
						<Input
							className="!shadow-none w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pl-2 h-8"
							placeholder="Search for products..."
						/>
					</div>

					{/* Mobile search icon */}
					<div className="md:hidden">
						<Search className="w-5 h-5" />
					</div>

					<Link href="/cart">
						<ShoppingCart className="w-5 h-5" />
					</Link>

					<Link href="/account">
						<User className="w-5 h-5" />
					</Link>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
