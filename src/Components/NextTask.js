import { useState } from "react"
import ToDoTask from "./ToDoTask"

export default function NextTask({toDoList}) {
    const sortedToDoList = toDoList.sort((a,b)=> new Date(a.startTime) - new Date(b.startTime))
    return (
        <>
            <p className="text-center fw-bold">Next Task</p>
            <ul className="list-unstyled">
                {sortedToDoList.slice(0,1).map(task=><ToDoTask task={task} type="Next" show="show" key={task.id} />,)}
            </ul>
        </>
    )
}
