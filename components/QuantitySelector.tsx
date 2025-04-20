"use client";

import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
	quantity?: number;
	onIncrement?: () => void;
	onDecrement?: () => void;
	className?: string;
}

const QuantitySelector = ({
	quantity = 1,
	onIncrement = () => {},
	onDecrement = () => {},
	className = "",
}: QuantitySelectorProps) => {
	return (
		<div
			className={`flex shadow-xs items-center border overflow-clip rounded border-gray-300 ${className}`}
		>
			<Button
				variant="ghost"
				className="px-3 rounded-none"
				onClick={onDecrement}
				disabled={quantity <= 1}
			>
				-
			</Button>
			<span className="w-10 text-center">{quantity}</span>
			<Button
				variant="ghost"
				className="px-3 rounded-none"
				onClick={onIncrement}
			>
				+
			</Button>
		</div>
	);
};

export default QuantitySelector;
