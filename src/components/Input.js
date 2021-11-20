import Styles from "../styles/Input.module.css";

export default function Input(props) {
  return (
    <div className={Styles.mainDiv}>
      <form>
        <input
          type="text"
          placeholder="New Todo Here"
          className={Styles.input}
          id="input"
          autoComplete="off"
        />
        <div className={Styles.buttons}>
          <button
            onClick={
                e => {
                  e.preventDefault();
                  let val = document.getElementById("input").value;
                  if (val !== "") {
                    props.setTodo(
                      [
                        ...props.todo,
                        document.getElementById("input").value
                      ]
                    );
                  }
                  else if (val === "") {
                    props.showAlert({
                      "alert": "Can't take an empty todo",
                      "type": "Warning"
                    });
                  }
                }
              }
          >Add Todo</button>
          <button
            onClick={
              e => {
                e.preventDefault();
                props.setTodo([]);
              }
            }
          >Clear Todos</button>
        </div>
      </form>
    </div>
  );
}
