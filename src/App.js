// import logo from './logo.svg';
// import './App.css';

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/general.scss";
import BgNails from "./components/BgNails/BgNails";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";


function App() {
  return (
    <div className="App">
      <BgNails></BgNails>
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
