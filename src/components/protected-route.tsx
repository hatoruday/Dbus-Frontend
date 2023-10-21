import { Navigate } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode; // 이렇게 보호하면, Layout component가 children이 된다.
}) {
  //token 가져와서 로그인되었는지 확인.
  const user = true;
  if (user === null) {
    // 현재상태가 로그인된 상태인지를 user객체를 확인해서 조건처리한다.
    return <Navigate to="/login" />; //만약 로그인이 안되어있다면 react-router-dom을 통해서 navigate한다.
  }
  return children;
}
