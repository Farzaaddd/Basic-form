import React, { useState, useEffect } from "react";
import validate from "./validate";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });

  const [errors, setErrors] = useState({});
  useEffect(() => {
    setErrors(validate(data));
    console.log(errors);
  }, [data]);

  const changeHandler = (event) => {
    if (event.target.name == "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }

    console.log(data);
  };

  return (
    <div>
      <h3> Sign up </h3>
      <form>
        <div>
          <label> name </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label> Email </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label> Password </label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label> Confirm Password </label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
          />
        </div>

        <div>
          <label> I accept terms of privacy policy </label>
          <input
            type="checkbox"
            name="isAccepted"
            value={data.isAccepted}
            onChange={changeHandler}
          />
        </div>

        <div>
          <a href="#"> Login </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
