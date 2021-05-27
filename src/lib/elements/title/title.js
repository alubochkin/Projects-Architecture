import styled from 'styled-components';
import { spacing } from '../../theme';

export const Title = styled.h3.attrs((props) => ({
  size: props.size || '22',
}))`
  text-align: left;
  font-size: ${(props) => props.size}px;
  font-weight: bold;
  margin-bottom: ${spacing(3)};
  display: inline-block;
`;
