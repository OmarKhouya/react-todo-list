
/* {id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"22/11/2023 14:30:00 PM",endTime:"22/11/2023 15:30:00 PM",priority:2} */
export default function ToDoTask({task}) {
    const {id,notes,name,category,startTime,endTime,priority} = task;
    const startT = new Date(startTime);
    console.log(startT)
    return (
        <li key={id}>

            <div className="border rounded-top p-3">
                <span className="d-flex fw-bolder justify-content-around"><span>{name}</span><span className="">{category}</span></span>
                <span className="d-block mt-2"><textarea className="form-control text-muted" rows={1} readOnly defaultValue={notes}></textarea></span>
                <span className="d-block"><span>{`from ${startTime} to ${endTime}`}</span></span>
                <span className="d-block"><span>{priority}</span></span>
            </div>
            {/* {`task name : ${name}, category ${category}, starts at ${startTime}, ends at ${endTime}, priority ${priority}, notes ${notes}`} */}
        </li>
    )
}
