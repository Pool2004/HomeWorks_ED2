import './App.css'


function App({value}) {

  const handleAdd = () => {
    console.log('calling HadleAdd');
  }

  

  return(
  <>
    <h1>Counter</h1>
    <span>{value}</span>
    <button onClick={() => handleAdd()}></button>

  </>
  )
}

export default App

