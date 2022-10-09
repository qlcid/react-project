import "./App.css";
import "./styles/styles.css";
// import Home from "./components/homeComponent/View";
import ProductContextProvider from "./contexts/productContext";
import Regist from "./components/registComponent/Regist";
import Home from "./components/homeComponent/View";

function App() {
  return (
    <ProductContextProvider>
      <Home />
    </ProductContextProvider>
  );
}

export default App;
