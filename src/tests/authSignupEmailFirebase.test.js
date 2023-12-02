import { authSignupEmailFirebase } from '../auth/authSignupEmailFirebase';

describe(authSignupEmailFirebase, () => {
  test('should signed up using email and password', () => {
    const signUp = authSignupEmailFirebase('testemail@gmail.com', 'testpassword');

    console.log(signUp)

    expect(signUp).toEqual({
      displayName: '',
      email: 'testemail@gmail.com',
      photoURL: '',
      emailVerified: false,
    });
  });
});
