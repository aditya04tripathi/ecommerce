import Image from "next/image";
import React from "react";

const BRANDS = ["versace.jpg", "gucci.jpg", "zara.jpg", "prada.jpg", "ck.webp"];

const BrandShowcase = () => {
	return (
		<div className="hidden md:flex bg-black py-6 px-10 lg:px-20 justify-between items-center">
			{BRANDS.map((brand) => (
				<Image
					alt={brand.split(".")[0]}
					src={`/brands/${brand}`}
					key={brand}
					width={1080}
					height={1080}
					className="w-1/6 h-1/6 object-cover object-center rounded"
				/>
			))}
		</div>
	);
};

export default BrandShowcase;
