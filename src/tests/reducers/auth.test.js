import authReducer from '../../reducers/auth';

test('should set default State', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set login State', () => {
  const uid = 'awmbadjgswbajdfjb1ajfdb';
  const state = authReducer(undefined, { type: 'LOGIN', uid });
  expect(state).toEqual({ uid });
  expect(state.uid).toEqual(uid);
});

test('should set logout State', () => {
  const state = authReducer({ uid: 'anything' }, { type: 'LOGOUT' });
  expect(state).toEqual({});
});
