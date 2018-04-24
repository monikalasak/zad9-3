// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'triceratops';

console.log(text);

var dinosaurUpperCased = dinosaur.toUpperCase();

console.log (dinosaurUpperCased);

var textCharsAfter1 = text.replace('Velociraptor', dinosaurUpperCased);
console.log(textCharsAfter1);


console.log(text.length);

var textCharsAfter3 = textCharsAfter1.substr(0,72.5);

console.log(textCharsAfter3);
