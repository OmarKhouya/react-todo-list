import { useState } from "react";
import { useEffect } from "react";

/* {id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"22/11/2023 14:30:00 PM",endTime:"22/11/2023 15:30:00 PM",priority:2} */
export default function ToDoTask({task}) {
    const {id,notes,name,category,startTime,endTime,priority} = task;
    // Formatting Start and End dates :  
    const [startTimeFormatted,setstartTimeFormatted] = useState(new Date(startTime));
    const [endTimeFormatted,setEndTimeFormatted] = useState(new Date(endTime));
    // Getting today's Date 
    const [TodayDate,setTodayDate] = useState(new Date())
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [StartDay,setStartDay] = useState('')
    const [StartTime,setStartTime] = useState('')
    const [EndDay,setEndDay] = useState('')
    const [EndTime,setEndTime] = useState('')
    const [Priority,setPriority] = useState('')
    useEffect(()=>{ 
    // Time Handling :
        // Setting both start and end 's day and time
        setStartDay(startTimeFormatted.getDate() === TodayDate.getDate() ? "Today" : dayNames[startTimeFormatted.getDay()])
        setStartTime(`${startTimeFormatted.getHours()}:${(startTimeFormatted.getMinutes() < 10 ? '0' : '') + startTimeFormatted.getMinutes()}`)
        setEndDay(endTimeFormatted.getDate() === startTimeFormatted.getDate() ? "" : `${dayNames[endTimeFormatted.getDay()]} at`)
        setEndTime(`${endTimeFormatted.getHours()}:${(endTimeFormatted.getMinutes() < 10 ? '0' : '') + endTimeFormatted.getMinutes()}`)
    // Priority Handling : 
        setPriority()
    },[])
    
    console.log(startTimeFormatted)
    console.log(endTimeFormatted)
    return (
        <li>

            <div className="border rounded-top p-3">
                <span className="d-flex fw-bolder justify-content-around"><span>{name}</span><span className="">{category}</span></span>
                <span className="d-block mt-2"><textarea className="form-control text-muted" rows={1} readOnly defaultValue={notes}></textarea></span>
                <span className="d-block my-2 text-center"><span>{`${StartDay} at ${StartTime} to ${EndDay} ${EndTime}`}</span></span>
                <span className="d-block"><span>{priority}</span></span>
            </div>
            {/* {`task name : ${name}, category ${category}, starts at ${startTime}, ends at ${endTime}, priority ${priority}, notes ${notes}`} */}
        </li>
    )
}
