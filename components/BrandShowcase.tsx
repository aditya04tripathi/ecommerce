import React from "react";

const BRANDS = ["Versace", "Zara", "Gucci", "Prada", "Calvin Klein"];

const BrandShowcase = () => {
	return (
		<div className="hidden md:flex bg-black py-6 px-10 lg:px-20 justify-between items-center">
			{BRANDS.map((brand) => (
				<span key={brand} className="text-white text-2xl font-medium">
					{brand}
				</span>
			))}
		</div>
	);
};

export default BrandShowcase;
