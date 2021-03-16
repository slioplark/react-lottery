import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { ModalWrapper } from './style';
import photo from '../static/photo.png'

const Modal = () => {
  const isModalOpen = useSelector(state => state.isModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actionCreators.closeModal())
  }

  return (
    <ModalWrapper className={isModalOpen ? '' : 'hidden'}>
      <button onClick={closeModal}>X</button>
      <h2>抽獎結果</h2>
      <img src={photo} alt="" />
      <div>1</div>
    </ModalWrapper>
  );
}

export default Modal;