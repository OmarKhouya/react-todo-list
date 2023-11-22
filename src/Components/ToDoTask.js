
/* {id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"22/11/2023 14:30:00 PM",endTime:"22/11/2023 15:30:00 PM",priority:2} */
export default function ToDoTask({task}) {
    const {id,notes,name,category,startTime,endTime,priority} = task;
    return (
        <li key={id}>
            {`task name : ${name}, category ${category}, starts at ${startTime}, ends at ${endTime}, priority ${priority}, notes ${notes}`}
        </li>
    )
}
