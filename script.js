let userscore=0;
let compscore=0;
//1
const choices=document.querySelectorAll(".choice");
//6
const msg= document.querySelector("#btn");
//8
const userscorepara = document.querySelector("#val")
const compscorepara = document.querySelector("#val2")
//4
const gencompchoice=()=>{
    let option =["stone","paper","scissors"]
  const randidx= Math.floor( Math.random()*3);
  return option[randidx];
}
//7
const showwin =(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML=userscore;

        console.log("yeee ! you win")
        msg.innerHTML=`user ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green"
    }else{
        compscore++;
        compscorepara.innerHTML=compscore;
        console.log("you losss")
        msg.innerHTML=`comp ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor="red"
    }
}
//5
const drawgame=()=>{
    console.log("game was draw")
    msg.innerHTML="game draw"
    msg.style.backgroundColor="black"
}
//3
const playgame =(userchoice)=>{
    // console.log(userchoice)
    console.log(`user ${userchoice} is clicked`)
    const compchoice=gencompchoice();
    console.log(`comp ${compchoice} is clicked`) 
    if(userchoice===compchoice){
          drawgame()
    }else{
        let userwin=true;
        if(userchoice=="stone"){
           userwin= compchoice==="paper" ? false :true;
        }else if(userchoice=="paper"){
            userwin= compchoice==="scissors" ? false :true;
        
    }else {
        userwin= compchoice==="stone" ? false :true;
}
showwin(userwin,userchoice,compchoice)
}
}
//2
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log(`choice ${userchoice} is clicked`)
        playgame(userchoice)
    })
})


// let r=document.querySelectorAll(".choice");
// console.log(r)
