import { Component } from 'react'
import AddTask from './AddTask'
import NextTask from './NextTask'
import PrevTask from './PrevTask'
import SearchTask from './SearchTask'
import ToDoList from './ToDoList'
import ToDoTask from './ToDoTask'

const TodoList = [{id:1,notes:"this is for test",name:"testing",category:"Work",startTime:"22/11/2023 14:30:00 PM",endTime:"22/11/2023 15:30:00 PM",priority:2}]
/* The Priority level is out of 3 (like ?/3) */

export default class Main extends Component {
    render() {
        return (
            <div className='container'>
                <div className=''>
                    <div className=''>
                        <ToDoList toDoList={TodoList} />
                    </div>
                    <div className=''>
                        <div className=''>
                            <NextTask />
                        </div>
                        <div className=''>
                            <PrevTask />
                        </div>
                    </div>
                </div>
                <div>
                    <SearchTask />
                </div>
            </div>
        )
    }
}
