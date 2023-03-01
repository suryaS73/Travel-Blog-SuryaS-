function colo()
{
    var col=["korea1.jpg","korea2.jpg","korea3.jpg","korea4.jpg","korea5.jpg","korea6.jpg","korea7.jpg"]
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