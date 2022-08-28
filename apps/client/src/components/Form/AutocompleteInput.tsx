import React, { forwardRef, useCallback, useEffect, useRef } from "react";

import { useScript } from "@/hooks";
import { ControllerRenderProps } from "react-hook-form";
import { Select } from "@/components/Form";

const GOOGLE_MAPS_API_KEY = process.env
  .NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string;

type AutocompleteService = google.maps.places.AutocompleteService | null;

const AutoCompleteInput = forwardRef((props: ControllerRenderProps, ref) => {
  const status = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=beta&libraries=places`
  );
  // Store the autocomplete service in a ref
  const autocompleteRef = useRef<AutocompleteService>(null);

  // Given an input, return a list of predictions in the form label, value from autocomplete service
  const getOptions = useCallback(async (input: string) => {
    if (!autocompleteRef.current) return [];
    const res = await autocompleteRef.current.getPlacePredictions(
      {
        input,
        region: "us",
        componentRestrictions: { country: "us" },
      },
      async (_prediction, status) => {
        if (status !== "OK") throw new Error(status);
      }
    );
    const options = res.predictions.map((prediction) => ({
      label: prediction.description,
      value: prediction.description,
    }));
    return options ?? [];
  }, []);

  useEffect(() => {
    if (status === "ready") {
      autocompleteRef.current = new google.maps.places.AutocompleteService();
    }
  }, [status]);

  return (
    <Select
      getOptions={getOptions}
      placeholder="301 E. Cermak Rd. Chicago, IL 60616"
      {...props}
    />
  );
});

AutoCompleteInput.displayName = "AutoCompleteInput";

export default AutoCompleteInput;
