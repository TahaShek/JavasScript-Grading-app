let calculate=()=>{
    let maths=document.querySelector('#Maths').value;
    let physics=document.querySelector('#Physics').value;
    let chemistry=document.querySelector('#Chemistry').value;
    let biology=document.querySelector('#Biology').value;
  let result =document.querySelector('p');
  let totalMakrs= parseFloat(maths)+ parseFloat(physics)+parseFloat(chemistry)+parseFloat(biology)
 let grades="";
 let parentsFeedback=''
let per=(totalMakrs*100)/400
  // console.log(biology);
// console.log(result.innerHTML='we here')
// result.innerHTML=(totalMakrs);


try {
  if(maths>100 || physics>100 || chemistry>100 || biology>100){
    alert('enter correct values')
    return;
  }

  if(maths==='' || physics==='' || chemistry==='' || biology===''){
    alert('enter all values')
return
  }

    if(per>=80 && per<100){
      grades='A you are pass 😃'
      parentsFeedback='I am proud of you 👏'
      
      // console.log()
    }
    else if (per>=60 && per<80){
      grades='B you are pass'
     parentsFeedback="Good work ❤️"    
    }
    else if (per>=40 && per<59){
      grades='C you are pass'
      parentsFeedback="Don't feel demotivated work hard for the next exams 👍"
    }
    else{
      grades='You are fail'
      parentsFeedback='Tu mera puttar chutti kar 🖕'
    }



    result.innerHTML=`Your marks ${totalMakrs} out of 400 <br> Your Percentage is ${per}% <br> Your grade is ${grades}  <br> Parents:${parentsFeedback}`;

} catch (error) {
    alert(error.message)
}

}