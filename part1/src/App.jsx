const App = () => {
  console.log('Hello from component')
  const now = new Date()
  const a = 10
  const b = 20

  const name = 'Peter'
  const age = 10
  return (
    <div>
      <p>Hello world, it is now {now.toString()}</p>
      <p>and all the people of the world</p>
      <h1>React is nice</h1>
      <p>
        {a} plus {b} is {a + b}
      </p>
      <Hello name="Seb"/>
      <Hello name="Vilde" age={10+13}/>
      <Hello name={name} age={age}/>
      <Hello hest="HEST" age={99}/>
    </div>
  )
}

const Hello = (props) => {
  console.log(props)
  console.log("pop1 "+props.name)
  console.log("pop1 "+props.hest)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

export default App