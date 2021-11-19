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
                  props.set(
                    [
                      ...props.newtodo,
                      document.getElementById("input").value
                    ]
                  );
                }
              }
          >Add Todo</button>
          <button
            onClick={
              e => {
                e.preventDefault();
                props.set([]);
              }
            }
          >Clear Todos</button>
        </div>
      </form>
    </div>
  );
}
