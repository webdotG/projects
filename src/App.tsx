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
    window.scroll(0, 0)
    console.log('test')
  };

  console.log(isActive)

  return (
    <div className={style.content_wrapper}>
      <Header />
      <ul className={style.item_list}>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>webDotG telegram bot</h3>
          <p className={style.item_description}>Now, he's just a baby, but he's growing up and <br />soon he'll be able to get and sell you anything.</p>
          <p className={style.item_stack}>JS, Reacrt, NodeJs</p>
          <a className={style.item_link} href='https://github.com/webdotG/webDotGBot' target="_blank">open<p>git page code</p></a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant Blog (frontend)</h3>
          <p className={style.item_description}>_, _, _, _, _, _</p>
          <p className={style.item_stack}>JS, Reacrt, Router Dom, Axios, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/FullStackUI/' target="_blank"><p>open</p></a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant Blog (backend)</h3>
          <p className={style.item_description}>ExpressJS basic CRUD setup</p>
          <p className={style.item_description}>User: Register, Login, Getme</p>
          <p className={style.item_description}>Item: GetAll, GetOne, Create, Update, Remove</p>
          <p className={style.item_stack}>JS, ExpressJS, CRUD, JWT, MongoDB</p>
          <a className={style.item_link} href='https://github.com/webdotG/FullStack' target="_blank">open<p>git page code</p></a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant Rental</h3>
          <p className={style.item_description}>Site for rental of construction equipment</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, Axios, Firebase, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/Rental/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>6sites booking hotel</h3>
          <p className={style.item_description}>Site for booking hotel (at the moment only desktop version)</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, Axios, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/six_citise/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Search and add favorite repositories</h3>
          <p className={style.item_description}>programm for adding favorite item, used an open source api Github</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, RTKQuery, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/favorite_add/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant airport</h3>
          <p className={style.item_description}>site the airport (in progress, at the moment only desktop version)</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, Json server, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/airport/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>Grant webDotG</h3>
          <p className={style.item_description}>personal work website (in progress, at the moment only desktop version)</p>
          <p className={style.item_stack}>TS, React, Vite, ReduxToolkit, Sass</p>
          <a className={style.item_link} href='https://webdotg.github.io/webDotG_2/' target="_blank">open</a>
        </li>
        <li className={style.item_wrapper}>
          <h3 className={style.item_title}>NestJS basic setup notes</h3>
          <p className={style.item_description}>cheat sheet</p>
          <p className={style.item_stack}>TS, NestJS, MongoDB</p>
          <a className={style.item_link} href='https://github.com/webdotG/Nest_js' target="_blank">open<p>git page code</p></a>
        </li>
        {/* <li className={style.item_wrapper}>
          <h3 className={style.item_title}>RTK Query basic setup notes</h3>
          <p className={style.item_description}>cheat sheet</p>
          <p className={style.item_stack}>JS, React, Vite, RTK Query, JSON placeholder</p>
          <a className={style.item_link} href='https://webdotg.github.io/RTKQuery_basicSetup/' target="_blank"><p>open</p></a>
        </li> */}
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
    </div >
  )
}

export default App
