import React from "react";

import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";
import Photo from "@/app/photo/[id]/page"; 

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const mockRouter = {
  query: { id: "1" },
};

const photo = {
  id: 1,
  url: "https://via.placeholder.com/600/e63e30",
  title: "Sample Photo",
};

beforeAll(() => {
  global.fetch = jest.fn((url) => {
    if (url.includes("/photos/1")) {
      return Promise.resolve({
        json: () => Promise.resolve(photo),
      });
    }
    return Promise.reject(new Error("not found"));
  });
});

describe("Photo Component", () => {
  beforeEach(() => {
    useRouter.mockReturnValue(mockRouter);
  });

  it("should render the photo with the correct title and image", async () => {
    render(<Photo />);

    await waitFor(() => {
      expect(screen.getByText(photo.title)).toBeInTheDocument();
      expect(screen.getByAltText(photo.title)).toBeInTheDocument();
    });
  });

  it("should allow the user to edit the title and send a PATCH request", async () => {
    render(<Photo />);

    await waitFor(() => screen.getByText(photo.title));

    const editButton = screen.getByText("Edit");
    fireEvent.click(editButton);

    const inputElement = screen.getByDisplayValue(photo.title);
    const saveButton = screen.getByText("Save");

    fireEvent.change(inputElement, { target: { value: "Updated Photo" } });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(screen.getByText("Updated Photo")).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      `https://jsonplaceholder.typicode.com/photos/${photo.id}`,
      expect.any(Object)
    );
  });
});
