import Header from './AllOver/Header/header'
import Todo from './componentsList/Todo/ui/todo'
// import useOutsideClick from './Hook/clickOutSide';
import style from './App.module.scss'
import { useState } from 'react';


function App() {
  const [isActive, setIsActive] = useState(false);
  // const { ref } = useOutsideClick(false);

  const handleButtonClick = () => {
    window.alert('111111111111111');
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
            <div className={`${isActive ? style.item__active : style.item}`}>  
               <button className={style.item_btn}
            onClick={handleButtonClick}>закрыть</button>
              <Todo />
              <button className={style.item_btn}
            onClick={handleButtonClick}>закрыть</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}

export default App
