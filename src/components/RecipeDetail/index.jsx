import './style.scss';

export const RecipeDetail = ({ id, img, name, ingredient1, ingredient2, ingredient3, ingredient4, ingredient5, process }) => (
    <div className='RecipeDetail' key={id}>
      <div className='RecipeDetail__flex'>
        <figcaption className='RecipeDetail__fig'>
          <img className='RecipeDetail__img' width='360' src={img} alt={name} />
        </figcaption>
        <div className='RecipeDetail__'>
          <h1 className='heading-secondary'>{name}</h1>
          <p className='RecipeDetail__'>Seznam surovin:</p>
          <ul className='RecipeDetail__'>
            <li className='RecipeDetail__'>{ingredient1}</li>
            <li className='RecipeDetail__'>{ingredient2}</li>
            <li className='RecipeDetail__'>{ingredient3}</li>
            <li className='RecipeDetail__'>{ingredient4}</li>
            <li className='RecipeDetail__'>{ingredient5}</li>
          </ul>
        </div>
      </div>
      <p className='RecipeDetail__'>{process}</p>
      <div>
          <p><a className='button' href="index.html">Zpět</a></p>
    </div>
  </div>
)

