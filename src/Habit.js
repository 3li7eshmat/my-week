import React, { useState, useEffect } from 'react'

const Input = ({ index }) => {
    const [checkedInputs, setCheckedInputs] = useState([false, false, false, false, false, false, false]);
  
    useEffect(() => {
      const localStorageCheckedInputs = localStorage.getItem('checkedInputs');
      if (localStorageCheckedInputs) {
        setCheckedInputs(JSON.parse(localStorageCheckedInputs));
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem('checkedInputs', JSON.stringify(checkedInputs));
    }, [checkedInputs]);
  
    return (
      <div>
        <input
          type="checkbox"
          checked={checkedInputs[index]}
          onChange={(event) => setCheckedInputs((prevCheckedInputs) => {
            prevCheckedInputs[index] = event.target.checked;
            return prevCheckedInputs;
          })}
        />
      </div>
    );
  };


function Habit(props) {
  return (
    <div className="habit">
        <h3>{props.name}</h3>
        <div className="checkboxes">
            <div>
                <label>Sat</label>
                <Input index={0} />
            </div>
            <div>
                <label>Son</label>
                <Input index={1} />
            </div>
            <div>
                <label>Mon</label>
                <Input index={2} />
            </div>
            <div>
                <label>Tue</label>
                <Input index={3} />
            </div>
            <div>
                <label>Wed</label>
                <Input index={4} />
            </div>
            <div>
                <label>Thu</label>
                <Input index={5} />
            </div>
            <div>
                <label>Fri</label>
                <Input index={6} />
            </div>
        </div>
    </div>
  )
}

export default Habit