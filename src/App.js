import Header from "./Header";
import Footer from "./Footer";
import Calendar from "./Calendar";

import './App.css';

function App() {
  return (
    <div className="App row">
      <Header />
      <div className="col-8">
        <Calendar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
