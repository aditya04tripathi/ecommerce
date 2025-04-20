import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
	Truck,
	ShieldCheck,
	RefreshCcw,
	Headphones,
	CreditCard,
} from "lucide-react";
import HeaderLayout from "@/components/HeaderLayout";

const WhyUs = () => (
	<HeaderLayout title="Why Us?">
		<div className="container mx-auto px-4 py-10 max-w-4xl">
			<section className="mb-12">
				<h2 className="text-2xl font-bold text-primary mb-4 text-center">
					What Sets Shop.co Apart
				</h2>
				<p className="text-lg text-gray-800 leading-relaxed text-center max-w-2xl mx-auto">
					At Shop.co, we go beyond just selling products. Our focus is on
					building trust, delivering value, and ensuring your satisfaction at
					every step. Here’s what makes us different:
				</p>
			</section>

			<section className="grid md:grid-cols-2 gap-10 mb-16">
				<div className="flex items-start gap-4">
					<div className="aspect-square h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
						<Truck className="w-6 h-6 text-primary" />
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-1">
							Fast & Reliable Shipping
						</h3>
						<p className="text-gray-700 text-base">
							We process orders quickly and partner with trusted couriers to
							ensure your items arrive safely and on time, wherever you are.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<div className="aspect-square h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
						<ShieldCheck className="w-6 h-6 text-primary" />
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-1">Secure Shopping</h3>
						<p className="text-gray-700 text-base">
							Your privacy and security are our top priorities. We use
							industry-standard encryption and secure payment gateways for every
							transaction.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<div className="aspect-square h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
						<Headphones className="w-6 h-6 text-primary" />
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-1">Dedicated Support</h3>
						<p className="text-gray-700 text-base">
							Our customer support team is always ready to help you with any
							questions or concerns, ensuring a smooth and pleasant experience.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<div className="aspect-square h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
						<RefreshCcw className="w-6 h-6 text-primary" />
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-1">
							Easy Returns & Exchanges
						</h3>
						<p className="text-gray-700 text-base">
							Changed your mind? No problem. Our hassle-free return and exchange
							policy ensures you shop with confidence.
						</p>
					</div>
				</div>
				<div className="flex items-start gap-4">
					<div className="aspect-square h-12 bg-primary/10 rounded-full flex items-center justify-center mt-1">
						<CreditCard className="w-6 h-6 text-primary" />
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-1">
							Multiple Payment Options
						</h3>
						<p className="text-gray-700 text-base">
							Choose from a variety of secure payment methods to make your
							shopping experience seamless and convenient.
						</p>
					</div>
				</div>
			</section>

			<section className="mb-8">
				<Card className="rounded-lg shadow-sm border border-slate-100">
					<CardContent className="p-8">
						<h4 className="text-xl font-semibold mb-3 text-primary">
							Our Commitment
						</h4>
						<p className="text-gray-800 text-base mb-2">
							We&apos;re committed to providing you with a curated selection of
							quality products, transparent policies, and a customer-first
							approach. Every decision we make is guided by our desire to make
							your experience better.
						</p>
						<p className="text-gray-700 text-base">
							Thank you for trusting Shop.co. We look forward to serving you!
						</p>
					</CardContent>
				</Card>
			</section>
		</div>
	</HeaderLayout>
);

export default WhyUs;
