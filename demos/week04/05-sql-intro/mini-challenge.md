### SQL Mini-challenge


---

# Workshop: Database Foundations with Supabase SQL

In this mini-workshop, you will step into the role of a database architect. You’ll be building a **Digital Art Gallery** database using nothing but SQL commands.

##  Phase 1: Create Your Table

First, we need a place to store our data. Open the **SQL Editor** in Supabase and run the following command to create your table.

```sql
CREATE TABLE gallery (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  artist TEXT NOT NULL,
  year_created INT,
  is_on_display BOOLEAN DEFAULT true,
  price NUMERIC
);

```

---

## Phase 2: Insert Data

Now that our gallery exists, we need to add some masterpieces. Copy and run this block to populate your table:

```sql
INSERT INTO gallery (title, artist, year_created, is_on_display, price)
VALUES 
  ('Starry Night', 'Vincent van Gogh', 1889, true, 1000000),
  ('The Scream', 'Edvard Munch', 1893, false, 850000),
  ('Persistence of Memory', 'Salvador Dalí', 1931, true, 500000),
  ('The Weeping Woman', 'Pablo Picasso', 1937, true, 1200000),
  ('Sunflowers', 'Vincent van Gogh', 1888, false, 950000);

```

---

## Phase 3: The SQL Challenges

Now for the real work. Clear your editor and try to write queries to solve these four challenges.

### Challenge 1: The General Audit

> **Goal:** View every piece of information in your gallery.

* **Hint:** Use the `*` wildcard.

### Challenge 2: The Artist Spotlight

> **Goal:** Find only the works created by **'Vincent van Gogh'**.

* **Hint:** Use a `WHERE` clause with single quotes.

### Challenge 3: The Budget Hunt

> **Goal:** List the titles of all paintings that cost **less than $1,000,000**.

* **Hint:** You only need the `title` column for this one!

### Challenge 4: The Timeline

> **Goal:** List all paintings, sorted by the **year they were created** (oldest first).

* **Hint:** Use `ORDER BY` at the end of your query.

---

## Bonus Challenge (For Fast Finishers)

Can you write a query that shows only the paintings that are **currently on display** AND **cost more than $600,000**?
