import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { Layout } from "./components/Layout/Layout.tsx";
import { Products } from "./pages/Products/Products.tsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Products />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
