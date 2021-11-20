import Styles from "../styles/Alert.module.css";

export default function Alert(props) {
  return (
    props.alert &&
    <div className={Styles.alert} id="alert">
      <p><span>{props.alert["type"]}</span>: {props.alert["alert"]}</p>
    </div>
  );
}
