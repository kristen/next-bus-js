/**
 *
 * RightArrow
 *
 */

import styled from 'styled-components';

const RightArrow = styled.div`
  position: absolute;
  right: ${props => props.padding}px;
  top: ${props => props.padding}px;
  color: grey;
  :before {
    content: '❯';
  }
`;

export default RightArrow;
