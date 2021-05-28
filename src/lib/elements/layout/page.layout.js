import styled from 'styled-components';
import { THEME_SIZE } from '../../theme';

export const PageLayout = styled.section`
  max-width: ${THEME_SIZE.LAYOUT.DEFAULT};
  width: 100%;
  margin: 0 auto;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
