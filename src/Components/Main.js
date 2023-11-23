import { Component } from 'react'
import AddTask from './AddTask'
import NextTask from './NextTask'
import PrevTask from './PrevTask'
import SearchTask from './SearchTask'
import ToDoList from './ToDoList'

const TodoList = [
    {id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"2023-11-23T14:09:00",endTime:"2023-11-25T15:30:00",priority:2},
    {id:2,notes:"this is for Second test",name:"Prepare Dinner",category:"Home",startTime:"2023-11-22T20:09:00",endTime:"2023-11-22T20:30:00",priority:3},
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
