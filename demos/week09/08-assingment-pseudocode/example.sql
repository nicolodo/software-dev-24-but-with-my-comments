SELECT review.content, user_account.username
FROM review 
JOIN user_account 
ON review.user_id = user_account.id 
WHERE review.book_id=$1;


select review.content, user_account.username
from review
inner join user_account
on review.user_id = user_account.id
where review.book_id = ${variablename}(id of the book)