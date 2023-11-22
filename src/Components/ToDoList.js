import ToDoTask from "./ToDoTask";

export default function ToDoList ({toDoList}) {

    return(
        <ul className="list-unstyled">
            {toDoList && (
                toDoList.map(task=><ToDoTask task={task} />)
            )}
        </ul>
    )
}