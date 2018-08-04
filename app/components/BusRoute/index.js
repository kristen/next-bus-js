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

const BusRoute = ({ route }) => (
  <Wrapper>
    <BusTag size={size} color={route.color} oppositeColor={route.oppositeColor}>
      {route.tag}
    </BusTag>
    <BusText size={size}>{route.title}</BusText>
  </Wrapper>
);

BusRoute.propTypes = {
  route: PropTypes.object,
};

export default BusRoute;
