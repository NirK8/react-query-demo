import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./pages/Home/styles";

const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const queryClient = new QueryClient();

function App() {
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>
        <Header>React Router Demo</Header>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppWrapper>
  );
}

export default App;
