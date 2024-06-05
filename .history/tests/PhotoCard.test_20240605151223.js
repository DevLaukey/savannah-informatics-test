import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import PhotoCard from "../PhotoCard"; // Adjust the import path as needed

const photo = {
  id: 1,
  thumbnailUrl: "https://via.placeholder.com/150/92c952",
  title: "Sample Photo",
};

describe("PhotoCard Component", () => {
  it("should render the photo card with the correct title and image", () => {
    render(<PhotoCard photo={photo} />);

    const titleElement = screen.getByText(photo.title);
    const imageElement = screen.getByAltText(photo.title);

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", photo.thumbnailUrl);
  });

  it("should have a link to the photo page", () => {
    render(<PhotoCard photo={photo} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", `/photo/${photo.id}`);
  });
});
