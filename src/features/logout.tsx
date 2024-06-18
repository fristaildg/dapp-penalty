import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetUser } from "./login/slice/login.slice-hooks";

export const Logout = () => {
  const navigate = useNavigate();
  const setUser = useSetUser();

  useEffect(() => {
    setUser(null);
    navigate('/login');
  }, []);

  return <></>
};
