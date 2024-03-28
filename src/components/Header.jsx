import img from '../../public/logo.jpg'
import Button from './UI/Button'

export default function Header({number}) {
  return (
    <section id='main-header'>
      <div id='title'>
        <img src={img} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <Button textOnly>Cart ({number})</Button>
    </section>
  )
}
