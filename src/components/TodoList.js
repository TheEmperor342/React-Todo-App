import TodoDivs from "./TodoDivs";

export default function TodoList(props) {
  return (
    <div>
      <TodoDivs newtodo={props.newtodo} set={props.set}/>
    </div>
  );
}
