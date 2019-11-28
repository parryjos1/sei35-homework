// Part 1 - Rectangle
{
  const rectangle = {
    length: 4,
    width: 4,
  };

  const isSquare = function(rect) {
    return rect.length === rect.width;
  };

  const area = function(rect) {
    return rect.length * rect.width;
  };

  const perimeter = function(rect) {
    return rect.length * 2 + rect.width * 2;
  };
}

// Part 2 - Triangle
{
  const triangle = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
  };

  const isEquilateral = function(tri) {
    return tri.sideA === tri.sideB && tri.sideB === tri.sideC;
  };

  const isosceles = function(tri) {
    return (tri.sideA === tri.sideB) || (tri.sideA === tri.sideC) ||
        (tri.sideB === tri.sideC);
  };

  const area = function(tri) {
    const p = (tri.sideA + tri.sideB + tri.sideC) / 2;
    return Math.sqrt(p * (p - tri.sideA) * (p - tri.sideB) * (p - tri.sideC));
  };

  const isObtuse = function(tri) {
    const sides = [tri.sideA, tri.sideB, tri.sideC].sort((a, b) => a - b);
    return sides[0] * sides[0] + sides[1] * sides[1] < sides[2] * sides[2];
  };
}


