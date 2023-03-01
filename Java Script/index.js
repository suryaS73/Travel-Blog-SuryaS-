
function stop()
{
    var cont=document.getElementsByTagName("video")
    cont[0].removeAttribute("controls")
    cont[1].removeAttribute("controls")
    cont[2].removeAttribute("controls")
    cont[3].removeAttribute("controls")
}
function play()
{
    var cont=document.getElementsByTagName("video")
    cont [0].setAttribute("controls")
    cont [1].setAttribute("controls")
    cont [2].setAttribute("controls")
    cont [3].setAttribute("controls")
}