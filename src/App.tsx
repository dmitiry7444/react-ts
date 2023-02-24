import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import List from "./components/List";
import {ITodo, IUser} from "./components/types/types";
import axios from "axios";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import UserPage from "./components/UserPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {


    return (
        <BrowserRouter>
            <div>
                <div>
                    <Link to='/users'>Пользователи</Link>
                    <Link to='/todos'>Список дел</Link>
                </div>
                <Routes>
                    <Route path="/users" element={<UserPage/>}/>
                    <Route path="/todos" element={<TodosPage/>}/>
                    <Route path="/users/:id" element={<UserItemPage/>}/>
                    <Route path="/todo/:id" element={<TodoItemPage/>}/>
                    {/*<Route path="*" element={<div>NotFound</div>}/>*/}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
