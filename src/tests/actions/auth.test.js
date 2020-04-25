import { logout, login } from '../../actions/auth';

test('should setup login action properly', () => {
  const uid = 'ambdmbamdbjb';
  expect(login(uid)).toEqual({ type: 'LOGIN', uid: uid });
});

test('should setup logout action properly', () => {
  expect(logout()).toEqual({ type: 'LOGOUT' });
});
