export const getRoutes = () =>
  fetch(
    'http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni',
  ).then(response => response.json());

export const getRoute = routeTag =>
  fetch(
    `http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni&r=${routeTag}`,
  ).then(response => response.json());
