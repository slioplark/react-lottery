import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  min-height: calc(100vh - 112px);
  margin: 56px auto;
  padding: 16px;
  box-sizing: border-box;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin: 16px auto;
  }
`;

export const TimerWrapper = styled.div`
  flex: 0 0 50%;
  h2 {
    margin: 8px 0;
  }
  span {
    margin: 8px;
  }
  input {
    height: 40px;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 8px 0;
    padding: 0 8px;
  }
  button {
    min-width: 64px;
    font-size: 16px;
    line-height: 36px;
    margin: 8px 0;
    padding: 0 16px;
  }
`;

export const Counter = styled.div`
  font-size: 64px;
  font-weight: bold;
`;

export const UsersWrapper = styled.div`
  flex: 0 0 50%;
  box-sizing: border-box;
  h2 {
    margin: 8px 0;
  }
`;

export const List = styled.div`
  height: min-content;
  max-height: 70vh;
  margin: 16px 0;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 4px;
  overflow: scroll;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 50%;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  &.hidden {
    display: none;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 50vh;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #000;
  border-radius: 8px;
  background-color: #fff;
  p {
    margin: 8px;
  }
  h2 {
    margin: 8px;
  }
  button {
    position: absolute;
    top: 4px;
    right: 4px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
  }
`;

export const UserLoaderWrapper = styled.div`
  section {
    display: flex;
    align-items: center;
    margin: 8px;
  }

  .skeleton {
    background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
    background-size: 400% 100%;
    animation: loading 1.4s ease infinite;
  }

  .skeleton-avatar {
    flex: 0 0 auto;
    width: 50px;
    height: 50px;
    margin-right: 8px;
    border-radius: 50%;
  }

  .skeleton-paragraph {
    width: 50%;
    height: 32px;
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
  }

  @keyframes loading {
    0% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }
`;