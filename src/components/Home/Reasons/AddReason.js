import { useState } from "react";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";

import classes from "./AddReason.module.css";

const AddReason = (props) => {
    const [text, setText] = useState('');

    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    const addReasonHandler = (event) => {
        event.preventDefault();
        if(text === '') return;

        props.onAddReason(text);
        setText('');
    }

    return (
        <Card className={classes.input}>
            <form onSubmit={addReasonHandler}>
                <label htmlFor="text">Reason to love Andie</label>
                <input
                    id="text"
                    type="text"
                    value={text}
                    onChange={textChangeHandler}
                />
                <Button type="submit">Add Reason</Button>
            </form>
        </Card>
    );
};

export default AddReason;