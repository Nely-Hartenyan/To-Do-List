import './App.css';
import ToDoList from "./Components/ToDoList";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faTimes, faCheck} from "@fortawesome/free-solid-svg-icons";

library.add(faTimes, faCheck);

function App() {
  return (
    <ToDoList/>
  );
}

export default App;
