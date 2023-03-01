function colo()
{
    var col=["Thailand1.jpg","Thailand2.jpg","Thailand3.jpg","Thailand4.jpg","Thailand5.jpg","Thailand6.jpg","Thailand7.jpg"]
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