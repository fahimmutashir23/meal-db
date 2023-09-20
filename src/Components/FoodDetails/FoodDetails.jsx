import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";


const FoodDetails = () => {

    const foodDetails = useLoaderData();
    // console.log(foodDetails.meals);
    return (
        <div>
            <div>
                {
                    foodDetails.meals.map((mealDetails, idx) => <Meal key={idx} mealDetails={mealDetails}></Meal>)
                }
            </div>
        </div>
    );
};

export default FoodDetails;