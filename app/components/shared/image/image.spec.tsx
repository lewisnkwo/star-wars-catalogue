import { render, screen } from "@testing-library/react";
import Image from ".";

describe("Image", () => {
  it("renders an image when the image is available", () => {
    render(
      <Image
        size="small"
        image="../../../images/star-wars-logo.png"
        name="Star Wars"
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByText("LN")).not.toBeInTheDocument();
  });

  it("renders the initials of the name when the image is not available", () => {
    render(<Image size="small" image={null} name="Star Wars" />);
    expect(screen.getByText("SW")).toBeInTheDocument();
  });
});
