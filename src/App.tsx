import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import Home from "./routes/home";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset"; //브라우저마다 기본적으로 설치되어있는 스타일을 지워주는 패키지. 크로스 브라우징을 가능케한다.
import LoadingScreen from "./components/loading-screen";
import ProtectedRoute from "./components/protected-route";
import Introduction from "./routes/introduction";
import PointShop from "./routes/pointShop";
import WalletLayout from "./components/walletLayout";
import DepositLog from "./routes/DepositLog";
import Deposit from "./routes/deposit";
import Withdrawal from "./routes/Withdrawal";

const router = createBrowserRouter([
  {
    path: "/introduction",
    element: <Introduction />,
  },
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
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "wallet",
    element: <WalletLayout />,
    children: [
      { path: "", element: <PointShop isDetail={false} /> },
      { path: "detail", element: <PointShop isDetail={true} /> },
      { path: "depositLog", element: <DepositLog /> },
      {
        path: "deposit",
        element: (
          <Deposit address="0xddF2b929370CF0962F0A87A49f388CA191432008" />
        ),
      },
      {
        path: "withdrawal",
        element: <Withdrawal />,
      },
    ],
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
