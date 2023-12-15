//your JS code here. If required.
window.matchMedia("(orientation: portrait)").addEventListener("change", e => {
    const portrait = e.matches;

   if(portrait){
	 document.body.style.backgroundImage ="url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg')";

}
else{
	 document.body.style.backgroundImage ="url('https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg')";

}  
});
