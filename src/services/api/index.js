import axios from "axios";

export const newAixos = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const saveRefreshToken = (token = '') => {
  localStorage.setItem('refresh', token);
};

export const getRefreshToken = () => (
  localStorage.getItem('refresh')
);

export const clearRefreshToken = () => {
  saveRefreshToken('');
};

export const saveAccessToken = (token = '') => {
  newAixos.defaults.headers.common["AccessToken"] = `Bearer ${token}`;
  localStorage.setItem('access', token);
};

export const getAccessToken = () => (
  localStorage.getItem('access')
);

export const clearAccessToken = () => {
  saveAccessToken('');
};

export const clearToken = () => {
  clearRefreshToken('');
  clearAccessToken('');
};

export const saveToken = (access, refresh) => {
  saveAccessToken(access);
  saveRefreshToken(refresh);
}
