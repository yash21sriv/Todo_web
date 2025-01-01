 import {useState} from 'react'
 import {Todo} from './Todo'
 import { get } from 'mongoose';
 export function Create(){
    const [title,SetTitle]=useState("");
    const [description,SetDescription]=useState("");
    const [todos,SetTodo]=useState([])
    return <div>
        <input type="text" placeholder="title" style={{
            padding:10,
            margin:10,
        }} onChange={(e)=>{
            SetTitle(e.target.value);
        }}></input>
        <br>
        </br>
        <input type="text" placeholder="description" style={{
            padding:10,
            margin:10,  
        }} onChange={(e)=>{
            SetDescription(e.target.value);
        }}></input>
        <br>
        </br>
        <button style={{
            padding:10,margin:10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"Post",
                body:JSON.stringify({
                   title:title,
                   description:description
                }),
                headers:{
                    "contentType":"application/json"
                }
            }).then(async (res)=>{
                const json= await res.json();
                alert("Todo Added");

            })
        }}>create todo</button>
        <button style={{
            padding:10,
            margin:11,
        }} onClick={()=>{
            fetch("http://localhost:3000/todos")
             .then(async function(res){
              const json=await res.json();
              SetTodo(json.todos);
             })
        }}> Display todo</button>
        <Todo todos={todos}></Todo>
    </div>
}
