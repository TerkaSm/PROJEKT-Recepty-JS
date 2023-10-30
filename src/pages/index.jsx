import { render } from '@czechitas/render';
import { RecipeCard } from '../components/RecipeCard';
import '../global.scss';
import './index.scss';
import recipes from '../recipes.js'


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <h1 className='heading__primary'>Recepty</h1>
    </header>
    <main>

      <div className='grid'>
        {recipes.map((recipe) => {
          const { id, img, name } = recipe

          return <RecipeCard key={id} id={recipe.id} img={recipe.img} name={recipe.name} />

        })}
      </div>
      
    </main>
  </div>,
);
