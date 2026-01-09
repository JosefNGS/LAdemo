import { getUserProfileByName, getUserProfile, UserProfile } from '../data/userProfiles';
import { AppRoute } from '../types';

/**
 * Navigate to a user profile by name
 * Stores the user ID in sessionStorage and navigates to profile route
 */
export const navigateToUserProfile = (
  userName: string,
  setActiveRoute: (route: AppRoute) => void
) => {
  const profile = getUserProfileByName(userName);
  if (profile) {
    sessionStorage.setItem('selectedUserProfile', profile.id);
    setActiveRoute(AppRoute.USER_PROFILE);
  }
};

/**
 * Get the currently selected user profile ID from sessionStorage
 */
export const getSelectedUserProfileId = (): string | null => {
  return sessionStorage.getItem('selectedUserProfile');
};

/**
 * Get user profile by ID
 */
export const getUserProfileById = (id: string): UserProfile | undefined => {
  return getUserProfile(id);
};
