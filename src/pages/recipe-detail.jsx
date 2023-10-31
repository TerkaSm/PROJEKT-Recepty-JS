import { render } from '@czechitas/render';
import { RecipeDetail} from '../components/RecipeDetail';
import '../global.scss';
import './index.scss';
import { recipes } from '../recipes';


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className='heading__primary'>Recept</h1>
    </header>
    <main>

    <RecipeDetail key={recipes.id} img={recipes.img} name={recipes.name} ingredient1={recipes.ingredient1} ingredient2={recipes.ingredient2} ingredient3={recipes.ingredient3} ingredient4={recipes.ingredient4} ingredient5={recipes.ingredient5} process={recipes.process} />

    </main>
  </div>,
);
