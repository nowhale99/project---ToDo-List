let projectArr = []

let usedIds = 1

function projectFactory(name, todos, id, state){
    return {name, todos, id, state}
}

projectArr.push(projectFactory('Default project', {todo1: 'wake up'}, usedIds, true))
usedIds+=1
console.log(projectArr)

function addProject(){
    for(let i = 0; i<projectArr.length; i++){
        projectArr[i].state=false
    }
    const newProject = projectFactory(prompt('Project Title:'), {}, usedIds, true)
    projectArr.push(newProject)
    usedIds+=1
    console.log(projectArr)
}
function deleteProject(projectId){
    const freshArr = projectArr.filter((element)=>element.id!=projectId)
    
    for(let i=0; i<freshArr.length; i++){
        if(i===0){
            freshArr[i].state=true
        }else{
            freshArr[i].state=false
        }
    }
    projectArr = freshArr
}




function todoFactory(title, description, dueDate, priority){
    return {title, description, dueDate, priority}
}


function addTodo(){
    if(projectArr.length===0){
        alert('Add at least one project to create todo in it')
    }
}





export {projectArr, addProject, deleteProject, addTodo}