DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  height_m INTEGER,
  range TEXT,
  parent_mountain TEXT,
  first_ascended INTEGER,
  country TEXT,
  image_url TEXT
);

INSERT INTO mountains (name, height_m, range, parent_mountain, first_ascended, country, image_url)
  VALUES (
    'Mount Everst',
    8848,
    'Mahalangur Himalaya',
    'None',
    1953,
    'Nepal & China',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Everest_kalapatthar.jpg/400px-Everest_kalapatthar.jpg'
  );

INSERT INTO mountains (name, height_m, range, parent_mountain, first_ascended, country, image_url)
  VALUES (
    'K2',
    8611,
    'Baltoro Karakoram',
    'Mount Everst',
    1954,
    'Pakistan & China',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/270px-K2_2006b.jpg'
  );

INSERT INTO mountains (name, height_m, range, parent_mountain, first_ascended, country, image_url)
  VALUES (
    'Kangchenjunga',
    8586,
    'Kangchenjunga Himalaya',
    'Mount Everst',
    1955,
    'Nepal & China',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Kanchenjunga_from_Tiger_Hills.JPG/270px-Kanchenjunga_from_Tiger_Hills.JPG'
  );

SELECT * FROM mountains;
