import React from "react";
import { BadgeCheck, DollarSign, Users } from "lucide-react";
import HeaderLayout from "@/components/HeaderLayout";

const About = () => (
	<HeaderLayout title="About Us">
		<div className="container mx-auto px-4 py-10 max-w-6xl">
			<section className="mb-16 text-center">
				<h2 className="text-4xl font-bold text-primary-foreground mb-6">
					Welcome to Shop.co
				</h2>
				<p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
					We&apos;re passionate about providing you with the best shopping
					experience possible. Founded in 2020, our journey began with a simple
					vision: to create a platform where quality meets affordability.
				</p>
			</section>

			<section className="grid md:grid-cols-2 gap-12 mb-16">
				<div className="bg-secondary p-8 rounded-xl shadow-sm border border-muted">
					<h3 className="text-2xl font-semibold mb-4 text-primary-foreground">
						Our Mission
					</h3>
					<p className="text-muted-foreground">
						We believe everyone deserves access to premium products without the
						premium price tag. That&apos;s why we carefully source each item in
						our collection, ensuring it meets our strict quality standards while
						remaining accessible to all our customers.
					</p>
				</div>
				<div className="bg-secondary p-8 rounded-xl shadow-sm border border-muted">
					<h3 className="text-2xl font-semibold mb-4 text-primary-foreground">
						Quality Promise
					</h3>
					<p className="text-muted-foreground">
						Our commitment to quality isn&apos;t just a business
						strategy—it&apos;s our core value. We partner only with ethical
						manufacturers who share our dedication to excellence and
						sustainability, ensuring every product meets our exacting standards.
					</p>
				</div>
			</section>

			<section className="bg-secondary p-10 rounded-xl mb-16">
				<h3 className="text-2xl font-semibold mb-6 text-center text-primary-foreground">
					Why Choose Shop.co?
				</h3>
				<div className="grid md:grid-cols-3 gap-8">
					<div className="text-center">
						<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<BadgeCheck className="w-8 h-8 text-primary-foreground" />
						</div>
						<h4 className="font-medium mb-2 text-primary-foreground">
							Premium Quality
						</h4>
						<p className="text-muted-foreground text-sm">
							Carefully selected products that meet our strict quality standards
						</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<DollarSign className="w-8 h-8 text-primary-foreground" />
						</div>
						<h4 className="font-medium mb-2 text-primary-foreground">
							Affordable Prices
						</h4>
						<p className="text-muted-foreground text-sm">
							Great value without compromising quality
						</p>
					</div>
					<div className="text-center">
						<div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
							<Users className="w-8 h-8 text-primary-foreground" />
						</div>
						<h4 className="font-medium mb-2 text-primary-foreground">
							Customer First
						</h4>
						<p className="text-muted-foreground text-sm">
							We&apos;re committed to providing exceptional service and support
						</p>
					</div>
				</div>
			</section>

			<div className="text-center">
				<p className="text-xl text-muted-foreground font-medium mb-8">
					Thank you for choosing us as your preferred shopping destination.
					We&apos;re honored to be part of your style journey.
				</p>
				<a
					href="/products"
					className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-8 rounded-full transition-all"
				>
					Explore Our Collection
				</a>
			</div>
		</div>
	</HeaderLayout>
);

export default About;
