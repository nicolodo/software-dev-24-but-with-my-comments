import Link from "next/link"
// this one will render when they're on /dogs
// to make a new page in our application, we must create a new directory in our app folder
// the name of that directory will be what your url is
// http://localhost:3030/dogs 
// it must have a page.js inside it. It must be called 'page.js'
// next.js is a lot more picky about thing

export default function Page() {
 
    const pets = [
        {
            id: 0,
            name: 'Archer',
            type: 'Husky'
        }, {
            id: 1,
            name: 'Maisie',
            type: 'Lurcher'
        }, {
            id: 2,
            name: 'Bella',
            type: 'Cocker Spaniel'
        }, {
            id: 3,
            name: 'Elsa',
            type: 'Lurcher'
        }
    ]
      return (
        <div>
          <p>This is the all dogs page:</p>
          {pets.map((pet) => {
            return (
              <div key={pet.id}>
                <Link href={`/dogs/${pet.id}`}>{pet.name}</Link>
              </div>
            )
          })}
        </div>
      ) 
}