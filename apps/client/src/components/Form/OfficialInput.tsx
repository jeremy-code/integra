import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";

import { gql, useApolloClient } from "@apollo/client";
import Select from "@/components/Form/Select";

type FormData = {
  official: {
    label: string;
    id: string;
    value: string;
  };
};

type OfficialInputProps = {
  onSubmit: (data: FormData) => Promise<void>;
};

const OfficialInput = ({ onSubmit }: OfficialInputProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const client = useApolloClient();

  const getOptions = async (input: string) => {
    const { data, errors } = await client.query({
      query: gql`
        query getOfficials($name: String!) {
          findOfficialByName(name: $name) {
            id
            first_name
            last_name
            slug
          }
        }
      `,
      variables: {
        name: input,
      },
    });

    if (errors) throw new Error(errors[0].message);
    return data.findOfficialByName.map(
      (official: {
        first_name: string;
        last_name;
        id: string;
        slug: string;
      }) => ({
        label: `${official.first_name} ${official.last_name}`,
        id: official.id,
        value: official.slug,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.official}>
        <FormLabel>Enter your Member of Congress</FormLabel>
        {/* Control React Select component */}
        <Controller
          name="official"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field }) => (
            <Select placeholder="Ted Cruz" {...field} getOptions={getOptions} />
          )}
        />
        <FormErrorMessage>
          {errors.official && errors.official.message}
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

export default OfficialInput;
