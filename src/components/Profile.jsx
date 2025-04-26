import React from "react";
import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(2);
  return (
    <div>
      <h1>Hello {props.name} : this is profile component</h1>
      <h2>Count:{count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
          //setCount2(count);
        }}
      >
        setCount
      </button>
    </div>
  );
};
export default Profile;
