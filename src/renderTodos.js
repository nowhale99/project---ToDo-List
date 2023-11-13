import { projectArr } from "./logic.js"
import { deleteTodo } from "./logic.js"
import { rewriteTodo } from "./logic.js"


export function renderTodos(){
    const todoGrid = document.getElementById('grid')
    todoGrid.innerHTML=''
    const currentProject = projectArr.find(project=>project.state===true)
    for(let i=0; i<currentProject.todos.length; i++){
        const todoBody=document.createElement('div')
        todoBody.classList.add('todo')
        todoGrid.appendChild(todoBody)
        //
        const delButRow = document.createElement('div')
        delButRow.classList.add('del-but-row')
        todoBody.appendChild(delButRow)

        const rewriteTodoBtn = document.createElement('button')
        rewriteTodoBtn.innerText='red.'
        rewriteTodoBtn.classList.add('rewrite-todo')
        rewriteTodoBtn.addEventListener('click', ()=>{
            rewriteTodo(currentProject, currentProject.todos[i])
            renderTodos()
        })
        delButRow.appendChild(rewriteTodoBtn)

        const deleteTodoBtn = document.createElement('button')
        deleteTodoBtn.innerText='x'
        deleteTodoBtn.classList.add('delete-todo')
        deleteTodoBtn.addEventListener('click', ()=>{
            deleteTodo(currentProject, currentProject.todos[i])
            renderTodos()
        })
        delButRow.appendChild(deleteTodoBtn)

        const todoTitle = document.createElement('h2')
        todoTitle.innerText=currentProject.todos[i].title
        todoBody.appendChild(todoTitle)

        const todoDesc = document.createElement('p')
        todoDesc.innerText=currentProject.todos[i].description
        todoBody.appendChild(todoDesc)

        const todoDate = document.createElement('p')
        todoDate.innerText=currentProject.todos[i].dueDate
        todoBody.appendChild(todoDate)

        if(currentProject.todos[i].priority===1){
            todoBody.classList.add('green-todo')
        } else if(currentProject.todos[i].priority===2){
            todoBody.classList.add('yellow-todo')
        } if(currentProject.todos[i].priority===3){
            todoBody.classList.add('red-todo')
        } 
    }
}