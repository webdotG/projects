import style from './header.module.scss'

function Header() {

  return (
    <header className={style.header_wrapper}>
    <h1>webDotG</h1>
    <a href='https://t.me/KirillGrant'>telegram: @KirillGrant</a>
    <a href='tel:+79022888989'>phone number: +79022888989</a>
    </header>
  )
}

export default Header
