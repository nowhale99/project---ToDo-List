let projectArr = []

let usedIds = 1

function projectFactory(name, todos, id, state){
    return {name, todos, id, state}
}

projectArr.push(projectFactory('Default project', [], usedIds, true))
usedIds+=1

function addProject(){
    for(let i = 0; i<projectArr.length; i++){
        projectArr[i].state=false
    }
    const newProject = projectFactory(prompt('Project Title:'), [], usedIds, true)
    projectArr.push(newProject)
    usedIds+=1
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

function changeProject(arg){
    for(let i=0; i<projectArr.length; i++){
        if(projectArr[i].id!==arg){
            projectArr[i].state=false
        }else{
            projectArr[i].state=true
        }
    }
}










function todoFactory(title, description, dueDate, priority){
    return {title, description, dueDate, priority}
}


function addTodo(){
    if(projectArr.length===0){
        alert('Add at least one project to create todo in it')
    }else{
        const currentProject = projectArr.find(element=>element.state===true)
        currentProject.todos.push(
            
            todoFactory(prompt('Title'), prompt('Description'), prompt('Due Date'), (function(){
            let userPriority = Number(prompt('Priority'))
            if(userPriority<1){
                userPriority=1
            } else if(userPriority>3){
                userPriority=3
            }
            return userPriority
        }()))
        
        )

    }
}

function rewriteTodo(currentProject, currentTodo){
    let oldTodo = currentProject.todos.find((todo)=>todo===currentTodo)
    oldTodo.title=prompt('Title')
    oldTodo.description=prompt('Description')
    oldTodo.dueDate=prompt('Due Date')
    oldTodo.priority = (function(){
        let userPriority = Number(prompt('Priority'))
        if(userPriority<1){
            userPriority=1
        } else if(userPriority>3){
            userPriority=3
        }
        return userPriority
    }())
}


function deleteTodo(currentProject ,currentTodo){
    currentProject.todos=currentProject.todos.filter((todo)=>todo!=currentTodo)
}





export {projectArr, addProject, deleteProject, changeProject, addTodo, deleteTodo, rewriteTodo}