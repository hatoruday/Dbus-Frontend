import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import Home from "./routes/home";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; //브라우저마다 기본적으로 설치되어있는 스타일을 지워주는 패키지. 크로스 브라우징을 가능케한다.
import { useEffect, useState } from "react";
import LoadingScreen from "./components/loading-screen";
import { auth } from "./firebase";
import ProtectedRoute from "./components/protected-route";

const router = createBrowserRouter([
  {
    path: "/", //유저가 /prifle을 쓰면, layout과 profile이 순서대로 나오게 된다.
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "", //home의 path를 '/'와 똑같이 한다.
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />, // /prifile을 통해, layout component가 출력되고
        //layout내부의 outlet component가 profile 컴포넌트로 대체된다.
      },
    ],
  },
  //login과 create-account page에서 outlet을 노출시키고 싶지 않다.
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create-account",
    element: <CreateAccount />,
  },
]);

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box; 
  }
  body {
    background-color: black;
    color: white;
    font-family: sans-serif
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

function App() {
  const [isLoading, setLoading] = useState(true);
  const init = async () => {
    await auth.authStateReady(); // 인증상태가 준비되었는지를 기다림. 로그인 정보를 받기까지 기다리는 시간
    setLoading(false);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
