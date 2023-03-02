import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getNotification } from "../redux/actions";

import Button from "../atoms/Button";
import Title from "../atoms/Title";

const NotificationContainer = styled.div`
  z-index: 9;
  position: absolute;
  display: flex;
  justify-content: ${({ position }) => {
    const positions = {
      right: () => "flex-end",
      left: () => "flex-start",
      center: () => "center",
    };
    return positions[position || "center"]();
  }};
  align-items: flex-start;
  width: 100vw;
  height: 100vh;

  background: var(--color-gray-semi-transparent);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
`;

const NotificationStyled = styled.div`
  overflow: hidden;
  position: relative;
  font-size: 1.3em;
  margin: 1em;
  width: 30vw;
  min-width: max-content;
  padding: 1em;
  border-radius: 5px;
  border-left: 10px solid ${({ status }) => (status === "error" ? "var(--color-trinidad)" : "var(--color-fruit-salad)")};
  background-color: var(--color-white);

  & > h3 {
    text-transform: capitalize;
    font-weight: var(--weight-secondary);
  }
`;

const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: var(--weight-secondary);
  padding: 0.5em;
`;

function Notification({ position }) {
  const dispatch = useDispatch();
  const notification = useSelector(({ notification }) => notification);

  const onClose = () => dispatch(getNotification({ type: "clean" }));

  const notification_types = {
    error: () => (
      <NotificationStyled status="error">
        <Title type="small">{notification.type}</Title>
        {notification.message}
        <CloseContainer>
          <Button onClick={onClose}>X</Button>
        </CloseContainer>
      </NotificationStyled>
    ),
    success: () => (
      <NotificationStyled status="success">
        <Title type="small">{notification.type}</Title>
        {notification.message}
        <CloseContainer>
          <Button onClick={onClose}>X</Button>
        </CloseContainer>
      </NotificationStyled>
    ),
  };

  return (
    notification && <NotificationContainer position={position}>{notification_types[notification.type]()}</NotificationContainer>
  );
}

export default Notification;
