import { projectArr } from "./logic.js"
import { deleteProject } from "./logic.js"

export function renderProjects(){

    document.getElementById('projects').innerHTML=''

    for(let i = 0; i<projectArr.length; i++){
        const project = document.createElement('div')
        project.classList.add('project')
        project.innerText=projectArr[i].name
        if(projectArr[i].state===true){
            project.classList.add('current-project')
        }else{
            project.classList.remove('current-project')
        }
        document.getElementById('projects').appendChild(project)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerText='x'
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click', ()=>{
            deleteProject(projectArr[i].id)
            document.getElementById('projects').removeChild(project)
            renderProjects()
            console.log(projectArr)})
            
        project.appendChild(deleteBtn)
    }
    


    document.getElementById('grid').innerHTML=''
}