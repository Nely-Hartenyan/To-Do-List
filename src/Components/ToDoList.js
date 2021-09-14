import React from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "../Style.module.css"
import {
    completedItemAction,
    deleteAllItemsAction,
    deleteItemAction,
    removeCompletedAction
} from "../Store/ToDoListReducer";
import Form from "./Form";
import ListItem from "./ListItem";
import Buttons from "./Buttons";

function ToDoList() {

    const dispatch = useDispatch();
    const {items} = useSelector(state => state)
    const {filter}=useSelector(state=>state)

    const deleteItems = (items) => {
        dispatch(deleteAllItemsAction(items))
    }

    const deleteItem = (id) => {
        dispatch(deleteItemAction(id))

    }

    const CheckedItem = (id) => {
        const list = items.map(item => {
            if (item.id === id) {
                return {...item, complete: !item.complete};
            }
            return item
        })
        dispatch(completedItemAction(list))

    }

    const removeAllCompleted = (id) => {
        dispatch(removeCompletedAction(id))
    }
    const item = items.filter((el) => filter === 'all' ? true : filter === 'active' ? !el.complete : el.complete)

    // let item = [];
    // if (filter === 'all') {
    //     item = items
    // } else if (filter === 'active') {
    //     item = items.filter(item => !item.complete)
    // } else if (filter === 'complete') {
    //     item = items.filter(item => item.complete);
    // }

    return (
        <div  className={s.container}>
            <h2>To Do List</h2>
            <Form/>
            {item.map(item => {
                return <ListItem
                        key={item.id}
                         item={item}
                        CheckedItem={CheckedItem}
                        deleteItem={deleteItem}/>
            })}
            <h2>
                Left To Do : {items.filter(item => !item.complete).length} / {items.length}
            </h2>
            <Buttons
                deleteItems={deleteItems}
                removeAllCompleted={removeAllCompleted}
                items={items}/>
        </div>
    )
}

export default ToDoList;