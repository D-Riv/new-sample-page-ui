let firstName = "Jimmell";
let lastName = "Tate";

const introPrompt = `Its time to learn javascript ${firstName} ${lastName}, are you ready?`;
console.log(introPrompt)

let response = prompt(introPrompt);


let secondaryPrompt;
if ( response === "yes" || response === "y" || response === "yea") {
    alert("ok lets get started!")
} else if (response === "no" || response === "nah") {
    alert("You a little bitch");
}else {
    alert("sorry I didnt catch that")
}

