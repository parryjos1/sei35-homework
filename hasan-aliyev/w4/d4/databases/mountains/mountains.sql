DROP TABLE IF EXISTS mountains;  -- nuke the table! start again

CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- take care of IDs for us
  name TEXT,
  description TEXT,
  snow BOOLEAN,
  heigth INTEGER,
  age INTEGER,
  image_url TEXT
);

INSERT INTO mountains ( name, description, snow, heigth, age, image_url )
  VALUES (
    'K2',
    'Second Highest in the World',
    1,
    8611,
    2500000,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/K2_2006b.jpg/1200px-K2_2006b.jpg'
  );

  INSERT INTO mountains ( name, description, snow, heigth, age, image_url )
  VALUES (
    'Elbrus',
    'Highest in Europe',
    1,
    5642,
    6500000,
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount_Elbrus_May_2008.jpg/1200px-Mount_Elbrus_May_2008.jpg'
  );

  INSERT INTO mountains ( name, description, snow, heigth, age, image_url )
  VALUES (
    'Aconcagua',
    '6962',
    'Highest mountain outside of Asia',
    1,
    6962,
    5500000,
    'https://media.nationalgeographic.org/assets/photos/634/509/2fbc3744-ebf2-42cc-8486-84492f0b829d.jpg'
  );


  SELECT * FROM mountains;
