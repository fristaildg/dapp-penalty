import { Box, TextField as TextFieldDefault, Text } from '@radix-ui/themes';
import { ForwardedRef, forwardRef } from 'react';
import styles from './text-field.module.css';

type TextFieldProps = TextFieldDefault.RootProps & {
  hasError?: boolean;
  errorMessage?: string;
};

export const TextField = forwardRef(
  (
    { hasError, errorMessage, ...textFieldDefaultProps }: TextFieldProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <Box>
        <TextFieldDefault.Root
          className={hasError ? styles['text-field__error'] : undefined}
          {...textFieldDefaultProps}
          ref={ref}
        />
        {hasError && errorMessage && (
          <Text size="1" color="tomato">
            {errorMessage}
          </Text>
        )}
      </Box>
    );
  },
);
