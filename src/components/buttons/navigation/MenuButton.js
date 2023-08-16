import { Form } from "react-router-dom";

import "./css/MenuButton.css";

const MenuButton = (props) => {
  return (
    <>
      <Form action={props.link} method={props.method}>
        <button className="menuBtn">{props.link}</button>
      </Form>
    </>
  );
};

export default MenuButton;
