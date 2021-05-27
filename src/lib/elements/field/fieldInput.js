import styled from 'styled-components';
import { spacing, THEME_COLOR } from '../../theme';

export const FieldInput = styled.input`
  background: ${THEME_COLOR.LIGHT_GREY};
  padding: ${spacing(2)} ${spacing(1)};
  ::placeholder {
    font-size: 14px;
  }
`;
