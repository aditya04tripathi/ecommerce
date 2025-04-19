import React from "react";
import ProductCarousel from "@/components/ProductCarousel";
import HeroSection from "@/components/HeroSection";
import BrandShowcase from "@/components/BrandShowcase";
import BrowseByStyle from "@/components/BrowseByStyle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home | SHOPCO",
	description:
		"Welcome to our online store! Discover the latest trends and shop your favorite styles.",
	keywords: "online store, shopping, fashion, trends, styles",
	robots: {
		index: true,
		follow: true,
	},
	authors: [
		{
			name: "Aditya Tripathi",
			url: "https://linkedin.com/in/aditya-tripathi-at04",
		},
	],
};

const IndexPage = () => {
	return (
		<>
			<HeroSection />
			<BrandShowcase />
			<ProductCarousel title="NEW ARRIVALS" />
			<ProductCarousel title="TOP SELLING" />
			<BrowseByStyle />
		</>
	);
};

export default IndexPage;
