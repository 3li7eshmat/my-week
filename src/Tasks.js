import { useEffect, useState } from "react"

function TaskForm(props) {
    const [task, setTask] = useState([''])

    const handleChange = (e) => {
        setTask([e.target.value])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAdd(task)
        props.onDelete()
        setTask([''])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="enter your task" value={task} onChange={handleChange}/>
            <button >Submit</button>
        </form>
    )
}

function TaskList(props) {
    return (
        <div>
            {props.tasks && props.tasks.map((task, index) => (
                <div className="task" key={index}>
                    <label>{task}</label>
                    <input type="checkbox" />
                </div>
            ))}
        </div>
    )
}

function Tasks() {
    const [plus, setPlus] = useState(false)
    const [allTasks, updateAllTasks] = useState([])

    const addTasks = (task) => {
        updateAllTasks([...allTasks, task])
        localStorage.setItem('tasks', JSON.stringify(allTasks, task))

    }

    const deleteForm = () => {
        setPlus(false)
    }

    useEffect(() => {
        const tasksFromLocalStorage = localStorage.getItem('tasks');
        if (tasksFromLocalStorage) {
          updateAllTasks(JSON.parse(tasksFromLocalStorage));
          console.log('done')
        }
    }, []);

    const handlePlus = () => {
        setPlus(true)
    }
    // localStorage.clear()

  return (
    <div className="tasks">
        {plus && <TaskForm onAdd={addTasks} onDelete={deleteForm}/>}
        <TaskList tasks={allTasks} />
        <div>
            <button onClick={handlePlus}>+</button>
        </div>
    </div>
  )
}

export default Tasks