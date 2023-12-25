import { MotionBox } from "@/components";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

describe("MotionBox", () => {
  it("renders without crashing", () => {
    const { baseElement } = render(<MotionBox />);
    expect(baseElement).toBeInTheDocument();
  });

  it("has correct styles", () => {
    const { container } = render(<MotionBox />);
    const style = window.getComputedStyle(container.firstChild as Element);
    expect(style.overflow).toBe('"hidden"');
    expect(style.width).toBe("100%");
  });
});
