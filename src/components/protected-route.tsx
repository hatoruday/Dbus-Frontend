import { useReactiveVar } from "@apollo/client";
import { Navigate } from "react-router-dom";
import { isLoggedInVar } from "../apollo";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode; // 이렇게 보호하면, Layout component가 children이 된다.
}) {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  if (isLoggedIn === false) {
    // 현재상태가 로그인된 상태인지를 user객체를 확인해서 조건처리한다.
    return <Navigate to="/login" />; //만약 로그인이 안되어있다면 react-router-dom을 통해서 navigate한다.
  }
  return children;
}
