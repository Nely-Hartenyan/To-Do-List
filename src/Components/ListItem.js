import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import s from "../Style.module.css"

function ListItem({item, deleteItem, CheckedItem}) {

    return (
        <div className={s.listItem}>
            {item.text}
            <span>
                <FontAwesomeIcon icon="check"
                                 onClick={() => CheckedItem(item.id)}
                                 className={s.iconCheck}
                                 style={{color: item.complete ? "darkgreen" : ""}}

                />
            </span>

            <span>
                <FontAwesomeIcon icon="times"
                                 onClick={() => deleteItem(item.id)}
                                 className={s.iconDelete}

                />
            </span>

        </div>
    )
}

export default ListItem;