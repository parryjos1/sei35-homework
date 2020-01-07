DROP TABLE IF EXISTS mountains;

CREATE TABLE mountains (
  id INTEGER PRIMARY KEY AUTOINCREMENT, -- manages ID nums
  name TEXT,
  location TEXT,
  description TEXT,
  favourite INTEGER,
  image_url TEXT
);

INSERT INTO mountains (name, location, description, favourite, image_url)
  VALUES (
    'Mont Blanc',
    'France',
    '11th in the world in topographic prominence',
    10,
    'https://www.liveabout.com/thmb/R-tiEzg_JKgyYwQ-IKDzZP_dLkw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/MontBlanc_StephenSmith_GettyImages_2-56db0e6f3df78c5ba0435ec2.jpg'
  );

  INSERT INTO mountains (name, location, description, favourite, image_url)
    VALUES (
      'Mount Everest',
      'Nepal',
      'Earths highest mountain above sea level',
      8,
      'https://s.abcnews.com/images/International/everest-gty-er-190218_hpMain_16x9_992.jpg'
    );

    INSERT INTO mountains (name, location, description, favourite, image_url)
      VALUES (
        'Mount Whitney',
        'California',
        'fault-block mountain range formed when shifting tectonic plates led to the cracking and faulting of the Earths surface',
        9,
        'http://cdn.shopify.com/s/files/1/1465/8230/files/whitney-mnt_large.jpg?v=1475605534'
      );

      INSERT INTO mountains (name, location, description, favourite, image_url)
        VALUES (
          'Mount Kinabalu',
          'Malaysia',
          'he highest mountain in the Malay Archipelago',
          7,
          'https://www.mountkinabalu.com/image/mt-k.jpg'
        );

SELECT * FROM mountains;
