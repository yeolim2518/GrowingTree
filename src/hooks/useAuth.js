import { useMutation, useQuery, useQueryClient } from "react-query";
import * as authApi from '../services/api/auth.api';
import { getRefreshToken, saveToken, saveAccessToken, clearToken } from '../services/api';
import { useSetRecoilState } from "recoil";
import { adminState } from "../store/admin";

const useAuth = () => {
  const setAdminState = useSetRecoilState(adminState);
  const queryClient = useQueryClient();
  const user = useQuery({
    queryKey: ['user'],
    async queryFn() {
      const response = await authApi.refresh(getRefreshToken());
      const { token } = response.headers;
      saveAccessToken(token);
      queryClient.setQueryData(['user'], response.data);
      setAdminState(true);
      return response.data;
    },

    staleTime: 1.5 * 60 * 60 * 1000,
    refetchInterval: 1.5 * 60 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    retry: 0,
  });

  const login = useMutation({
    async mutationFn(form) {
      const response = await authApi.login(form);
      const { token, refresh } = response.headers;
      saveToken(token, refresh);
      queryClient.setQueryData(['user'], response.data);
      return response.data;
    },
  });

  const logout = useMutation({
    async mutationFn() {
      await authApi.logout();
      queryClient.setQueryData(['user'], null);
      clearToken();
    }
  });

  const visite = useMutation({
    mutationFn() {
      authApi.visite();
    }
  })

  return {
    login,
    logout,
    visite,
    user
  }
};

export default useAuth;