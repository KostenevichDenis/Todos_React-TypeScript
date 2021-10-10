import React from "react";
import { ITodo } from "../interfaces";

type ToDoListProps = {
    todos: ITodo[];
    onToggle(id: number): void;
    onRemove(event: React.MouseEvent<HTMLElement>, id: number): void;
};

const TodoList = ({ todos, onToggle, onRemove }: ToDoListProps) => {
    /* console.log("recieved todos:", todos); */
    if (todos.length === 0) {
        return (
            <p className="center">Have no todos</p>
        )
    }

    return (
        <ul>
            {todos.map((todo) => {
                /* console.log("render list todo:", todo); */
                const classes = ["todo"];
                if (todo.completed) {
                    classes.push("completed");
                }
                return (
                    <li className={classes.join(" ")} key={todo.id}>
                        <label>
                            <input
                                type={"checkbox"}
                                checked={todo.completed}
                                onChange={(event) => onToggle(todo.id)}
                            />
                            <span>
                                {todo.title}
                            </span>
                            <i
                                className="material-icons red-text"
                                onClick={(event) => onRemove(event, todo.id)}
                            >
                                delete
                            </i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;
