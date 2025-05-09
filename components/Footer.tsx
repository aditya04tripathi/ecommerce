import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";

const SOCIALS = [
	{
		icon: <FaTwitter size={20} />,
		href: "https://x.com/adity04tripathi",
		target: "_blank",
	},
	{
		icon: <FaInstagram size={20} />,
		href: "https://instagram.com/__.adityatripathi.__",
		target: "_blank",
	},
	{
		icon: <FaGithub size={20} />,
		href: "https://github.com/aditya04tripathi/ecommerce",
		target: "_blank",
	},
];

const FOOTER_LINKS = [
	{
		title: "COMPANY",
		items: [
			{
				name: "About Us",
				href: "/about",
			},
			{
				name: "Support",
				href: "/support",
			},
		],
		isLink: true,
	},
	{
		title: "POLICIES",
		items: [
			{
				name: "Privacy Policy",
				href: "/privacy",
			},
			{
				name: "Terms & Conditions",
				href: "/terms",
			},
			{
				name: "Delivery Details",
				href: "/delivery",
			},
		],
		isLink: true,
	},
];

const PAYMENTS = ["visa", "mastercard", "paypal", "applepay", "googlepay"];

const Footer: React.FC = () => (
	<>
		<div className="container w-full mx-auto mt-10 relative z-10 -mb-32">
			<div className="p-8 rounded-lg bg-black">
				<div className="md:flex md:items-center md:justify-between gap-10">
					<h1 className="text-white text-4xl font-black uppercase leading-tight md:w-1/2 md:pr-4">
						STAY UPTO DATE ABOUT OUR LATEST OFFERS
					</h1>
					<div className="flex flex-col space-y-4 mt-7 md:mt-0 md:w-1/2">
						<Input
							className="bg-white border-none px-6"
							type="email"
							placeholder="Enter your email address"
						/>
						<Button
							className="cursor-pointer w-full font-medium"
							variant={"secondary"}
						>
							Subscribe to Newsletter
						</Button>
					</div>
				</div>
			</div>
		</div>

		<footer className="bg-gray-100 relative px-5 py-10 pt-40 mt-10 space-y-10 md:px-10 lg:px-20">
			<div className="md:grid md:grid-cols-12 md:gap-8">
				<div className="space-y-3 md:col-span-4 md:pr-8">
					<h2 className="text-2xl font-black">SHOP.CO</h2>
					<p className="text-muted-foreground text-sm max-w-md">
						We have clothes that suits your style and which you&apos;re proud to
						wear. From women to men.
					</p>
					<div className="flex gap-4">
						{SOCIALS.map(({ icon, href, target }, idx) => (
							<Link
								key={idx}
								href={href}
								target={target}
								className="w-10 h-10 rounded-full bg-background flex items-center justify-center border border-gray-200 hover:bg-gray-100 transition-colors"
								aria-label="Social link"
							>
								{icon}
							</Link>
						))}
					</div>
				</div>

				<div className="grid grid-cols-2 gap-8 mt-10 md:mt-0 md:grid-cols-2 md:col-span-8">
					{FOOTER_LINKS.map(({ title, items, isLink }) => (
						<div className="space-y-4" key={title}>
							<h3 className="font-bold text-lg">{title}</h3>
							<ul className="space-y-2">
								{items.map((item) =>
									isLink ? (
										<Link
											key={item.href}
											href={item.href}
											className="block text-muted-foreground hover:text-foreground"
										>
											{item.name}
										</Link>
									) : (
										<li
											key={item.href}
											className="text-muted-foreground hover:text-foreground"
										>
											{item.name}
										</li>
									)
								)}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="pt-8 border-t">
				<div className="md:flex md:items-center md:justify-between">
					<p className="text-center md:text-left text-muted-foreground">
						Shop.co © 2000-2023, All Rights Reserved
					</p>
					<div className="flex justify-center gap-4 mt-8 md:mt-0">
						{PAYMENTS.map((payment) => (
							<div
								key={payment}
								className="bg-white p-2 rounded shadow-md relative w-12 h-8 transition-all"
							>
								<Image
									src={`/payments/${payment}.png`}
									alt={payment}
									height={32}
									width={64}
									className="object-contain w-full h-full"
									priority
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	</>
);

export default Footer;
