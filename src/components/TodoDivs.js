import Styles from "../styles/TodoDivs.module.css";

export default function TodoDivs(props) {
  return props.newtodo.map((todo, index) => (
    <div
      className={Styles.div}
      key={index}
    >
        <p>{index}  {todo}</p>
        <button
          onClick={
            e => {
              let a = [...props.newtodo];
              a.splice(index, 1);
              props.set(a);
              console.log(`New Todo: ${props.newtodo}`);
          }
        }
        >Delete</button>
      </div>
  ))
}
