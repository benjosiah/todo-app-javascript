var burger = document.getElementById('burger');
var ul = document.getElementsByClassName('ul');
var tab = document.getElementsByClassName('tab');
var menue = document.getElementById('menue');

burger.addEventListener("click", function(e){
    if (tab.length>0 && ul.length>0) {
        tab[0].className= 'show-tab';
        ul[0].className="show-ul";
    }else{
        var showUl = document.getElementsByClassName('show-ul');
        var subTab = document.getElementsByClassName('show-tab');
        subTab[0].className= 'tab';
        showUl[0].className= 'ul';
    }
    
})

menue.addEventListener("click", function(e){
    if (tab.length>0) {
        tab[0].className= 'mid-tab';
    }else{
        var subTab = document.getElementsByClassName('mid-tab');
        subTab[0].className= 'tab';
    }
})
