import { Link } from "react-router"
import { plants } from "../plantInfo"
export default function PlantsPage() {

    return (
        <section>
            {plants.map(plant => (
                <div key={plant.id}>
                    <Link to={`/plants/${plant.id}`}>{plant.name}</Link>
                </div>
            ))}
        </section>
    )
}