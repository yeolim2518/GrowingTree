import { useMutation, useQuery } from "react-query";
import * as staticsApi from '../services/api/statics.api';

const useStatics = () => {
  const statics = useQuery({
    queryKey: ['statics'],
    async queryFn() {
      const response = await staticsApi.getStatics();
      return response.data;
    },
    retry: 0,
  });

  const search = useMutation({
    async mutationFn(option) {
      const response = await staticsApi.getStaticsSearch(option);
      return response.data;
    },
  })

  return {
    statics,
    search
  }
};

export default useStatics;