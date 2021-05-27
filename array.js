const friendsAge = [12, 13, 14, 15, 16];
const searchResults = friendsAge.indexOf(14);
// console.log(friendsAge);
// console.log(searchResults);

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
words.shift();
// console.log(words);

words.unshift('muhit');
// console.log(words);

const sliceValues = words.slice(2);
const startToEnd = words.slice(2, 4); // 2 to before 4 index
//console.log(sliceValues);
// console.log(startToEnd);

const result = words.filter(word => word == 'elite');

// console.log(result);

function isBigEnough(value) {
    return value >= 10
}

let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
    // console.log(filtered);

const rndInt = Math.floor(Math.random() * 6) + 1
    //console.log(rndInt)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
//console.log(months);

//Remove 0 (zero) elements before index 2, and insert "drum"
//array.splice(start, deleteCount, item1, item2, itemN)
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')
    //console.log(myFish)

//Remove 2 elements from index 0, and insert "parrot", "anemone" and "blue"
let myFishh = ['angel', 'clown', 'trumpet', 'sturgeon'];
let removedd = myFishh.splice(0, 2, 'parrot', 'anemone', 'blue');
console.log(myFishh);