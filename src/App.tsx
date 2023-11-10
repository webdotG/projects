import Header from './AllOver/Header/header'
import style from './App.module.scss'
import Todo from './componentsList/Todo/ui/todo'
function App() {

  return (
    <div className={style.content_wrapper}>
    <Header />
    <Todo />
    </div>
  )
}

export default App
