// auth.test.js
import { render, screen } from '@testing-library/react';
import { authGetUserProfile } from './path-to-your-file/auth';
import { auth } from './path-to-your-file/config/firebase';

jest.mock('./path-to-your-file/config/firebase', () => ({
  auth: {
    currentUser: {
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'https://example.com/test.jpg',
      emailVerified: true,
      uid: 'testUid',
    },
  },
}));

describe('authGetUserProfile', () => {
  test('returns user profile when user is logged in', () => {
    const userProfile = authGetUserProfile();

    expect(userProfile).toEqual({
      displayName: 'Test User',
      email: 'test@example.com',
      photoURL: 'https://example.com/test.jpg',
      emailVerified: true,
    });
  });

  test('returns undefined when user is not logged in', () => {
    // Mock currentUser to be null
    jest.spyOn(auth, 'currentUser', 'get').mockReturnValue(null);

    const userProfile = authGetUserProfile();

    expect(userProfile).toBeUndefined();
  });
});
