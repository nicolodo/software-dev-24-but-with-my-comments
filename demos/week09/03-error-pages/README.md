
----- This lesson covers Error Pages

----- Used/Modified/Added pages for this lesson
A
/app/books
/app/error.js
M
/app/page.js // + <TextHightlight/> & <CausesError/>
/app/layout.js // links to home and books page
A
/components/CausesError.jsx
/components/TextHighlight.jsx

----- Nicolas's changes
If you want to use the books route properly 
setup a .env file with to a db containing a "books" table
which has an "id" "title" & "author" & "img_url" column.

    --- Tangent
sql
CREATE TABLE books(
	id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
	title TEXT,
	author TEXT,
	img_url TEXT
);

INSERT INTO books (title, author, img_url) VALUES
('The Great Gatsby', 'F. Scott Fitzgerald', 'https://picsum.photos/seed/gatsby/300/400'),
('The Pragmatic Programmer', 'Andrew Hunt', 'https://picsum.photos/seed/pragmatic/300/400'),
('1984', 'George Orwell', 'https://picsum.photos/seed/1984/300/400'),
('Clean Code', 'Robert C. Martin', 'https://picsum.photos/seed/cleancode/300/400'),
('The Hobbit', 'J.R.R. Tolkien', 'https://picsum.photos/seed/hobbit/300/400'),
('Eloquent JavaScript', 'Marijn Haverbeke', 'https://picsum.photos/seed/eloquent/300/400');

https://picsum.photos/
A self described Lorem Ipsum for photos