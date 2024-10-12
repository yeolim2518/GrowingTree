import axios from "axios";
import { newAixos } from ".";

export const saveEstimate = (form) => (
  axios.post('/api/estimate', form)
);

export const saveCounseling = (form) => (
  axios.post('/api/counseling', form)
);

export const getCounselingList = () => (
  newAixos.get('/api/admin/list/counseling')
);

export const getCounseling = (id) => (
  newAixos.get(`/api/admin/counseling/${id}`)
);

export const getEstimateList = () => (
  newAixos.get('/api/admin/list/estimate')
);

export const getEstimate = (id) => (
  newAixos.get(`/api/admin/estimate/${id}`)
);