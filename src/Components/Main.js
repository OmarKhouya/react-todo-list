import { Component } from 'react'
import AddTask from './AddTask'
import NextTask from './NextTask'
import PrevTask from './PrevTask'
import SearchTask from './SearchTask'
import ToDoList from './ToDoList'

const TodoList = [{id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"2023-11-23T14:09:00",endTime:"2023-11-25T15:30:00",priority:2}]
/* The Priority level is out of 3 (like ?/3) */

export default class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className='d-flex justify-content-evenly flex-wrap'>
                    <div className='border border-dark rounded p-3 m-3 w-100' style={{maxWidth: "30rem"}}>
                        <ToDoList toDoList={TodoList} />
                    </div>
                    <div className='d-flex flex-column ' >
                        <div className='border border-dark rounded p-3 m-3 ' style={{maxWidth: "25rem"}}>
                            <NextTask />
                        </div>
                        <div className='border border-dark rounded p-3 m-3 ' style={{maxWidth: "25rem"}}>
                            <PrevTask />
                        </div>
                    </div>
                </div>
                <div className='border border-dark rounded p-3 m-3 '>
                    <AddTask />
                </div>
                <div className='border border-dark rounded p-3 m-3 '>
                    <SearchTask />
                </div>
            </div>
        )
    }
}
