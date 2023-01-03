import { Card, Button, Avatar } from "antd";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { logoutAction } from "../../reducers/user";

function UserProfile({ setIsLoggedIn }) {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
    // dispatch(logoutAction())
  }, []);
  return (
    <Card>
      <Card.Meta avatar={<Avatar></Avatar>} title=" 환영합니다 조기범 님 " />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
}

export default UserProfile;
