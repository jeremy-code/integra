import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

import { AutocompleteInput } from "@/components/Form";

type FormData = {
  location: {
    label: string;
    value: string;
  };
};

type LocationInputProps = {
  onSubmit: (data: FormData) => Promise<void>;
};

const LocationInput = ({ onSubmit }: LocationInputProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.location}>
        <FormLabel>Enter your location</FormLabel>
        {/* Control React select component */}
        <Controller
          name="location"
          control={control}
          rules={{ required: "Location is required" }}
          render={({ field }) => <AutocompleteInput {...field} />}
        />
        <FormErrorMessage>
          {errors.location && errors.location.message}
        </FormErrorMessage>
      </FormControl>
      <Flex justify="flex-end">
        <Button mt={4} type="submit" isLoading={isSubmitting}>
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default LocationInput;
