

-- Write a JOIN to get an animal and its habitats in an array
select animals.*, array_agg(habitats.type) as habitats
                from animals
                left join animals_habitats 
                on animals.id = animals_habitats.animal_id
                inner join habitats
                on animals_habitats.habitat_id = habitats.id
                where animals.id = $1
                group by animals.id



-- A join to get all animal details and all habitat details (habitats as an array of ojbect)
select animals.*, array_agg(
    json_build_object(
        'id', habitats.id,
        'type', habitats.type,
        'description', habitats.description,
        'complexity', habitats.complexity
    )
    ) as habitats
                from animals
                left join animals_habitats 
                on animals.id = animals_habitats.animal_id
                inner join habitats
                on animals_habitats.habitat_id = habitats.id
                where animals.id = $1
                group by animals.id