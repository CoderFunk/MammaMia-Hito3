import CardPizza from './CardPizza'
import Header from './Header';
import { pizzas } from '../data/pizzas'


const Home = () => {
  // console.log(pizzas);

  return (
    <div>
      <Header></Header>

      <div className="container jc-center">
          <div className="row jc-center-card">
            {pizzas.map((pizza) => {
              return (
                <CardPizza 
                key={pizza.id}
                nombre={pizza.name}
                precio={pizza.price}
                ingredientes={pizza.ingredients}
                imagen={pizza.img}
                />
              )
            })}
          </div>
      </div>
    </div>
  )
}

export default Home;