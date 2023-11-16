import Header from './AllOver/Header/header'
import Todo from './componentsList/Todo/ui/todo'
// import useOutsideClick from './Hook/clickOutSide';
import style from './App.module.scss'
import { useState } from 'react';
// import { Link } from 'react-router-dom';


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
          <p>site for rental of construction equipment</p>
          <p>mobile & desktop</p>
          <p>React, Vite, ReduxToolkit, Axios, Firebase, TS, Sass</p>
          <a href='https://webdotg.github.io/Rental/' target="_blank">open site</a>
        </li>
        <li className={style.item_wrapper}>
          <h3>Grant booking hotel</h3>
          <p>site for booking </p>
          <p>desktop</p>
          <p>React, Vite, ReduxToolkit, Axios, TS, Sass</p>
          <a href='https://webdotg.github.io/six_citise/' target="_blank">open site</a>
        </li>
        <li className={style.item_wrapper}>
          <h3>List "item/todo"</h3>
          <p></p>
          <p>React, Vite, AsyncThunk, Fetch</p>
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
