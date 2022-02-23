let list = [
    {
        name: "Caution",
        sound: 1
    },
    {
        name: "Dying Breed",
        sound: 3
    },
    {
        name: "Human",
        sound: 8
    },
    {
        name: "Spaceman",
        sound: 7
    },
    {
        name: "Sam's Town",
        sound: 5
    },
    {
        name: "Brightside",
        sound: 4
    }
];


for (let i = 0; i < list.length; i++) {

    let ele = document.createElement("div");
    let nameEle = document.createElement("h1");
    let soundEle = document.createElement("h2");
    nameEle.innerHTML = list[i].name;
    soundEle.innerHTML = list[i].sound;
    nameEle.innerHTML = "Name:" + " " + list[i].name;
    soundEle.innerHTML = "Sound:" + " " + list[i].sound;
    ele.appendChild(nameEle);
    ele.appendChild(soundEle);
    document.body.appendChild(ele);

    if (list[i].sound > 5){
        soundEle.innerHTML = soundEle.innerHTML.fontcolor("blue")
    }
}

let button = document.createElement("button");
let number=10;


button.addEventListener("click",function (){
    button.innerHTML= number+1;
    number=number+1
    if (number===15){
        button.innerHTML="Good job, we got to our number!"
    }
})

document.body.appendChild(button);