let calculate=()=>{
    let maths=document.querySelector('#Maths').value;
    let physics=document.querySelector('#Physics').value;
    let chemistry=document.querySelector('#Chemistry').value;
    let biology=document.querySelector('#Biology').value;
  let result =document.querySelector('p');
  let totalMakrs= parseFloat(maths)+ parseFloat(physics)+parseFloat(chemistry)+parseFloat(biology)
 let grades="";
let per=(totalMakrs*100)/400
  // console.log(biology);
// console.log(result.innerHTML='we here')
// result.innerHTML=(totalMakrs);


try {
    if(per>=80 && per<100){
      grades='A you are pass'
    }
    else if (per>=60 && per<79){
      grades='B you are pass'
    }
    else if (per>=40 && per<59){
      grades='C you are pass'
    }
    else{
      grades='You are fail'
    }

} catch (error) {
    alert(error.message)
}

}