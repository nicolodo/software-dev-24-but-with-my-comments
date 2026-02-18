CREATE TABLE numbers (
  number INT PRIMARY KEY,
  color TEXT
);

CREATE TABLE letters (
  letter TEXT PRIMARY KEY,
  color TEXT
);

INSERT INTO numbers (number, color) VALUES
(1, 'red'),
(2, 'purple'),
(3, 'teal');

INSERT INTO letters (letter, color) VALUES
('A', 'yellow'),
('B', 'red'),
('C', 'purple');


SELECT * FROM numbers
SELECT * FROM letters

-- I want only numbers and letters that share a colour 
SELECT * 
FROM numbers
INNER JOIN letters
ON numbers.color = letters.color

-- I want all of my numbers but only letters that match up with a colour
SELECT numbers.number, numbers.color, letters.letter
from numbers
LEFT JOIN letters
on numbers.color = letters.color

-- I want everything in both tables even if they dont have matching partners
SELECT *
from numbers
full outer join letters
on numbers.color = letters.color


-- Have a go making your own two tables and joining them together 

-- animals and species
-- windows and days cleaned (window name shared?)
-- be boring and make two random colours that share a color (fabric + designer?)
