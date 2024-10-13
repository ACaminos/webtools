//React Router Dom
import { useParams } from 'react-router-dom';

// Styles
import '../styles/PageHero.css'

export const PageHero = () => {
    const { category } = useParams()
    const hero = 'https://perfectdailygrind.com/wp-content/uploads/2019/02/bussy-coffee-shop.jpg';
  return (
    <section className="heroSection overlay" style={ { backgroundImage:`url( ${ hero } )`} }>
        <h1 className='title'>{ category }</h1>
    </section>
  )
}
