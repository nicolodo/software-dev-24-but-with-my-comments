// react router gives us a function called 'useParams'
import { useParams } from "react-router";
import { findPlant } from "../plantInfo";

export default function IndividualPlantPage() {
  const { id } = useParams();

  const plantDetails = findPlant(id);

  console.log(plantDetails);
  return (
    <section>
      <p>This is a page for single plants information</p>

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
