import axios from "axios";
import { newAixos } from ".";


export const visite = () => (
  axios.get('/api/visit')
);

export const login = (form) => (
  newAixos.post('/api/admin/login', form)
);

export const logout = () => (
  newAixos.delete('/api/admin/logout')
);

export const refresh = (refresh) => (
  newAixos.post('/api/admin/refresh', null, {
    headers: {
      refreshToken: `Bearer ${refresh}`
    }
  })
);