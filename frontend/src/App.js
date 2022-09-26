import "./App.css";
import "./styles/styles.css";
import Home from "./components/homeComponent/View";
import ProductContextProvider from "./contexts/productContext";
import Regist from "./components/registComponent/Regist";

function App() {
  return (
    <ProductContextProvider>
      <Home />
      {/* <Regist /> */}
    </ProductContextProvider>
  );
}

export default App;
