let text = document.getElementById('text');
function fontFamily(){
    let checked = document.querySelector('input[name="fontFamily"]:checked').value;
    text.style.fontFamily = checked;
}
function textAlign(){
    let checked = document.querySelector('input[name="textAlign"]:checked').value;
    text.style.textAlign = checked;
}
function lineHeigth(){
    let checked = document.querySelector('input[name="lineHeigth"]:checked').value;
    text.style.lineHeight = checked;
}
function letterSpacing(){
    let checked = document.querySelector('input[name="letterSpacing"]:checked').value;
    text.style.letterSpacing = checked;
}
function textIndent(){
    let checked = document.querySelector('input[name="textIndent"]:checked').value;
    text.style.textIndent = checked;
}
function textTransform(){
    let checked = document.querySelector('input[name="textTransform"]:checked').value;
    text.style.textTransform = checked;
}
function textDecoration(){
    let checked = document.querySelector('input[name="textDecoration"]:checked').value;
    text.style.textDecoration = checked;
}
function textBorder(){
    let checked = document.querySelector('input[name="textBorder"]:checked').value;
    text.style.borderStyle = checked;
}
function borderColor(){
    let checked = document.querySelector('input[name="borderColor"]:checked').value;
    text.style.borderColor = checked;
}

