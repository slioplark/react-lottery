import { ModalWrapper } from './style';
import photo from '../static/photo.png'

const Modal = () => {
  return (
    <ModalWrapper className="hidden">
      <h2>抽獎結果</h2>
      <img src={photo} alt="" />
      <div>1</div>
    </ModalWrapper>
  );
}

export default Modal;