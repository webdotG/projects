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
    window.scroll(0,0)
    console.log('test')
  };

  console.log(isActive)

  return (
    <div className={style.content_wrapper}>
      <Header />
      <ul className={style.item_list}>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant Rental</h3>
          <p className={style.item_description}>Site for rental of construction equipment</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, Axios, Firebase, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/Rental/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>6sites booking hotel</h3>
          <p className={style.item_description}>Site for booking hotel, at the moment only desktop version</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, Axios, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/six_citise/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant airport</h3>
          <p className={style.item_description}>site the airport</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, RTKQuery, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/airport/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Favorite add</h3>
          <p className={style.item_description}>programm for adding favorite item, used an open source api Github</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, RTKQuery, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/favorite_add/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>List item add</h3>
          <p className={style.item_description}>item AsyncThunk add</p>
          <p className={style.item_stack}>TS, React, Vite, AsyncThunk, Fetch</p>
          <button className={style.item_link}
            onClick={handleButtonClick}>Open</button>
          {isActive && (
            <div className={`${isActive ? style.item__active : style.item}`}>
              <button className={style.item_link}
                onClick={handleButtonClickClose}>Close</button>
              <Todo />
              <button className={style.item_link}
                onClick={handleButtonClickClose}>Close</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  )
}

export default App
