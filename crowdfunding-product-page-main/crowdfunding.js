// "use strict"
const option =document.getElementById("icon-hamburger");
const closeBtn =document.getElementById("close-menu");
const menuBar =document.getElementById("menu-bar");

option.onclick= function(){
    option.style.width="0"
    closeBtn.style.display="block";
    menuBar.style.display="block";
};
closeBtn.onclick=function (){
    closeBtn.style.display="none";
    menuBar.style.display="none";
    option.style.width="30px"
}

// Action mode;
const selectReward=document.getElementById("Select-reward");
const selectReward2=document.getElementById("Select-Reward");
const modal=document.getElementById("modal");
const closeModal =document.getElementById("close-modal");
const selectRewards=[selectReward,selectReward2];
const modalCombine=document.getElementById("modal-combine");
const modalSection=document.getElementsByClassName("modal-section")[0];
const backProject = document.getElementById("back-project");
const continu =document.getElementById("continue");
const Continu=document.getElementById("continue2");
const check=document.getElementById("check");
let cNtn=[continu,Continu];
const gotIt=document.getElementById("gotIt");
const backed =document.getElementById("backed");
const bakers=document.getElementById("backers");
const radioOne=document.getElementsByClassName("radio")[0];
const radioTwo=document.getElementsByClassName("radio")[1];
const radioThree=document.getElementsByClassName("radio")[2];
const radioBox=[radioOne,radioTwo,radioThree];
const dollarOne=document.getElementsByClassName("dollar")[0];
const dollarTwo=document.getElementsByClassName("dollar")[1];
const Dollar=[dollarOne,dollarTwo];
const combine=document.getElementsByClassName("modal-combine")[0];
const combine2=document.getElementsByClassName("modal-combine")[1];
const progress =document.getElementById("progress");


//continue after 

let Values=[];
cNtn.forEach(function(btn){
    btn.onclick= ()=>{
  
    
  //dollar input;
     const ddValue=dollarTwo.value;
    const dValue=dollarOne.value;
    if (!dValue && !ddValue) {
        return alert(" Invalid amount");
       
        
        
    }else if((dValue <= 0 ||dValue< 25 ||dValue > 100000 )&&  (ddValue <=0 || ddValue< 75 || ddValue> 100000)){
        return alert(" Invalid amount")
    }else if((!dValue && ddValue)||(dValue && !ddValue)){
        // return alert("Thanks for the pledge");
        Values.push(Number(dValue));
        Values.push(Number(ddValue))
        modal.style.display="none"; 
        modalSection.style.display="none";
        check.style.display="block";
    }
        

    var totalBaker=0;
    for(var i=0;i<Values.length;i++){
        totalBaker += Values[i];
        console.log(totalBaker);
           
    }
    backed.innerHTML= "$" + totalBaker;

    if (totalBaker >= 100000) {
        alert("Thannks for reaching 100,000 ! you're doing amazing" )
        progress.style.width=(100000*(1/100));
    }
    bakers.innerHTML=Values.length;
    const calculation =((parseInt(backed.innerHTML.slice(1)))/100000)*100;
    progress.style.width=calculation + "%";
    dollarOne.value=null;
    dollarTwo.value=null;
    

}
})







//raido boxes;

radioOne.onclick=function(){
    modal.style.display="none"; 
    modalSection.style.display="none";
    check.style.display="block";
}




// select rewards
selectRewards.forEach(function(select){
    select.onclick=function(){
      modal.style.display="block"; 
      modalSection.style.display="block"; 
    }
});

// close modal section
closeModal.onclick=function(){
    modal.style.display="none"; 
    modalSection.style.display="none";
    radioThree.checked=false;
    radioTwo.checked=false;
}
// main back the project
backProject.onclick=function(){
    modal.style.display="block"; 
      modalSection.style.display="block";
}

//Got it 
gotIt.onclick=()=>{
    check.style.display="none";
};






