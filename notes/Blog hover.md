
isometric images with hover
https://www.csscodelab.com/css-image-shadow-hover-effects/


isometric text 
https://www.midwinter-dg.com/blog_demos/css-isometric-text/





<span class="text">ryan</span>
body {
    background-color: #c4c4c4;
  
}
body {
    background-color: #fff;
}

.text {
    position: absolute;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    font-family: 'Menlo';
    font-size: 4em;
    font-weight: 700;
    color: #fff;
    -webkit-text-stroke: 1px #289B67;
    text-shadow: 
        0px 0px 1px #3ecf8e,
        1px 1px 1px #3ecf8e,
        2px 2px 1px #3ecf8e,
        3px 3px 1px #289B67;
}

.text:hover {
    cursor: pointer;
    text-shadow: 
        0px 0px 1px #3ecf8e,
        1px 1px 1px #3ecf8e,
        2px 2px 1px #3ecf8e,
        3px 3px 1px #3ecf8e,
        4px 4px 1px #3ecf8e,
        5px 5px 1px #289B67;
}






body {
    background-color: #fff;
}

.text {
    position: absolute;
    top: 50%; 
    right: 50%;
    transform: translate(50%,-50%);
    font-family: 'Circular Std';
    font-size: 32px;
    font-weight: 900;
    color: #111;
/*     text-shadow: 
        0px 0px 1px #3ecf8e,
        1px 1px 1px #3ecf8e,
        2px 2px 1px #3ecf8e,
        3px 3px 1px #289B67,
        4px 4px 3px RGBA(0,0,0,0.2); */
}
/* .text:hover:after {
        color: red;
      content: attr(data-text);
      position: absolute;
      -webkit-text-stroke: 0.150em #d9a3ff;
      left: 0;
      z-index: -2;
      font-size: 1em;
    } */

.text:hover {
    cursor: pointer;
    color: #fff;
    text-shadow: 
        0px 0px 1px #000,
        0px 0px 2px #000,
        1px 1px 1px #3ecf8e,
        2px 2px 1px #3ecf8e,
        3px 3px 1px #3ecf8e,
        4px 4px 1px #3ecf8e,
        5px 5px 1px #23905F,
        6px 6px 4px RGBA(0,0,0,0.3);
}