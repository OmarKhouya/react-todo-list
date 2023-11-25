
import ToDoTask from "./ToDoTask"

const timetest = [
    {time: "2023-11-24T00:09:00"},
    {time: "2023-11-23T23:30:00"},
    {time: "2023-11-23T22:14:00"},
    {time: "2023-11-25T15:09:00"},
    {time: "2023-11-30T15:09:00"},
]

/* const newtime = timetest.reduce((a,b)=>{
    const timeDiffA = new Date() - new Date(a.time)
    const timeDiffB = new Date() - new Date(b.time)
    console.log(a,b)
    console.log(timeDiffA)
    console.log(timeDiffB)
    if (timeDiffA >= 0 || timeDiffB >=0){
        if (timeDiffA > timeDiffB){
            return a
        }
    }
    return b
})
console.log(newtime) */
console.log()
console.log()
export default function PrevTask({toDoList}) {
    const task = toDoList.reduce((closest,current)=>{
        console.log(current,closest)
        if(new Date() - new Date(current.endTime) >= 0){
            const timeDiffClosest = new Date() - new Date(closest.endTime)
            const timeDiffCurrent = new Date() - new Date(current.endTime)
            if (timeDiffClosest > timeDiffCurrent){
                return closest
            }
            return current
        }
        return closest
    },toDoList[0])

    
    return (
        <>
            <p className="text-center fw-bold">Previous Task</p>
            <ul className="list-unstyled">
                {<ToDoTask task={task} type="Prev" show="show" key={task.id}/>}
            </ul>
        </>
    )
}
