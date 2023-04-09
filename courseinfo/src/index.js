import React from 'react'
import ReactDOM from 'react-dom'

const Title = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Paragraph = (props) => {
  return(
    <p>{props.text} {props.part} {props.exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}/>
      <Paragraph part={part1} exercises={exercises1}/>
      <Paragraph part={part2} exercises={exercises2}/>
      <Paragraph part={part3} exercises={exercises3}/>
      <Paragraph text='Number of exercises' exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))