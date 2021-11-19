import Styles from "../styles/TodoDivs.module.css";

export default function TodoDivs(props) {

  return props.newtodo.map((todo, index) => (
    <div
      className={Styles.div}
      key={index}
    >
        <p id={`para${index}`}><span>{index+1}.</span>  {todo}</p>
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
        <button
          id="button"
          onClick={
            e => {
              if (e.target.innerHTML === "Completed"){
                document.getElementById(`para${index}`)
                  .className = Styles.strikethrough;
                e.target.innerHTML = "Incompleted";
              }
              else {
                document.getElementById(`para${index}`)
                  .className = "";
                e.target.innerHTML = "Completed";
              }
            }
          }
        >Completed</button>
      </div>
  ))
}
