import { BaseStyle } from '@chakra-ui/theme-tools';

const register = {
  parts: ['link'],
} as const;

const baseStyle: BaseStyle<typeof register> = {
  link: {
    _disabled: {
      cursor: 'not-allowed',
      opacity: 0.4,
      textDecoration: 'none',
    },
    _focus: {
      boxShadow: 'outline',
    },
    _hover: {
      textDecoration: 'underline',
    },
    color: 'inherit',
    cursor: 'pointer',
    outline: 'none',
    textDecoration: 'none',
    transition: `all 0.15s ease-out`,
  },
};

export const Link = {
  baseStyle,
  register,
};
