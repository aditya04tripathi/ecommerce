import React from "react";
import Image from "next/image";

interface ProductImageProps {
	images: string[];
	mainImage: string;
	productName: string;
}

const ProductImageGallery = ({
	images,
	mainImage,
	productName,
}: ProductImageProps) => {
	return (
		<div className="flex flex-col md:flex-row gap-4 md:gap-6 flex-1 md:w-1/2">
			<div className="md:hidden w-full bg-gray-100">
				<Image
					src={mainImage}
					alt={productName}
					height={1000}
					width={1000}
					className="rounded object-cover w-full h-full"
					priority
				/>
			</div>

			<div className="flex flex-row md:flex-col justify-start md:justify-between gap-2 md:gap-4 w-full md:w-auto flex-nowrap md:flex-[0.25] overflow-x-auto">
				{images.map((img, index) => (
					<div
						key={index}
						className="w-16 md:w-full h-full relative flex-grow-1"
					>
						<Image
							src={img}
							alt={`${productName} view ${index + 1}`}
							height={1000}
							width={1000}
							className="rounded aspect-square object-cover h-full w-auto"
						/>
					</div>
				))}
			</div>

			<div className="hidden md:block flex-[0.75] bg-gray-100">
				<Image
					src={mainImage}
					alt={productName}
					height={1000}
					width={1000}
					className="rounded object-cover w-full h-full"
					priority
				/>
			</div>
		</div>
	);
};

export default ProductImageGallery;
