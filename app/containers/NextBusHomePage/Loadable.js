/**
 *
 * Asynchronously loads the component for NextBusHomePage
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
