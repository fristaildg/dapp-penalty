export const USER_COOKIE = 'user';

export const loginUser = (userName: string) => {
  localStorage.setItem(USER_COOKIE, userName);
};

export const logoutUser = () => {
  localStorage.removeItem(USER_COOKIE);
};

export const getLoggedInUser = () => {
  return localStorage.getItem(USER_COOKIE);
};
