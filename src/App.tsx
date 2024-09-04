import './App.css'
import MyButton from './components/MyButton'
import Counter from './components/Counter'
import Book from './components/Book'
import Form from './components/Form'
import {useCounter} from './provider/Counter'

function App() {

  const context = useCounter();

  return (
    <div className='App'>
      <MyButton text='click me' />
      <MyButton onClick={() => alert('user registered successfully')} text='Register'/>
      <MyButton onClick={() => alert('user logged in successfully')} text='Login'/>

      {/* counter component */}
      <Counter></Counter>
      {/* book components */}
      <Book></Book>
      {/* form component */}
      <Form />

      {/* // also see main.tsx file */}
      <button onClick={() => context?.setCount(context?.value + 1)}>Counter : {context?.value}</button>


    </div>
  )
}

export default App