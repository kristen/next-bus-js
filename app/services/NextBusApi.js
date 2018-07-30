import axios from 'axios';

export const getRoutes = () =>
  axios.get(
    'http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni',
  );
