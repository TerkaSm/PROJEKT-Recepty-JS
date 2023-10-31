import './style.scss';
import { recipes } from '../../recipes';

export const RecipeCard = ({ id, img, name }) => (
    {recipes.map(recipe => (
        <div className='RecipeCard' key={id}>
        <figcaption className='RecipeCard__fig'>
        <img className='RecipeCard__img' width='333' src={img} alt={name} />
        </figcaption>
        <p className='RecipeCard__name'>{name}</p>
        <div className='RecipeCard__buttons'>
            <a className='button' href={`recipe-detail.html?id=${id}`}>Uvařit</a>
        </div>
    </div>
    ))}
)