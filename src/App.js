import { Form } from "./Components/Multi-Part-Form/Form";
import { AppContext } from "./context/AppContext";

function App() {
  return (
    <div className="App">
      <AppContext>
        <Form />
      </AppContext>
    </div>
  );
}

export default App;
