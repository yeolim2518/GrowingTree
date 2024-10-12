import { RouterProvider, createHashRouter } from 'react-router-dom';
import routes from './routes';
import Modal from 'react-modal'; 
import { useSetRecoilState } from 'recoil';
import { loadingState } from './store/loading';
import { useQueryClient } from 'react-query';

function App() {
  const setLoading = useSetRecoilState(loadingState);
  const queryClient = useQueryClient();
  queryClient.setDefaultOptions({
    mutations: {
      onMutate() {
        setLoading(true);
      },

      onSettled() {
        setLoading(false);
      }
    }
  })
  const router = createHashRouter(routes);

  return (
    <RouterProvider router={router} />
  );
}

Modal.setAppElement('#root')

export default App;
