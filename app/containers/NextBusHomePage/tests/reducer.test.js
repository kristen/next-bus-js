import { routes } from '../reducer';

describe('nextBusHomePageReducer', () => {
  describe('#routes', () => {
    it('returns an initial state', () => {
      const before = undefined;
      const after = [];
      expect(routes(before, {})).toEqual(after);
    });
  });
});
