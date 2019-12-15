console.log('Dom intro');

// Ask the DOM to give us the element we want to change
const billImage = document.getElementById('firstBill');

//change something about the element
//it looks like the same as changing the value of an object's key
//(because thats exactly whats happening)

billImage.src = 'http://placebear.com/300/300';

console.log(billImage);

const bestDogItem = document.getElementById('bestDog');

console.log('Best dog:', bestDogItem);

bestDogItem.innerHTML = '<strong>Ruby</strong>';

const tagElements = document.getElementsByTagName('p');
console.log(tagElements);

for(let i = 0; i < tagElements.length; i++) {
    const p = tagElements[i];
    console.log(p.innerHTML);
    p.innerHTML += "<strong>HAXXX0000REEED</strong>";
    p.style.backgroundColor = 'darkgoldenrod';
}

//create a brand new dom node
let newBillImage = document.createElement('img');

//set some attributes
newBillImagels.src = 'http://www.fillmurray.com/400/400';
newBillImage.style.border = '10px solid lavender;';

//actually attach our detached DOM node to the DOM (making it visible)
document.body.appendChild(newBillImage);