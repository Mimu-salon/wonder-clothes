import { Badge, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import type { VFC } from 'react';
import { memo } from 'react';

type Props = {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  isRequired: boolean;
  errorMessage?: string;
  //TODO:any回避
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registers?: any;
};

export const InputForm: VFC<Props> = memo((props) => {
  const { label, placeholder, name, type, isRequired, errorMessage, registers } = props;
  return (
    <FormControl id={name}>
      <FormLabel>
        {label && (
          <Text display="inline" mb={2} fontSize="sm">
            {label}
          </Text>
        )}
        {isRequired && (
          <Badge bg="red.400" color="white" py="3px" px="5px" borderRadius="7px" ml="5px">
            必須
          </Badge>
        )}
        <Text color="red.500" fontSize="14px">
          {errorMessage}
        </Text>
      </FormLabel>
      <Input autoComplete={type} type={type} placeholder={placeholder} {...registers} />
    </FormControl>
  );
});
