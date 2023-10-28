import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
  makeVar,
} from "@apollo/client";
import { useNavigate } from "react-router-dom";

const TOKEN = "TOKEN";

export const isLoggedInVar = makeVar(Boolean(localStorage.getItem(TOKEN)));
export const logUserIn = (token: any) => {
  localStorage.setItem(TOKEN, token);
  isLoggedInVar(true);
};
export const logUserOut = () => {
  localStorage.removeItem(TOKEN);
  window.location.reload();
  const navigate = useNavigate();
  navigate("/login");
};

const httpLink = createHttpLink({ uri: "http://localhost:8000/graphql" });
const authLink = new ApolloLink((operation, forward) => {
  operation.setContext((context: any) => ({
    headers: {
      ...context.headers,
      token: localStorage.getItem(TOKEN),
    },
  }));
  return forward(operation);
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
});
