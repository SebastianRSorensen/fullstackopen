const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={[part1.name,part2.name, part3.name]} points={[part1.exercises, part2.exercises, part3.exercises]}/>
      <Total total={part1.exercises+part2.exercises+part3.exercises} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log("PROPS "+props.parts)
  const t = props.parts/* 
  const m1 = t.map(value => value*2)
  console.log("RES "+m1) */
  const m2 = t.map(value => '<p>' + value + '</p>')
  console.log(m2)  
  const [fst, ...rest] = t
  console.log(fst)
  console.log(rest)
  return(
    <div>
      <Part part={props.parts[0]} points={props.points[0]}/>
      <Part part={props.parts[1]} points={props.points[1]}/>
      <Part part={props.parts[2]} points={props.points[2]}/>      
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part} {props.points}</p>
    </div>
  )
}


const Total = (props) => {
  console.log(props)
  return(
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

export default App