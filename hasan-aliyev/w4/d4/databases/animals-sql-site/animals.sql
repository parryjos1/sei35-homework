DROP TABLE IF EXISTS animals;  -- nuke the table! start again

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- take care of IDs for us
  name TEXT,
  species TEXT,
  description TEXT,
  roundness INTEGER,
  alive BOOLEAN,
  age INTEGER,
  image_url TEXT
);

INSERT INTO animals ( name, species, description, roundness, alive, age, image_url )
  VALUES (
    'Clarence Boddicker',
    'Human',
    'Baddie',
    8,
    0,
    50,
    'https://vignette.wikia.nocookie.net/robocop/images/d/dc/ClarenceBoddicker.jpg/revision/latest/scale-to-width-down/350?cb=20160816063931'
  );

  INSERT INTO animals ( name, species, description, roundness, alive, age, image_url )
  VALUES (
    'Ruby',
    'Canine',
    'The best dog',
    3,
    1,
    2,
    'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-0.3.5&s=f340825cae4a33e3034dd209eb8c7355&w=1000&q=80'
  );

  INSERT INTO animals ( name, species, description, roundness, alive, age, image_url )
  VALUES (
    'Kermit',
    'Desert',
    'Extremely round, also quite squeaky',
    9,
    1,
    4,
    'https://i.pinimg.com/originals/40/8c/91/408c91147f943416d6fc3755a3a45f14.jpg'
  );


  SELECT * FROM animals;
