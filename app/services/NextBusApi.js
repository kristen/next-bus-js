export const getRoutes = () =>
  fetch(
    'http://webservices.nextbus.com/service/publicJSONFeed?command=routeList&a=sf-muni',
  ).then(response => response.json());
