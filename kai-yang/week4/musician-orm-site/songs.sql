DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  year INTEGER,
  musician_id INTEGER
);

INSERT INTO songs (name, year, musician_id)
  VALUES (
    'Making Tracks',
    2002,
    1
  );

INSERT INTO songs (name, year, musician_id)
  VALUES (
    'Boomiverse',
    2017,
    2
  );

INSERT INTO songs (name, year, musician_id)
  VALUES (
    'BE',
    2005,
    3
  );

INSERT INTO songs (name, year, musician_id)
  VALUES (
    'Can I Borrow a Dollar?',
    1992,
    3
  );

SELECT * FROM songs;
