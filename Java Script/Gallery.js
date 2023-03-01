function colo()
{
    var col=["tiger.jpg","butterly.jpg","lion.jpg","parrot.jpg","giraffe.jpg","swan.jpg","lotus.jpg","fish.jpg"]
    var len=col.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Assets/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},5000)
}
// from Here Gallary Code Starts
function imgK(pic,heading,discription)
{
    document.getElementById("bigscreen").removeAttribute("style")
    document.getElementById("imgheading").innerHTML=heading;
    document.getElementById("imgparagraph").innerHTML=discription;
    bigscreen.style.display="flex"
    fullImg.src=pic;
}
function imgV()
{
    document.getElementById("bigscreen").setAttribute("style","display:none")
}