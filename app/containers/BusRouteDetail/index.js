/**
 *
 * BusRouteDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectBusRouteDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class BusRouteDetail extends React.Component {
  componentDidMount() {
    this.props.requestRoute(this.props.match.params.routeTag);
  }

  render() {
    return (
      <div>
        <div>{this.props.match.params.routeTag}</div>
        <div>{this.props.match.params.direction}</div>
      </div>
    );
  }
}

BusRouteDetail.propTypes = {
  match: PropTypes.object.isRequired,
  requestRoute: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  busroutedetail: makeSelectBusRouteDetail(),
});

const withConnect = connect(
  mapStateToProps,
  actions,
);

const withReducer = injectReducer({ key: 'busRouteDetail', reducer });
const withSaga = injectSaga({ key: 'busRouteDetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(BusRouteDetail);
