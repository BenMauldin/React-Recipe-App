const Recipe = ({title, calories, imgSrc, ingredients}) => (
    <div className="recipe">
        <h1>{title}</h1>
        <ol>
            {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
        </ol>
        <p>Calories: {calories}</p>
        <img src={imgSrc} alt="" />
        
    </div>
);

export default Recipe;