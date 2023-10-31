import { render } from '@czechitas/render';
import { RecipeDetail} from '../components/RecipeDetail';
import '../global.scss';
import './index.scss';
import { recipes } from '../recipes';

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const recipe = recipes.find(recipe => recipe.id === parseInt(id, 10));

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className='heading-primary'>Recept</h1>
    </header>
    <main>
      <RecipeDetail key={recipe.id} img={recipe.img} name={recipe.name} ingredient1={recipe.ingredient1} ingredient2={recipe.ingredient2} ingredient3={recipe.ingredient3} ingredient4={recipe.ingredient4} ingredient5={recipe.ingredient5} process={recipe.process} />
    </main>
  </div>,
);
