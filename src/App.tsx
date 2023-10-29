import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";

import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; //브라우저마다 기본적으로 설치되어있는 스타일을 지워주는 패키지. 크로스 브라우징을 가능케한다.
import LoadingScreen from "./components/loading-screen";
import ProtectedRoute from "./components/protected-route";
import Introduction from "./routes/introduction";
import PointShop from "./routes/pointShop";

import DepositLog from "./routes/DepositLog";
import Deposit from "./routes/deposit";
import Withdrawal from "./routes/Withdrawal";
import KakaoMap from "./routes/kakaomap";

import UserLayout from "./components/userLayout";
import NewLine from "./routes/newLine";
import Funding from "./routes/funding";
import LineResult from "./routes/ShowRails";
import ShowRails from "./routes/ShowRails";
import ShowFund from "./routes/showFund";
import Donate from "./routes/donate";
import Consume from "./routes/consume";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <Introduction />,
      },
      {
        path: "user",
        element: <Profile />,
      },
      {
        path: "user",
        element: <UserLayout />,
        children: [
          { path: "shop", element: <PointShop isDetail={false} /> },
          { path: "detail", element: <PointShop isDetail={true} /> },
          { path: "depositlog", element: <DepositLog /> },
          {
            path: "deposit",
            element: <Deposit />,
          },
          {
            path: "withdrawal",
            element: <Withdrawal />,
          },
          {
            path: "newline",
            element: <NewLine />,
          },
          {
            path: "funding",
            element: <Funding />,
          },
          {
            path: "showrails",
            element: <ShowRails />,
          },
          {
            path: "showfund",
            element: <ShowFund />,
          },
          {
            path: "donate",
            element: <Donate />,
          },
          {
            path: "consume",
            element: <Consume />,
          },
        ],
      },
    ],
  },
  {
    path: "map",
    element: <KakaoMap />,
  },

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
  //const [isLoading, setLoading] = useState(false);
  const isLoading = false;
  return (
    <Wrapper>
      <GlobalStyles />
      {isLoading ? <LoadingScreen /> : <RouterProvider router={router} />}
    </Wrapper>
  );
}

export default App;
