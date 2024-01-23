
function showExitDialog() {
    var d = document.getElementById("confirmWrapper");
    d.style.display = "block";
}
function exitGame() {
    window.top.abcyaExit();
    //window.location.URL = "../../";
}

function hideExitDialog() {
    var dialog = document.getElementById("confirmWrapper");
    dialog.style.display = "none";
}

function initButtons() {
    var device = new Phaser.Device();
    if (!device.desktop) {
        document.getElementById("btnExit").onmousedown = showExitDialog;
        document.getElementById("btnYes").onmousedown = exitGame;
        document.getElementById("btnNo").onmousedown = hideExitDialog;
        document.getElementById("exitButton").style.display = "block";
    }else{
        try {
            document.getElementById("btnExit").style.display = "none";
        }catch{
            // just skip this
        }
    }

}
