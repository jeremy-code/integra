import React, { forwardRef, useCallback, useEffect, useRef } from "react";
import { AsyncSelect } from "chakra-react-select";
import type { Options, SelectInstance, GroupBase } from "react-select";
import type { ChakraStylesConfig, AsyncProps } from "chakra-react-select";

import { useScript } from "@/hooks";

type Option = {
  label: string;
  value: string;
};

type AutocompleteRefType = SelectInstance<Option, boolean, GroupBase<Option>>;
type AutocompleteProps = AsyncProps<Option, boolean, GroupBase<Option>>;
type AutocompleteService = google.maps.places.AutocompleteService | null;

const GOOGLE_MAPS_API_KEY: string = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

// React select component with options given by Google Maps AutoComplete
const AutocompleteInput = forwardRef<AutocompleteRefType, AutocompleteProps>(
  (props, ref) => {
    const status = useScript(
      `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=beta&libraries=places`
    );
    // Store the autocomplete service in a ref
    const autocompleteRef = useRef<AutocompleteService>(null);

    // Given an input, return a list of predictions in the form label, value from autocomplete service
    const getOptions = useCallback(
      async (input: string) => {
        if (!autocompleteRef.current) return [];
        const res = await autocompleteRef.current.getPlacePredictions(
          {
            input,
            region: "us",
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
      },
      [autocompleteRef.current]
    );

    useEffect(() => {
      if (status === "ready") {
        autocompleteRef.current = new google.maps.places.AutocompleteService();
      }
    }, [status]);

    // Custom debounce function that given a function and a delay that debounces the given function
    const debounce = (fn: (...args: any[]) => void, delay = 250) => {
      let timeout: ReturnType<typeof setTimeout>;

      return (...args: any) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    };

    const loadOptionsDebounced = debounce(
      async (input: string, callback: (options: Options<Option>) => void) => {
        const options = await getOptions(input);
        callback(options);
      }
    );

    const chakraStyles: ChakraStylesConfig<Option> = {
      control: (provided) => ({
        ...provided,
        borderRadius: "sm",
      }),
      loadingIndicator: (provided) => ({
        ...provided,
        color: "primary.500",
      }),
    };

    return (
      <AsyncSelect
        placeholder="1600 Pennsylvania Avenue, Washington, DC"
        cacheOptions
        loadOptions={loadOptionsDebounced}
        chakraStyles={chakraStyles}
        ref={ref}
        {...props}
      />
    );
  }
);

export default AutocompleteInput;
