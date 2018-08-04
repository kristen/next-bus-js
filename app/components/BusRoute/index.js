/**
 *
 * BusRoute
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BusTag from '../BusTag';

const BusRoute = ({ route }) => (
  <div>
    <BusTag>{route.tag}</BusTag>
    <div>{route.title}</div>
  </div>
);

BusRoute.propTypes = {
  route: PropTypes.object,
};

export default BusRoute;
