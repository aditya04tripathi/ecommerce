import React from "react";
import Footer from "@/components/Footer";
import ProductCarousel from "@/components/ProductCarousel";
import HeroSection from "@/components/HeroSection";
import BrandShowcase from "@/components/BrandShowcase";
import BrowseByStyle from "@/components/BrowseByStyle";

const IndexPage = () => {
	return (
		<>
			<HeroSection />
			<BrandShowcase />
			<ProductCarousel title="NEW ARRIVALS" />
			<ProductCarousel title="TOP SELLING" />
			<BrowseByStyle />
			<Footer />
		</>
	);
};

export default IndexPage;
