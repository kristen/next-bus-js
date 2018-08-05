/**
 *
 * BusRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BusTag from '../BusTag';
import Wrapper from './Wrapper';
import BusText from './BusText';

const size = 50;

const BusRoute = ({ tag, title, color, oppositeColor }) => (
  <Wrapper>
    <BusTag size={size} color={color} oppositeColor={oppositeColor}>
      {tag}
    </BusTag>
    <BusText size={size}>{title}</BusText>
  </Wrapper>
);

BusRoute.propTypes = {
  tag: PropTypes.string,
  title: PropTypes.string,
  color: PropTypes.string,
  oppositeColor: PropTypes.string,
};

export default BusRoute;
