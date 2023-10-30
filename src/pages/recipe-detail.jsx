import { render } from '@czechitas/render';
import { RecipeDetail} from '../components/RecipeDetail';
import '../global.scss';
import './index.scss';


// const recipe = bodyOfResult.result


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className='heading__primary'>Recept</h1>
    </header>
    <main>

    <RecipeDetail key={recipe.id} img={recipe.img} name={recipe.name} ingredient1={recipe.ingredient1} ingredient2={recipe.ingredient2} ingredient3={recipe.ingredient3} ingredient4={recipe.ingredient4} ingredient5={recipe.ingredient5} process={recipe.process} />

    </main>
  </div>,
);
