import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import HeaderLayout from "@/components/HeaderLayout";

const Terms = () => (
	<HeaderLayout title="Terms & Conditions">
		<Accordion type="single" className="w-full">
			<AccordionItem value="use">
				<AccordionTrigger>Website Use</AccordionTrigger>
				<AccordionContent>
					By using our website, you agree to comply with our terms and all
					applicable laws and regulations.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="orders">
				<AccordionTrigger>Orders & Payments</AccordionTrigger>
				<AccordionContent>
					All orders are subject to acceptance and availability. Payment must be
					made in full before dispatch.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="returns">
				<AccordionTrigger>Returns & Refunds</AccordionTrigger>
				<AccordionContent>
					Please refer to our returns policy for details on how to return items
					and receive refunds.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="liability">
				<AccordionTrigger>Limitation of Liability</AccordionTrigger>
				<AccordionContent>
					We are not liable for any indirect or consequential loss arising from
					your use of our site or products.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</HeaderLayout>
);

export default Terms;
