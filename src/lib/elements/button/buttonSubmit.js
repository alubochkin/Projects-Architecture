import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../theme';

export const ButtonSubmit = styled.button`
  background: ${THEME_COLOR.BUTTON.PRIMERY};
  color: #fff;
  border-radius: 5px;
  padding: ${spacing(2)};
`;
