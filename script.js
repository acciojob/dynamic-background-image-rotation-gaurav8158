//your JS code here. If required.
window.addEventListener("resize",()=>{
  if (window.innerWidth > window.innerHeight) {
  //  document.body.style.backgroundImage ="url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";
  document.body.setAttribute("class","landscap");   
}
  else{
 //   document.body.style.backgroundImage ="url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";
document.body.setAttribute("class","portrait"); 
}
})
