/**
 *
 * BusTag
 *
 */

import styled from 'styled-components';

const fontSize = tag => {
  if (tag.length > 3) return 14;
  if (tag.length > 2) return 18;
  return 20;
};

const BusTag = styled.div`
  background: ${props => (props.color && `#${props.color}`) || 'lightgrey'};
  color: ${props =>
    (props.oppositeColor && `#${props.oppositeColor}`) || 'black'};
  border-radius: 50%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  text-align: center;
  line-height: ${props => props.size}px;
  font-size: ${props => fontSize(props.children)}px;
`;

export default BusTag;
