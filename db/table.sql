DROP TABLE IF EXISTS houser;

CREATE TABLE houser
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(120),
  city VARCHAR(120),
  state VARCHAR(20),
  zipcode INT,
  image_url TEXT,
  monthly_rent INT,
  monthly_mortgage INT
);

INSERT INTO houser
(
  name,
  city,
  state,
  zipcode,
  image_url,
  monthly_rent,
  monthly_mortgage
)
VALUES
('Mansion', 'Dallas', 'Texas', 75254, 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Mansion-4.jpg', 4000, 3000),
('Mansion', 'Denver', 'Colorado', 80525, 'https://upload.wikimedia.org/wikipedia/commons/1/15/Creswell_Mansion.JPG', 5000, 4000);




DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  is_admin BOOLEAN default false,
  username VARCHAR(120),
  hash text
);

INSERT INTO users
(is_admin, username, hash)
VALUES
(true, 'Trogdor', '$2a$10$wZUxoi7vsBOeHK3zhiY4H.Nc5WvuyukqmsGjat9XMGl40w3/RhdiW'),
(true, 'Blackbeard', '$2a$10$KFR1RUO0JiFtCoux3mnJaemV6Ifnk0BOTdjm/VWh.uOZ97pD3X1Re'),
(false, 'Skallywag', '$2a$10$dgo.HRAecEhFl8L0h.lJM.OeM2t8y5Pi3AmiBlfCXUIIS/PUtfwd.');



DROP TABLE IF EXISTS treasures;
CREATE TABLE treasures
(
  id SERIAL PRIMARY KEY,
  image_url varchar(120),
  user_id int
);

INSERT INTO treasures
(image_url, user_id)
VALUES
('http://www.theholidayspot.com/easter/treasure_hunt/images/treasure-chest.png', 1),
('https://comps.canstockphoto.com/opened-treasure-chest-with-treasures-illustration_csp15511126.jpg', 2),
('https://vignette.wikia.nocookie.net/politicsandwar/images/d/d9/Treasure.jpg/revision/latest?cb=20170515133205', 3);