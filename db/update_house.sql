UPDATE houser SET
name = $2,
address = $3,
city = $4,
state = $5,
zipcode = $6,
image_url = $7,
monthly_rent = $8,
monthly_mortgage = $9
WHERE id = $1;