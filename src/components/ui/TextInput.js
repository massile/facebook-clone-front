import styled from '@emotion/styled';

const TextInput = styled.input(
  {
    height: 50,
    flex: 1,
    border: 0,
    outline: 'none',
    padding: '0 20px',
    fontSize: 17,
    fontWeight: 'regular',
    '::placeholder': {
      opacity: 0.5,
    },
  },
  ({ theme, children, placeholder, ...props }) => ({
    ...props,
    fontFamily: theme.fontFamilies.primary,
    color: theme.colors.black,
  }),
);

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
