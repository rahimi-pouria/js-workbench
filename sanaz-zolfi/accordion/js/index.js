let header = documet.getElementByClass('header');
let headers = Array.From(header);
let description = document.getElementByClass('description');
let descriptions Array.From(description);

headers.forEach((item,index), => {
des.forEach((des,i), => {
des.classList.remove('open');
des.classList.add('close');
if(ind3x === i){
des.classList.toggle('close');
}
})
});