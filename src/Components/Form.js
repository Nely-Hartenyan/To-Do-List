import React, {useState} from "react";
import {addItemAction} from "../Store/ToDoListReducer";
import {useDispatch} from "react-redux";
import s from "../Style.module.css"

function Form() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const Submit = (event) => {
        event.preventDefault();
        if (input.length !== 0) {
            const newItem = {id: Date.now(), text: input, complete: false}
            dispatch(addItemAction(newItem));
            setInput('')
        }
    }
    const Change = (event) => {
        setInput(event.currentTarget.value);
    }

    return (
        <form onSubmit={Submit}>
            <input type='text'
                   onChange={Change}
                   value={input}
                   className={s.inputText}
                   placeholder='Input todo...'/>
            <button>Add</button>
        </form>
    )

}

export default Form;