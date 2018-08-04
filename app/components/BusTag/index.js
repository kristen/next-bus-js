/**
 *
 * BusTag
 *
 */

import styled from 'styled-components';

export const BusTag = styled.div`
  background: lightgrey;
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  text-align: center;
  line-height: ${props => props.size}px;
`;

export default BusTag;
