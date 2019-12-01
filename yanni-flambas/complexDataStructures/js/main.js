var marxFamily = [
    { name: "Groucho", birthYear: 1890 },
    { name: "Harpo", birthYear: 1888 },
    { name: "Chico", birthYear: 1887 },
    { name: "Zeppo", birthYear: 1901 },
    { name: "Gummo", birthYear: 1893 }
];

for ( var i = 0; i < marxFamily.length; i++ ) {
    var brother = marxFamily[ i ];
    console.log( brother.name, brother.birthYear );
};
