
import ToDoTask from "./ToDoTask"

export default function PrevTask({toDoList}) {
    const sortedToDoList = toDoList.sort((a,b)=> new Date(a.startTime) - new Date(b.startTime))

    const calculTimeDiff = (end,actual) =>{
        const diff = end - actual;
        console.log(diff)
    }

    return (
        <>
            <p className="text-center fw-bold">Previous Task</p>
            <ul className="list-unstyled">
                {sortedToDoList.slice(0,1).map(task=><ToDoTask task={task} type="Prev" show="show" key={task.id}/>)}
            </ul>
        </>
    )
}
