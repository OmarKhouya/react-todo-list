import { Component } from 'react'
import AddTask from './AddTask'
import NextTask from './NextTask'
import PrevTask from './PrevTask'
import SearchTask from './SearchTask'
import ToDoList from './ToDoList'

const TodoList = [
    {
        id:1,
        notes:"Work on your to do list project",
        name:"Continue Project",
        category:"Work",
        startTime:"2023-11-24T15:00:00",
        endTime:"2023-11-24T17:00:00",
        priority:3
    },
    {
        id:2,
        notes:"Watch some youtube videos",
        name:"Watch Youtube",
        category:"Home",
        startTime:"2023-11-24T13:00:00",
        endTime:"2023-11-24T14:30:00",
        priority:1
    },
    {
        id:3,
        notes:"Go prepare your dinner",
        name:"Prepare Dinner",
        category:"Home",
        startTime:"2023-11-23T20:00:00",
        endTime:"2023-11-22T21:00:00",
        priority:3,
    },
    {
        id:4,
        notes:"Go take a shower",
        name:"Shower",
        category:"home",
        startTime:"2023-11-24T17:00:00",
        endTime:"2023-11-24T17:30:00",
        priority:2
    },
    {
        id:5,
        notes:"go to school",
        name:"go to school",
        category:"School",
        startTime:"2023-11-22T08:13:00",
        endTime:"2023-11-22T13:30:00",
        priority:3,
    },
]
/* The Priority level is out of 3 (like ?/3) */

export default class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className='row justify-content-between mx-1'>
                    <div className='border border-dark rounded mt-3 pt-3 col-lg-6 col-md-6 col-sm-12'>
                        <ToDoList toDoList={TodoList} />
                    </div>
                    <div className='pe-0 ps-0 col-lg-4 col-md-5 col-sm-12 mt-3'>
                        <div className='border border-dark rounded px-2 pt-3'>
                            <NextTask toDoList={TodoList} />
                        </div>
                        <div className='border border-dark rounded px-2 mt-3 pt-3' >
                            <PrevTask toDoList={TodoList} />
                        </div>
                    </div>
                </div>
                <div className='mx-1 mt-3'>
                    <div className='border border-dark rounded p-3'>
                        <AddTask />
                    </div>
                    <div className='border border-dark rounded p-3 mt-3'>
                        <SearchTask />
                    </div>
                </div>
            </div>
        )
    }
}
