import Input from "./components/Input";
import TodoDivs from "./components/TodoDivs";
import Alert from "./components/Alert.js";

import "./styles/index.css";
import { useState } from "react";

export default function App() {
  const [todo, setNewTodo] = useState([]);
  const [alert, setAlert] = useState(null);

  const setTodo = todo => { setNewTodo(todo); };
  const showAlert = alert => {
    setAlert(alert);
    setTimeout(() => { setAlert(null);}, 3000);
 };

  return (
    <>
      <Alert alert={alert}/>
      <div className="parent">
        <div className="innerParent">
          <Input setTodo={setTodo} todo={todo} showAlert={showAlert}/>
          <h3>Your ToDos</h3>
          <div className="todos">
            <TodoDivs todo={todo} setTodo={setTodo} showAlert={showAlert}/>
          </div>
        </div>
      </div>
    </>
  );
};
