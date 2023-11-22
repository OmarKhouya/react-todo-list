import { useState } from "react";
import { useEffect } from "react";

/* {id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"22/11/2023 14:30:00 PM",endTime:"22/11/2023 15:30:00 PM",priority:2} */
export default function ToDoTask({task,type}) {
    const {id,notes,name,category,startTime,endTime,priority} = task;
    const [startTimeFormatted,setstartTimeFormatted] = useState(new Date(startTime));
    const [endTimeFormatted,setEndTimeFormatted] = useState(new Date(endTime));
    const [TodayDate,setTodayDate] = useState(new Date())
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [StartDay,setStartDay] = useState(startTimeFormatted.getDate() === TodayDate.getDate() ? "Today" : dayNames[startTimeFormatted.getDay()])
    const [StartTime,setStartTime] = useState(`${startTimeFormatted.getHours()}:${(startTimeFormatted.getMinutes() < 10 ? '0' : '') + startTimeFormatted.getMinutes()}`)
    const [EndDay,setEndDay] = useState(endTimeFormatted.getDate() === startTimeFormatted.getDate() ? "" : `${dayNames[endTimeFormatted.getDay()]} at`)
    const [EndTime,setEndTime] = useState(`${endTimeFormatted.getHours()}:${(endTimeFormatted.getMinutes() < 10 ? '0' : '') + endTimeFormatted.getMinutes()}`)
    const priorityLevels = ['Low','Medium','High'];
    // const [Priority,setPriority] = useState(priority ? )
    console.log(startTimeFormatted)
    console.log(endTimeFormatted)
    return (
        <li>
            <button class="dropdown-toggle border border-bottom-0 bg-white rounded-top w-100 p-3" data-bs-target="#Data" type="button" data-bs-toggle="collapse" >
                <span className="me-2 text-capitalize fw-bolder">{name}</span>
            </button>
            <div className="collapse border border-top-0 text-center" id="Data">
                <p className="mt-2 d-flex justify-content-around">
                    <span>{category}</span>
                    <span>{priorityLevels[priority-1]}</span>
                </p>
                <p className="my-3 text-muted">
                    <span>{notes}</span>
                </p>
                <p className="my-2 ">
                    <span>{`${StartDay} at ${StartTime} to ${EndDay} ${EndTime}`}</span>
                </p>
            </div>
        </li>
    )
}
