import { addProject } from "./logic.js"
import { renderProjects } from "./renderProjects.js"

import { addTodo } from "./logic.js"
import { renderTodos } from "./renderTodos.js"

const container = document.getElementById('container')

export function initialPage(){

    const h1 = document.createElement('h1')
    h1.innerText='To do do dooo list'
    container.appendChild(h1)

    const projects = document.createElement('div')
    projects.classList.add('projects')
    projects.id='projects'
    container.appendChild(projects)

    const main = document.createElement('div')
    main.classList.add('main')
    container.appendChild(main)


    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    main.appendChild(buttons)

    const but1 = document.createElement('button')
    but1.innerText='Add Todo'
    but1.classList.add('displayBtn')
    but1.addEventListener('click', ()=>{
        addTodo()
        renderTodos()
    })
    buttons.appendChild(but1)

    const but2 = document.createElement('button')
    but2.innerText='Add Project'
    but2.classList.add('displayBtn')
    but2.addEventListener('click', ()=>{
        addProject()
        renderProjects()})
    buttons.appendChild(but2)


    const grid = document.createElement('div')
    grid.classList.add('todo-grid')
    grid.id='grid'
    main.appendChild(grid)
    renderProjects()
}