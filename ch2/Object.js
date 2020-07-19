const obj = [];

obj.color = "yellow";

obj["not an identifier"] = 3;
console.log(obj["not an identifier"]);
console.log(obj["color"]);


const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]);

const sam1 = {
    name : 'Sam',
    age : 4,
};

const sam2 = { name : 'Sam', age : 4 };

const sam3 = {
    name : 'Sam',
    classification: {
        kingdom: 'Anamalia',
        phylum: 'Choradata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfamily: 'Felinae',
        genus: 'Felis',
        species: 'catus'        
    },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

sam3.speak = function() { return console.log("Meow!"); }

sam3.speak();

delete sam3.classification;
delete sam3.speak;