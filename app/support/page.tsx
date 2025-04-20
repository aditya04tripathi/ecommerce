import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import HeaderLayout from "@/components/HeaderLayout";

const Support = () => (
	<HeaderLayout title="Support">
		<Card className="overflow-hidden !p-0 ">
			<div className="grid grid-cols-1 md:grid-cols-2">
				<Image
					src="https://picsum.photos/1200/400"
					alt="Support illustration"
					height={1080}
					width={1920}
					className="flex flex-1 object-cover h-full w-full"
				/>
				<CardContent className="p-8 flex flex-1 flex-col justify-center">
					<h2 className="text-2xl font-bold mb-4 text-primary-foreground">
						Contact Us
					</h2>
					<form className="space-y-5">
						<Input type="text" placeholder="Your Name" required />
						<Input type="email" placeholder="Your Email" required />
						<Textarea placeholder="How can we help you?" rows={5} required />
						<Button type="submit" className="w-full">
							Send Message
						</Button>
					</form>
					<p className="text-xs text-muted-foreground mt-4">
						We aim to respond to all queries within 24 hours.
					</p>
				</CardContent>
			</div>
		</Card>
	</HeaderLayout>
);

export default Support;
