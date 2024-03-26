import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("demo", () => {
  expect(1).toBe(1);
});

test("render", () => {
  render(<App />);
  expect(screen.getByText("Vite + React")).toBeInTheDocument();
});
