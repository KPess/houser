INSERT INTO houser (
    name, 
    address, 
    city, 
    zipcode, 
    image_url, 
    monthly_morgage, 
    rent)
VALUES ($1, $2, $3, $4, $5, $6, $7);

SELECT * FROM houser