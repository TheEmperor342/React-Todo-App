import Input from "./components/Input";
import TodoDivs from "./components/TodoDivs";
import "./styles/index.css";
import { useState } from "react";

export default function App() {
  const [todo, setNewTodo] = useState([]);
  return (
      <div className="parent">
        <div className="innerParent">
          <Input set={setNewTodo} newtodo={todo}/>
          <h3>Your ToDos</h3>
          <div className="todos">
            <TodoDivs newtodo={todo} set={setNewTodo}/>
          </div>
        </div>
      </div>
  );
};
