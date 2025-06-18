import "./App.css";
import { Layout } from "./components/Layout/Layout.tsx";
import { Products } from "./pages/Products/Products.tsx";

function App() {
  return (
    <Layout>
      <Products />
    </Layout>
  );
}

export default App;
