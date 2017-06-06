function matiere(evt, matieres,color,elmnt) {

    var i, tabcontent, tablinks,mavar;
	mavar=10;
	console.log(mavar);
	
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }


    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
		tablinks[i].style.backgroundColor="inherit";
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
	

    document.getElementById(matieres).style.display = "block";
    evt.currentTarget.className += " active";
	elmnt.style.backgroundColor = color;

}