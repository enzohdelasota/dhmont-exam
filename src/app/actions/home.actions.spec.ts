import * as fromHome from './home.actions';

describe('loadHomes', () => {
  it('should return an action', () => {
    expect(fromHome.loadIncidencias().type).toBe('[Home] Load Incidencias');
  });
});
