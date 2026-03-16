
const petsList = [
    {
        name: 'Darcy',
        color: 'Brown',
        type: 'Dog'
    }, 
    {
        name: 'Bodie',
        color: 'Black and White',
        type: 'Sprocker spaniel'
    },
    {
        name: 'Panther',
        color: 'Black',
        type: 'Cat'
    },
    {
        name: 'flamingo',
        color: 'pink',
        type: 'derek'
    },
    {
        name: 'Ice',
        color: 'Black',
        type: 'Dog'
    }
]

export function GET() {
    return Response.json({pets: petsList})
}

export async function POST(request) {
    // request on its own will just be metadata

    // if you want the request.body
    const petDetails = await request.json()

    console.log(petDetails)

    petsList.push(petDetails)

    return Response.json('Added pet')
}