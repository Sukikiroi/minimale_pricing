import logo from "./logo.svg";
import "./App.css";
import CardContainer from "./card/cardContainer";
import Home from "./eCommerce/home"
function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#6557FF",
        width: "80%",
        height: "600px",
        alignItems: "center",
        margin: "60px",
        padding: "30px",
      }}
    >
      <Home/>
      {/* <CardContainer width="300px" height="300px" backgroundColor="white" />
      <CardContainer width="300px" height="300px" backgroundColor="black" />
      <CardContainer width="300px" height="300px" backgroundColor="white" /> */}
    </div>
  );
}

export default App;
