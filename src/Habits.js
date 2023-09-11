import { useState, useEffect } from "react"
import Habit from './Habit'

function HabitForm(props) {
  const [habit, setHabit] = useState([''])

  const handleChange = (e) => {
      setHabit([e.target.value])
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      props.onAdd(habit)
      props.onDelete()
      setHabit([''])
  }

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" placeholder="enter your habit" value={habit} onChange={handleChange}/>
          <button >Submit</button>
      </form>
  )
}

function HabitsList(props) {
  return (
      <div>
          {props.habits && props.habits.map((habit, index) => (
              <Habit key={index} name={habit} />
          ))}
      </div>
  )
}

function Habits() {
  const [plus, setPlus] = useState(false)
  const [allHabits, updateAllHabits] = useState([])

  const handlePlus = () => {
    setPlus(true)
  }

  const addHabit = (habit) => {
    updateAllHabits([...allHabits, habit])
    localStorage.setItem('habits', JSON.stringify(allHabits))
  }

  useEffect(() => {
    const habitsFromLocalStorage = localStorage.getItem('habits');
    if (habitsFromLocalStorage) {
      updateAllHabits(JSON.parse(habitsFromLocalStorage));
      console.log('done')
    }
  }, []);

  const deleteFrom = () => {
    setPlus(false)
  }

    // localStorage.clear()

  return (
    <div className="habits">
        

      {plus && <HabitForm onAdd={addHabit} onDelete={deleteFrom}  />}
      <HabitsList habits={allHabits} />
      <button onClick={handlePlus}>+</button>
    </div>

  
  )
}

export default Habits