import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import HeaderLayout from "@/components/HeaderLayout";

const Delivery = () => (
	<HeaderLayout title="Delivery Details">
		<Accordion type="single" className="w-full">
			<AccordionItem value="shipping">
				<AccordionTrigger>Shipping Methods & Times</AccordionTrigger>
				<AccordionContent>
					We offer standard and express shipping options. Standard shipping
					typically takes 3-7 business days, while express shipping arrives in
					1-3 business days.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="tracking">
				<AccordionTrigger>Order Tracking</AccordionTrigger>
				<AccordionContent>
					Once your order ships, you’ll receive a tracking link via email. You
					can also track your order in your account dashboard.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="international">
				<AccordionTrigger>International Delivery</AccordionTrigger>
				<AccordionContent>
					We ship to many countries worldwide. Delivery times and fees may vary
					based on your location.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="fees">
				<AccordionTrigger>Shipping Fees</AccordionTrigger>
				<AccordionContent>
					Shipping fees are calculated at checkout based on your address and
					selected shipping method.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</HeaderLayout>
);

export default Delivery;
