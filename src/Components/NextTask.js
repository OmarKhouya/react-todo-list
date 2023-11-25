import ToDoTask from "./ToDoTask"

export default function NextTask({toDoList}) {
    const task = toDoList.reduce((a,b)=>{
        if(new Date() - new Date(a.startTime) <= 0 && new Date() - new Date(b.startTime) <=0){
            const timeDiffA = new Date() - new Date(a.endTime)
            const timeDiffB = new Date() - new Date(b.endTime)
            if (timeDiffA >  timeDiffB){
                return a
            }
            return b
        }
        return a
    })
    return (
        <>
            <p className="text-center fw-bold">Next Task</p>
            <ul className="list-unstyled">
                {<ToDoTask task={task} type="Next" show="show" key={task.id} />}
                {/* {sortedToDoList.slice(0,1).map(task=><ToDoTask task={task} type="Next" show="show" key={task.id} />,)} */}
            </ul>
        </>
    )
}
