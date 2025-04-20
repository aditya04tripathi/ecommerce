import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, CheckIcon } from "lucide-react";

interface ReviewCardProps {
	rating: number;
	author: string;
	isVerified?: boolean;
	content: string;
	date: string;
}

const ReviewCard = ({
	rating,
	author,
	isVerified = true,
	content,
	date,
}: ReviewCardProps) => {
	return (
		<Card>
			<CardContent className="p-6">
				<div className="flex justify-between">
					<div className="flex text-yellow-400 text-lg">
						{[...Array(5)].map((_, i) => (
							<StarIcon
								key={i}
								className={`fill-current ${i < rating ? "" : "opacity-50"}`}
							/>
						))}
					</div>
				</div>

				<div className="flex items-center gap-2 mt-2">
					<h4 className="font-semibold">{author}</h4>
					{isVerified && (
						<Badge variant="secondary">
							<CheckIcon className="h-3 w-3 text-green-500 mr-1" />
							Verified
						</Badge>
					)}
				</div>

				<p className="mt-4 text-gray-600">&ldquo;{content}&rdquo;</p>

				<p className="text-sm text-muted-foreground mt-4">Posted on {date}</p>
			</CardContent>
		</Card>
	);
};

export default ReviewCard;
