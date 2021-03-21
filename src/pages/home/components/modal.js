import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from '../store';
import { ModalWrapper, ModalContent, ImgWrapper } from '../style';
import photo from '../../../static/photo.jpg';

const Modal = () => {
  const user = useSelector(state => state.home.user)
  const isModalOpen = useSelector(state => state.home.isModalOpen);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(actionCreators.closeModal());
  }

  return (
    <ModalWrapper className={isModalOpen ? '' : 'hidden'}>
      <ModalContent>
        <button onClick={closeModal}>X</button>
        <h2>抽獎結果</h2>
        <ImgWrapper>
          <img src={photo} alt="" />
        </ImgWrapper>
        <p>{user.name}</p>
      </ModalContent>
    </ModalWrapper>
  );
}

export default Modal;