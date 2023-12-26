import React from "react";
import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

describe("Application", () => {
	test("renders", () => {
		render(<Application />);

		const pageHeading = screen.getByRole("heading", {
			level: 1,
		});
		expect(pageHeading).toBeInTheDocument();

		const sectionHeading = screen.getByRole("heading", {
			level: 2,
		});
		expect(sectionHeading).toBeInTheDocument();

		const nameElement = screen.getByRole("textbox", {
			name: "Name",
		});
		expect(nameElement).toBeInTheDocument();

		const bioElement = screen.getByRole("textbox", {
			name: "Bio",
		});
		expect(bioElement).toBeInTheDocument();

		const jobLocationElement = screen.getByRole("combobox");
		expect(jobLocationElement).toBeInTheDocument();

		const termsElement = screen.getByRole("checkbox");
		expect(termsElement).toBeInTheDocument();

		const submitElement = screen.getByRole("button");
		expect(submitElement).toBeInTheDocument();
		expect(submitElement).toBeDisabled();

		const nameElement2 = screen.getByLabelText("Name", {
			selector: "input",
		});
		expect(nameElement2).toBeInTheDocument();

		const termsElement2 = screen.getByLabelText(
			"I agree to the terms and conditions"
		);
		expect(termsElement2).toBeInTheDocument();

		const nameElement3 = screen.getByPlaceholderText("Fullname");
		expect(nameElement3).toBeInTheDocument();

		const paragraphElement = screen.getByText("All fields are mandatory");
		expect(paragraphElement).toBeInTheDocument();

		const nameElement4 = screen.getByDisplayValue("Ravi Radadiya");
		expect(nameElement4).toBeInTheDocument();

		const imageElement = screen.getByAltText("alternate image text");
		expect(imageElement).toBeInTheDocument();

		const closeElement = screen.getByTitle("close");
		expect(closeElement).toBeInTheDocument();

		const customElement = screen.getByTestId("custom-element");
		expect(customElement).toBeInTheDocument();
	});
});
