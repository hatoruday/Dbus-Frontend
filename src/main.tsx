import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "./apollo.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
