import ToDoTask from "./ToDoTask";

export default function ToDoList ({toDoList}) {

    return(
        <>
            <p className="text-center fw-bold">To Do</p>
            <ul className="list-unstyled">
                {toDoList && (
                    toDoList.map(task=><ToDoTask task={task} key={task.id} type="List"/>)
                )}
            </ul>
        </>
    )
}