// https://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf

const baseUrl =
  'http://webservices.nextbus.com/service/publicJSONFeed?command=routeConfig&a=sf-muni';

export const getRoutes = () =>
  fetch(`${baseUrl}&terse`).then(response => response.json());

export const getRoute = routeTag =>
  fetch(`${baseUrl}&r=${routeTag}&terse`).then(response => response.json());
