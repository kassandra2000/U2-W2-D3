
const nascondiSezione = document.querySelectorAll(".nascSez");
console.log(nascondiSezione)
for (let i = 0; i < nascondiSezione.length; i++) {
   
    

nascondiSezione[i].onclick = function () {
  const divNascondiSezione=this.parentNode.parentElement.childNodes[3]
//   divNascondiSezione.className.toggle("collapse")
divNascondiSezione.classList.toggle("collapse")


};
}