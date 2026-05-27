let header = documet.getElementsByClassName('header');
let headers = Array.From(header);
let description = document.getElementsByClassName('description');
let descriptions Array.From(description);

headers.forEach((item,index), => {
item.addEventListner('click', () =>{
des.forEach((des,i), => {
des.classList.remove('open');
des.classList.add('close');
if(index === i){
des.classList.toggle('close');
}
})
})
});