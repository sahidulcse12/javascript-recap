function explain_callback(name, age, task) {
    console.log("name: ", name);
    console.log("age: ", age);
    task();
}

function washHand() {
    console.log("wash your hand");
}

function takeShower() {
    console.log("take shower");
}

explain_callback('muhit', 24, washHand)
explain_callback('mastu', 23, takeShower)