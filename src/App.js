import Nav from "./component/navbaar";
import Card from "./component/Card";
import PhoneBook from "./component/PhoneBook";
import "./App.css";
function App() {
  return (
    <div className="App">
      {/*<Nav />
      <div class="container">
        <Card name="Afzal" profession="Back-End developer" />
        <Card name="Kaif" profession="Designer" />
        <Card name="Adil" profession="Full Stack developer" />
        <Card name="Suraj" profession="Front-End developer" />
        <Card name="Simran" profession="HR" />
        <Card name="Tushar" profession="Content Manager" />
  </div>*/}

  <PhoneBook />
    </div>
  );
}

export default App;
