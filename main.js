
let newSize = document.querySelector(".mess-with-me");
newSize.style.fontSize = "40px";

//can use the tagName.class to get 1st instance 
let newColor = document.querySelector("p.mess-with-me");
newColor.style.background = "green";

let hideImg = document.querySelector("#hide-me");
hideImg.style.display = "none";

let newWidth = document.querySelector("#triceratops");
newWidth.style.width = "324px";

newSize.addEventListener("click", function()
{
    newSize.style.color = "orange";
})

newWidth.addEventListener("click", function()
{
    newWidth.style.border = "red solid 2px";
})

let halfOff = document.querySelector("#feathers");
halfOff.addEventListener("click", function()
{
    halfOff.style.opacity = ".5";
})

let switchBG = document.querySelector("#toggle");
let switchAction = document.querySelector("#row")
switchBG.addEventListener("click", function()
{
    if (switchAction.style.background === "")
    {
        switchAction.style.background = "lightblue";
    } else
    {
        switchAction.style.background = "";
    }
})

let biggy = document.querySelector("#biggify");
biggy.addEventListener("mouseover", function()
{
    biggy.style.width = "200px";
})

biggy.addEventListener("mouseout", function()
{
    biggy.style.width = "162px";
})

