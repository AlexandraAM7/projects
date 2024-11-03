import { useContext } from 'react';
import { ProfileContext } from '../context';

export const useProfileData = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('Cannot find user data');
  }
  return context;
};