const popupMenu = document.getElementsByClassName("menu")[0];

const logoMenu = document.getElementsByClassName("menu-logo")[0];

const footer = document.getElementsByClassName("footer")[0];

const header = document.getElementsByClassName("header")[0];

const main = document.getElementsByClassName("maininf")[0];

boll=false;
popupMenu.style.display = "none";

logoMenu.onclick = function(e) {
    popupMenu.style.display = "block";
    if(!boll){
        popupMenu.style.left = '-20%';
        boll=true;
        var i = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (i == 20) {
                clearInterval(id);
            } else {
                i += 0.5;
                popupMenu.style.left = -20 + i + '%';
            }
        }
    }
    
    else {
        boll=false;
        popupMenu.style.display = "block";
        popupMenu.style.left = '-20px';
        var i = 0;
        var id = setInterval(frame, 10);
        function frame() {
            if (i == -20) {
                clearInterval(id);
            } else {
                i -= 0.5;
                popupMenu.style.left = i + '%';
            }
        }
    }
}