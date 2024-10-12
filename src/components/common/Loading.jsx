
import { createPortal } from 'react-dom';
import { Audio } from  'react-loader-spinner'
const Loading = () => (
  createPortal(
    <div className="loading">
      <Audio
        height="80"
        width="80"
        color='#fff'
        ariaLabel='three-dots-loading'
        wrapperStyle={{}}
        wrapperClass="wrapper-class"
      />
    </div>, document.querySelector('body')
  )
);

export default Loading;
