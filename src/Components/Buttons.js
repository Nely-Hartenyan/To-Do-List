import React from "react";
import {useDispatch} from "react-redux";
import {filterAction} from "../Store/ToDoListReducer";
import s from "../Style.module.css"

function Buttons({removeAllCompleted, deleteItems, items}) {
    const dispatch = useDispatch();


    const filter = (s) => {
        dispatch(filterAction(s))
    }

    return (
        <div className={s.footer}>

            <button onClick={() => filter('all')}>
                All
            </button>
            <button onClick={() => filter('active')}>
                Active
            </button>
            <button onClick={() => filter('complete')}>
                Complete
            </button>
            <button onClick={() => deleteItems(items)}>
                Delete
            </button>
            <button onClick={() => removeAllCompleted()}
                    className={s.RemoveButton}>
                Remove All Completed
            </button>

        </div>
    )
}

export default Buttons;