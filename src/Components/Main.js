import React, { Component } from 'react'
import AddTask from './AddTask'
import NextTask from './NextTask'
import PrevTask from './PrevTask'
import SearchTask from './SearchTask'
import ToDoList from './ToDoList'
import ToDoTask from './ToDoTask'

export default class Main extends Component {
    render() {
        return (
            <div>
                <AddTask />
                <NextTask />
                <PrevTask />
                <SearchTask />
                <ToDoList />
                <ToDoTask />
            </div>
        )
    }
}
