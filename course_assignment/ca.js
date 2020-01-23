// question 1

var name = "jonathan";

// question 2

var person = {
    name: "John",
    age: 19
};

// question 3

var outOfStock = true;

if(outOfStock === true) {
    console.log("Out of stock")
} else {
    console.log("In stock")
};

// question 4

var numbers = [10, 20, 30, 40, 50];

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
};

// question 5

for(var count = 15; count <= 25; count++) {
    console.log(count)
};

// question 6

for (var i = 15; i < 26; i++) {
    if(i === 20) {
        console.log("number is", + i)
    }
}

// question 7

var posts = [
    {
        imageUrl: "https://path/to/first-picture",
        likeCounter: 50,
        likedByUser: false
    },
    {
        imageUrl: "https://path/to/second-picture",
        likeCounter: 150,
        likedByUser: true
    }
];

for(var i = 0; i < posts.length; i++) {
    console.log(posts[i].likeCounter);
    console.log(posts[i].likedByUser);
}

// question 8

function whatIDontLike(theWord) {
    console.log("I don't like " + theWord)
}

whatIDontLike("rain");

// question 9

function addNumbers(firstNumber, secondNumber) {
    var total = secondNumber - firstNumber;
    console.log(total);
}

addNumbers(5,10);

// question 10

