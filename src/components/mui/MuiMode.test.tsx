import { render, screen } from "../../test-utils";
import { MuiMode } from "./MuiMode";

describe("MuiMode", () => {
	test("renders text correctly", () => {
		render(<MuiMode />);
		const headingElement = screen.getByRole("heading");
		expect(headingElement).toHaveTextContent("light mode");
	});

	test("renders screen in the white theme and black font color", () => {
		render(<MuiMode />);
		const headingElement = screen.getByRole("heading");
		expect(headingElement).toHaveStyle({ color: "'rgb(0, 0, 0)'" });
	});
});
