INSERT INTO houser (
    name, 
    address, 
    city, 
    state,
    zipcode, 
    image_url, 
    monthly_mortgage, 
    monthly_rent)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8);

SELECT * FROM houser