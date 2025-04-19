"use client";

import { useEffect } from "react";
import posthog from "posthog-js";
import debounce from "lodash.debounce";

export default function PostHogInputTracker() {
  useEffect(() => {
    const debouncedCapture = debounce((name: string, value: string) => {
      posthog.capture("input_field_typed", {
        field_name: name,
        field_value: value,
      });
    }, 500); // Adjust debounce delay as needed

    const handler = (e: Event) => {
      const input = e.target as HTMLInputElement;
      const name = input.name || input.id || "";
      const value = input.value;

      const allowed = ["name", "number", "phone", "email"];
      const matches = allowed.some((key) => name.toLowerCase().includes(key));

      if (matches) {
        debouncedCapture(name, value);
      }
    };

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
      input.addEventListener("input", handler);
    });

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("input", handler);
      });
    };
  }, []);

  return null;
}
