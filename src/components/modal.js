import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { ModalWrapper, ImgWrapper } from './style';
import photo from '../static/photo.jpg';

const Modal = () => {
  const user = useSelector(state => state.user)
  const isModalOpen = useSelector(state => state.isModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actionCreators.closeModal());
  }

  return (
    <ModalWrapper className={isModalOpen ? '' : 'hidden'}>
      <button onClick={closeModal}>X</button>
      <h2>抽獎結果</h2>
      <ImgWrapper>
        <img src={photo} alt="" />
      </ImgWrapper>
      <div>{user.name}</div>
    </ModalWrapper>
  );
}

export default Modal;