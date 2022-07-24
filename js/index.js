let calculate=()=>{
    let maths=document.querySelector('#Maths').value;
    let physics=document.querySelector('#Physics').value;
    let chemistry=document.querySelector('#Chemistry').value;
    let biology=document.querySelector('#Biology').value;
  let result =document.querySelector('p');
  let totalMakrs= parseFloat(maths) + parseFloat(physics)+parseFloat(chemistry)+parseFloat(biology)
// console.log(biology);
alert(totalMakrs)
// console.log(result.innerHTML='we here')

}