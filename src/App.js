import Header from "./Header";
import Footer from "./Footer";
import Calendar from "./Calendar";
import Main from "./Main";

import './App.css';

function App() {
  return (
    <div className="App row">
      <Header />
      <div className="col-9">
        <Calendar />
      </div>
      <div className="col-3">
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
