import React from "react";
import HeaderLayout from "@/components/HeaderLayout";

const CustomerSupport = () => {
	return (
		<HeaderLayout title="Customer Support">
			<div className="container mx-auto py-16 px-4 max-w-xl">
				<h1 className="text-4xl font-bold mb-6 text-primary-foreground">
					Customer Support
				</h1>
				<p className="mb-6 text-muted-foreground">
					Need help? Our support team is here for you 24/7. Fill out the form
					below and we&apos;ll get back to you as soon as possible.
				</p>
				{true ? (
					<div className="bg-green-100 text-green-800 p-4 rounded mb-4">
						Thank you for contacting us! We will respond shortly.
					</div>
				) : (
					<form className="space-y-4">
						<div>
							<label className="block mb-1 font-medium text-primary-foreground">
								Name
							</label>
							<input
								type="text"
								required
								className="w-full border px-3 py-2 rounded bg-background text-primary-foreground"
							/>
						</div>
						<div>
							<label className="block mb-1 font-medium text-primary-foreground">
								Email
							</label>
							<input
								type="email"
								required
								className="w-full border px-3 py-2 rounded bg-background text-primary-foreground"
							/>
						</div>
						<div>
							<label className="block mb-1 font-medium text-primary-foreground">
								Message
							</label>
							<textarea
								required
								className="w-full border px-3 py-2 rounded bg-background text-primary-foreground"
								rows={4}
							/>
						</div>
						<button
							type="submit"
							className="bg-primary text-primary-foreground px-6 py-2 rounded font-semibold"
						>
							Send Message
						</button>
					</form>
				)}
			</div>
		</HeaderLayout>
	);
};

export default CustomerSupport;
