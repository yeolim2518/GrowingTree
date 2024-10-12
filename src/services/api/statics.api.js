import { newAixos } from ".";

export const getStatics = () => (
  newAixos.get(`/api/admin/visit/statics`)
);

export const getStaticsSearch = (option) => (
  newAixos.post(`/api/admin/visit/search`, option)
);