body {
    margin: 0px 0px 1px 0px; /* the extra 1px allows the iOS inner/outer check to work */
    background: #000000;
    overflow-y:hidden;
    overflow-x:hidden;
}

#orientation {
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(../img/orientation.jpg); 
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgb(0, 0, 0);
    z-index: 999;
    display: none;
}


/** ABCYA EXIT BUTTON **/

#exitButton {
    position: fixed;
    bottom: 0px;
    right: 0px;
    cursor: pointer;
    display: block;
}

#confirmWrapper {
    z-index: 100;
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -195px;
    margin-top: -158px;
}

#confirmExit {
    position: absolute;
}
#buttonHolder {
    position: absolute;
    top: 150px;
    left: 76px;
}

/* tablet */
@media only screen
and (min-device-width : 768px)
and (max-device-width : 1024px)  {
    #confirmWrapper {
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -195px;
        margin-top: -158px;
    }
}

#imgWrapper {
    margin: 0 auto;
    overflow: hidden;
}

#imgRotate {
    position: relative;
    left: 0;
    max-height: 100%;
    max-width: 100%;
}

/* mobile phone */
@media only screen
and (min-device-width : 320px)
and (max-device-width : 568px) {
    #confirmWrapper {
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        position: fixed;
        top: 50%;
        left: 50%;
        margin-left: -98px;
        margin-top: -79px;
    }

    #exitButton {
        -webkit-transform: scale(0.5);
        -moz-transform: scale(0.5);
        bottom: 0px;
        right: -25px;
    }
}
