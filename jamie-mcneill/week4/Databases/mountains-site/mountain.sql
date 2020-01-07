DROP TABLE IF EXISTS mountain;

CREATE TABLE mountain (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  location TEXT,
  height INTEGER,
  image_url TEXT
);

INSERT INTO mountain (name, location, height, image_url)
VALUES(
  'Mount Everest',
  'Nepal',
   8850,
  'https://i.imgur.com/6EdAH4n.jpg'
);

INSERT INTO mountain (name, location, height, image_url)
VALUES(
  'K2',
  'Nepal',
   8611,
  'https://i.imgur.com/5B4sotI.jpg'
);

INSERT INTO mountain (name, location, height, image_url)
VALUES(
  'Kangchenjunga',
  'Nepal',
   8586,
  'https://i.imgur.com/E55adHO.jpg'
);

SELECT * FROM mountain;
