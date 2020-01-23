// question 1

var petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[2]);

// question 3

petArray.push("sheep");

// question 4

console.log(petArray.length);

// question 5

var catObject = {
    name: "Bob",
    color: "black",
    age: 10
};

// question 6

console.log(catObject.age);

// question 7

var catArray = [
    {
        name: "Bob",
        color: "black",
        age: 10
    }
];

// question 8

for(var i = 0; i < catArray.length; i++) {
    
    console.log(catArray[i].name);
    console.log(catArray[i].color);
    console.log(catArray[i].age);
};

// question 9

function logToConsole(theWord) {
    console.log("hello");
}

logToConsole();

// question 10

function logToConsole(theWord) {
    console.log(theWord);
}

logToConsole("Donkey");
