import React, {  } from 'react'
import { useDispatch } from 'react-redux'
// Import our toggleTimer action
import { toggleTimer, deleteTimer } from '../actions/index'
import './TimerView.css'
import { formatTime } from '../utils/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default function TimerView(props) {
  // Extract these specific props to use in the component
  const { index, timer } = props
  const dispatch = useDispatch()

  return (
      <div className="TimerView">
        <button className='DelButton' onClick={() => dispatch(deleteTimer(index))}>
          <FontAwesomeIcon icon={faTrashAlt}/>
        </button>
        <h2>{timer.name}</h2>
        <h1>{formatTime(timer.time)}</h1>
        <button
          className='ToggleButton'
          onClick={() => dispatch(toggleTimer(index))}
        >
          {timer.isRunning ? "Stop" : "Start"}
        </button>
      </div>
  )
}