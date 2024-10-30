import "./App.css";
import "./styles.css";
import { useReducer } from "react";
import TicketForm from "./components/TicketForm";
import tickerReducer from "./reducers/ticketReducer";

function App() {
  const initialState = { tickets: [] };

  const [state, dispatch] = useReducer(tickerReducer, initialState);

  return (
    <div className="App">
      <div className="container">
        <h1>Bug Blaster</h1>
        <TicketForm dispatch={dispatch}></TicketForm>
      </div>
    </div>
  );
}

export default App;
