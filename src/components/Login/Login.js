import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const nameReducer = (state, action) => {
    if (action.type === "USER_INPUT") {
        return { value: action.val, isValid: action.val === "andreya" };
    }
    if (action.type === "INPUT_BLUR") {
        return { value: state.value, isValid: state.value === "andreya"  };
    }
    return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
      return { value: action.val, isValid: action.val === "andreya"  };
  }
  if (action.type === "INPUT_BLUR") {
      return { value: state.value, isValid: state.value === "andreya" };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  	const authCtx = useContext(AuthContext);

    const [formIsValid, setFormIsValid] = useState(false);

    const [nameState, dispatchname] = useReducer(nameReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
      value: "",
      isValid: null,
  });

    useEffect(() => {
        console.log("EFFECT RUNNING");

        return () => {
            console.log("EFFECT CLEANUP");
        };
    }, []);

    const { isValid: nameIsValid} = nameState;
    const { isValid: passwordIsValid} = passwordState;

    useEffect(() => {
      const identifier = setTimeout(() => {
        console.log('Checking form validity!');
        setFormIsValid(
          nameIsValid && passwordIsValid
        );
      }, 500);

      return () => {
        console.log('CLEANUP');
        clearTimeout(identifier);
      };
    }, [nameIsValid, passwordIsValid]);

    const nameChangeHandler = (event) => {
        dispatchname({ type: "USER_INPUT", val: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    };

    const validatenameHandler = () => {
        dispatchname({type: 'INPUT_BLUR'})
    };

    const validatePasswordHandler = () => {
        dispatchPassword({type: 'INPUT_BLUR'})
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(nameState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        nameState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="name"
                        id="name"
                        value={nameState.value}
                        onChange={nameChangeHandler}
                        onBlur={validatenameHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                      passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
