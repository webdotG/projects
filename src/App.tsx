import Header from './AllOver/Header/header'
import Todo from './componentsList/Todo/ui/todo'
// import useOutsideClick from './Hook/clickOutSide';
import style from './App.module.scss'
import { useState} from 'react';


function App() {
  const [isActive, setIsActive] = useState(false);
  // const { ref } = useOutsideClick(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
   
  };
  
  const handleButtonClickClose = () => {
    setIsActive(!isActive);
    console.log('test')
  };

//   useEffect(() => {
//     window.scroll(0, 0);
// }, []);
  console.log(isActive)

  return (
    <div className={style.content_wrapper}>
      <Header />
      <ul className={style.item_list}>
        <li className={style.item_wrapper}>
        <h3>Grant Rental</h3>
        <p>ui для аренды строительной техники</p>
        </li>
        <li className={style.item_wrapper}>
          <h3>todo list</h3>
          <p>программа для создания задач</p>
          <button className={style.item_btn}
            onClick={handleButtonClick}>показать</button>
          {isActive && (
            <div className={`${isActive ? style.item__active : style.item}`}>  
               <button className={style.item_btn}
            onClick={handleButtonClickClose}>закрыть</button>
              <Todo />
              <button className={style.item_btn}
            onClick={handleButtonClickClose}>закрыть</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}

export default App
