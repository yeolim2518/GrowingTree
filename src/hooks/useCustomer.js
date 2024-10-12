import { useMutation, useQuery } from "react-query";
import * as customerApi from '../services/api/customer.api';

const useCustomer = (type, id) => {
  const counselingList = useQuery({
    queryKey: ['list', 'counseling'],
    async queryFn() {
      const response = await customerApi.getCounselingList();
      return response.data;
    },

    keepPreviousData: true,
    enabled: type === 'counseling-list',
    retry: 0,
  });

  const counseling = useQuery({
    queryKey: ['detail', 'counseling', { id }],
    async queryFn({ queryKey }) {
      const [,, { id }] = queryKey
      const response = await customerApi.getCounseling(id);
      return response.data;
    },

    enabled: type === 'counseling',
    retry: 0,
  });

  const estimateList = useQuery({
    queryKey: ['list', 'estimate'],
    async queryFn() {
      const response = await customerApi.getEstimateList();
      return response.data;
    },

    keepPreviousData: true,
    enabled: type === 'estimate-list',
    retry: 0,
  });

  const estimate = useQuery({
    queryKey: ['detail', 'estimate', { id }],
    async queryFn({ queryKey }) {
      const [,, { id }] = queryKey
      const response = await customerApi.getEstimate(id);
      return response.data;
    },

    enabled: type === 'estimate',
    retry: 0,
  });

  const saveEstimate = useMutation({
    mutationFn(form) {
      return customerApi.saveEstimate(form);
    }
  });

  const saveCounseling = useMutation({
    mutationFn(form) {
      return customerApi.saveCounseling(form);
    }
  });

  return {
    saveEstimate,
    saveCounseling,
    counselingList,
    counseling,
    estimateList,
    estimate,
  }
};

export default useCustomer;