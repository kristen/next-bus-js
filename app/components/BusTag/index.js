/**
 *
 * BusTag
 *
 */

import styled from 'styled-components';

const BusTag = styled.div`
  background: ${props => (props.color && `#${props.color}`) || 'lightgrey'};
  color: ${props =>
    (props.oppositeColor && `#${props.oppositeColor}`) || 'black'};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  text-align: center;
  line-height: ${props => props.size}px;
  font-size: ${props => (props.children.length > 2 ? 12 : 20)}px;
`;

export default BusTag;
