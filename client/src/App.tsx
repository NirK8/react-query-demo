import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./pages/Home/styles";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 0,
      // cacheTime: 30000,
    },
  },
});

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
