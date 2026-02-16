// react router gives us a function called 'useParams'
import { useParams, Outlet } from "react-router";
import { findPlant } from "../plantInfo";

export default function IndividualPlantPage() {
  const { id } = useParams();

  const plantDetails = findPlant(id);

  console.log(plantDetails);
  return (
    <section>
      <p>This is a page for single plants information</p>
      {/* outlet is a placeholder for if the user goes to a nested route - like /plants/1/photos - we'll display that extra element where the outlet is */}
      <Outlet />
      {plantDetails ? (
        <div>
          <p>{plantDetails.name}</p>
          <img src={plantDetails.image} />
          <p>{plantDetails.description}</p>
        </div>
      ) : (
        <p>Couldn't find a plant with the id {id}</p>
      )}
    </section>
  );
}
