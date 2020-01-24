DROP TABLE IF EXISTS musicians;

CREATE TABLE musicians(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year_active INTEGER,
  hometown TEXT,
  labels TEXT,
  occupations TEXT,
  still_active BOOLEAN,
  image_url TEXT
);

INSERT INTO musicians (name, year_active, hometown, labels, occupations, still_active, image_url)
  VALUES (
    'Aaron Pointer',
    28,
    'Los Angeles, Califonia, US',
    'Rhymesayers Entertainment',
    'Rapper',
    1,
    'https://i.ytimg.com/vi/4R_bsTIjEj8/maxresdefault.jpg'
  );

INSERT INTO musicians (name, year_active, hometown, labels, occupations, still_active, image_url)
  VALUES (
    'Big Boi',
    28,
    'Savannah, Georgia, US',
    'Purple Ribbon',
    'Rapper.songwriter.actor.record producer',
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/BigBoi.jpg/220px-BigBoi.jpg'
  );

INSERT INTO musicians (name, year_active, hometown, labels, occupations, still_active, image_url)
  VALUES (
    'Common',
    29,
    'Chicago, IIIinois, US',
    'Loma Vista',
    'Rapper.actor.writer.activist.philanthropist',
    1,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Common_-_Ilosaarirock_2008.jpg/220px-Common_-_Ilosaarirock_2008.jpg'
  );

SELECT * FROM musicians;
