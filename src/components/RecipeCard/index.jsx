import './style.scss';
import { recipes } from '../../recipes';

export const RecipeCard = ({ id, img, name }) => (
    <div className='RecipeCard' key={id}>
        <figcaption className='RecipeCard__fig'>
        <img className='RecipeCard__img' width='333' src={recipes.img} alt={recipes.name} />
        </figcaption>
        <p className='RecipeCard__name'>{recipes.name}</p>
        <div className='RecipeCard__buttons'>
            <a className='button' href={`recipe-detail.html?id=${recipes.id}`}>Uvařit</a>
        </div>
    </div>
)