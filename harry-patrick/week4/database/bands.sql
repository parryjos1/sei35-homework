DROP TABLE IF EXISTS bands;
CREATE TABLE bands (

  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  genre TEXT,
  song TEXT,
  year INTEGER,
  together BOOLEAN,
  album TEXT

);

INSERT INTO bands (name, genre, song, year, together, album)
  VALUES (
    "Joy Division",
    "Post-Punk",
    "Digital",
    1976,
    0,
    'http.joy_division_album.com'

);
