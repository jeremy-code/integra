import React, { forwardRef } from "react";
import {
  AsyncProps,
  AsyncSelect,
  ChakraStylesConfig,
  GroupBase,
  Options,
  SelectInstance,
} from "chakra-react-select";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  getOptions: (input: string) => Promise<Options<Option>>;
} & AsyncProps<Option, boolean, GroupBase<Option>>;

type SelectRef = SelectInstance<Option, boolean, GroupBase<Option>>;

const Select = forwardRef<SelectRef, SelectProps>((props, ref) => {
  // Custom debounce function that given a function and a delay that debounces the given function
  const debounce = (fn: (...args: any[]) => void, delay = 300) => {
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
      const options = await props.getOptions(input);
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
    placeholder: (provided) => ({
      ...provided,
      whiteSpace: "nowrap",
    }),
  };

  return (
    <AsyncSelect
      chakraStyles={chakraStyles}
      cacheOptions
      loadOptions={loadOptionsDebounced}
      {...props}
    />
  );
});

Select.displayName = "Select";

export default Select;
