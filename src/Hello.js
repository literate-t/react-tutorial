import React from "react";

function Hello({ name, color, isSpecial }) {
  return (
    <div
      style={{
        color,
      }}
    >
      {isSpecial && <b>*</b>}
      Hi! {name}
    </div>
  );
}
Hello.defaultProps = {
  name: "No name!",
};
export default Hello;
