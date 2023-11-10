import Header from './AllOver/Header/header'
import Todo from './componentsList/Todo/ui/todo'
import useOutsideClick from './Hook/clickOutSide';
import style from './App.module.scss'


function App() {

  const { ref, isActive, setIsActive } = useOutsideClick(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
  };

  console.log(isActive)

  return (
    <div className={style.content_wrapper}>
      <Header />
      <ul className={style.item_list}>
        <li className={style.item_wrapper}>
          <h3>todo list</h3>
          <p>программа для создания задач</p>
          <button className={style.item_btn}
            onClick={handleButtonClick}>показать</button>
          {isActive && (
            <div ref={ref} className={`${isActive ? style.item__active : style.item}`}>
              <Todo />
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}

export default App
