import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Settings } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";

interface FiltersProps {
	showHeader?: boolean;
	className?: string;
}

const Filters = ({ showHeader = true, className }: FiltersProps) => {
	return (
		<div className={`flex flex-col gap-5 ${className}`}>
			{showHeader && (
				<>
					<div className="flex items-center w-full justify-between">
						<h1 className="font-medium text-xl">Filters</h1>
						<Settings className="text-muted-foreground" />
					</div>
					<Separator />
				</>
			)}

			<div className="flex flex-col">
				{["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map(
					(item, idx) => (
						<div
							key={idx}
							className="flex w-full justify-between items-center font-light text-sm text-muted-foreground py-1"
						>
							<span>{item}</span>
							<ChevronRight />
						</div>
					)
				)}
			</div>
			<Separator />
			<div>
				<h1 className="font-medium text-xl mb-5">Price</h1>
				<Slider value={[50, 200]} max={300} step={1} />
				<div className="my-5 text-right text-sm font-light text-muted-foreground">
					$50 - $200
				</div>
			</div>
			<Separator />
			<div>
				<h1 className="font-medium text-xl mb-5">Colors</h1>
				<div className="grid grid-cols-6 gap-2">
					{[
						"green",
						"red",
						"yellow",
						"orange",
						"blue",
						"indigo",
						"purple",
						"pink",
						"white",
						"black",
					].map((item, idx) => (
						<div
							key={idx}
							style={{ backgroundColor: item }}
							className="w-full h-auto aspect-square rounded-full border cursor-pointer hover:scale-105 transition-transform"
						/>
					))}
				</div>
			</div>
			<Separator />
			<div>
				<h1 className="font-medium text-xl mb-5">Sizes</h1>
				<div className="flex items-center flex-wrap gap-2">
					{[
						"XX-Small",
						"X-Small",
						"Small",
						"Medium",
						"Large",
						"X-Large",
						"XX-Large",
						"3X-Large",
						"4X-Large",
					].map((item, idx) => (
						<div
							key={idx}
							className="px-2.5 py-1 text-sm cursor-pointer bg-muted rounded-full text-muted-foreground"
						>
							{item}
						</div>
					))}
				</div>
			</div>
			<Separator />
			<div>
				<h1 className="font-medium text-xl mb-5">Style</h1>
				<div className="flex items-center flex-wrap gap-2">
					{["Casual", "Formal", "Party", "Gym"].map((item, idx) => (
						<div
							key={idx}
							className="flex w-full justify-between items-center font-light text-sm text-muted-foreground py-1"
						>
							<span>{item}</span>
							<ChevronRight />
						</div>
					))}
				</div>
			</div>

			<Button className="w-full rounded-full">Apply Filters</Button>
		</div>
	);
};

export default Filters;
