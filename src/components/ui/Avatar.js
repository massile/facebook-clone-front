import styled from '@emotion/styled';

const Avatar = styled.img(
  {
    borderRadius: '50%',
  },
  ({ theme, size = 'normal' }) => ({
    width: theme.avatarSizes[size],
    height: theme.avatarSizes[size],
  }),
);

export default Avatar;
