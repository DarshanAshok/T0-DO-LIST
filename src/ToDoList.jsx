import React, {useState}  from 'react'

function ToDoList(){


    const[tasks, setTasks]= useState(["Eat Breakfast", "Take a shower", "walk the dog"]);
    const[newTask, setNewTask]= useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskDown(index){

    }

    return(
    <div className='to-do-list'>
   
       <h1>To-Do-List</h1>

       <div>
        <input type="text" 
        placeholder="Enter a Task........"
        value={newTask}
        onChange={handleInputChange}/>
        <button className="add-button"
        onClick={addTask}>
            Add 
        </button>
       </div>

       <ol>
         {tasks.map((task, index) =>
           <div className = "Task" key={index}>
            <div style={{width: '300px', height: '50px', marginTop: '15px'}}>
                <span className="text">{task}</span>
                </div>
                <div>
                <button className="delete-button"
                 onClick={() => deleteTask(index)}>
                ❌ 
               </button>

               <button className="move-button"
                 onClick={() => moveTaskUp(index)}>
                 👆
               </button>

               <button className="move-button"
                 onClick={() => moveTaskDown(index)}>
                 👇
               </button>
               </div>
           </div>
     )}
       </ol>



    </div>)
}

export default ToDoList