import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { Input } from "./ui/input";

// Navigation links for both desktop and mobile menus
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
				<button className="absolute right-4 top-1/2 -translate-y-1/2">✕</button>
			</div>

			<nav className="px-5 md:px-10 border-b h-20 flex items-center justify-between bg-white sticky top-0 z-50">
				<div className="flex items-center gap-2.5 md:hidden">
					<Sheet>
						<SheetTrigger className="p-2">
							<Menu />
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col">
							<h2 className="font-bold text-xl mb-6">Menu</h2>
							<div className="flex flex-col space-y-4">
								{NAV_ITEMS.map((item) => (
									<Link
										key={item.label}
										href={item.href}
										className="text-lg hover:text-gray-600 transition-colors"
									>
										{item.label}
									</Link>
								))}
								<div className="h-px bg-gray-200 my-2"></div>
								<Link
									href="/account"
									className="text-lg hover:text-gray-600 transition-colors"
								>
									My Account
								</Link>
								<Link
									href="/cart"
									className="text-lg hover:text-gray-600 transition-colors"
								>
									Cart
								</Link>
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
							className="w-full border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 pl-2 h-8"
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
