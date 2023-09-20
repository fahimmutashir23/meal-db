import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";


const Foods = () => {

    const food = useLoaderData();

    return (
        <div className="max-w-6xl mx-auto mt-10 px-2">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {
                food.meals.map((meal, idx) => <Food key={idx} meal={meal}></Food>)
            }
            </div>
        </div>
    );
};



export default Foods;