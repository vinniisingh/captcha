function check(){
    // this.innerHTML += </img>
}
for(let i =2;i<=17;i++){
document.querySelectorAll("div")[i].addEventListener("click",function(){
this.innerHTML = '<img src="https://picsum.photos/142/103">' + '<img class="check-box" src="images/check-box.png">';
});
}