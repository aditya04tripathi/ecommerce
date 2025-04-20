import React from "react";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "@/components/ui/accordion";
import HeaderLayout from "@/components/HeaderLayout";

const Privacy = () => (
	<HeaderLayout title="Privacy Policy">
		<Accordion type="single" className="w-full">
			<AccordionItem value="info">
				<AccordionTrigger>Information Collection</AccordionTrigger>
				<AccordionContent>
					We collect information you provide directly to us, such as when you
					create an account or place an order.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="use">
				<AccordionTrigger>How We Use Your Information</AccordionTrigger>
				<AccordionContent>
					Your information is used to process orders, improve our services, and
					communicate with you.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="security">
				<AccordionTrigger>Data Security</AccordionTrigger>
				<AccordionContent>
					We implement security measures to protect your data, but no method is
					100% secure.
				</AccordionContent>
			</AccordionItem>
			<AccordionItem value="rights">
				<AccordionTrigger>Your Rights</AccordionTrigger>
				<AccordionContent>
					You may request access, correction, or deletion of your personal
					information at any time.
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	</HeaderLayout>
);

export default Privacy;
