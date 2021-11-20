import Styles from "../styles/TodoDivs.module.css";

export default function TodoDivs(props) {

  let jsx = props.todo.map((todo, index) => (
    <div
      className={Styles.div}
      key={index}
    >
        <p id={`para${index}`}><span>{index+1}.</span>  {todo}</p>
        <button
          onClick={
            e => {
              let a = [...props.todo];
              a.splice(index, 1);
              props.setTodo(a);
              props.showAlert({
                "type": "Success",
                "alert": "Todo Deleted!"
              });
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
  ));
  if (String(jsx) === ""){
    console.log("ran");
    return (
      <>
      <div className={Styles.nothingHere}>
        <h2>Looks like there is nothing here...</h2>
        <p>Lets fix that!</p>
      </div>
      </>
    );
  }
  else return jsx;
}
