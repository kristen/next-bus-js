/**
 *
 * BusRouteDirection
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Direction from './Direction';
import RightArrow from './RightArrow';
import ReactRouterButton from '../../components/ReactRouterButton';

const BusRouteDirection = ({ routeTag, name, title }) => (
  <ReactRouterButton to={`/route/${routeTag}`}>
    <Wrapper>
      <Direction direction={name} />
      <div>{title}</div>
      <RightArrow padding={10} />
    </Wrapper>
  </ReactRouterButton>
);

BusRouteDirection.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  routeTag: PropTypes.string,
};

export default BusRouteDirection;
