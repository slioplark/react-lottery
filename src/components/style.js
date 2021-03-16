import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1080px;
  min-height: calc(100vh - 112px);
  margin: 56px auto;
`;

export const TimerWrapper = styled.div`
  flex: 0 0 50%;
  h2 {
    margin: 4px;
  }
  input {
    margin: 4px;
  }
  button {
    margin: 4px;
  }
`;

export const Counter = styled.div`
  font-size: 64px;
  font-weight: bold;
`;

export const List = styled.div`
  width: 100%;
  margin: 4px;
  padding: 4px;
  border: 1px solid #000;
  border-radius: 4px;
`;

export const Item = styled.div`
  margin: 4px;
`;

export const UsersWrapper = styled.div`
  flex: 0 0 50%;
  h2 {
    margin: 4px;
  }
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 30%;
  padding: 4px;
  text-align: center;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  border-radius: 4px;
  background-color: #fff;
  &.hidden {
    display: none;
  }
  h2 {
    margin: 4px;
  }
  img {
    margin: 4px;
  }
`;