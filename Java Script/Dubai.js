function colo()
{
    var col=["dubai1.jpg","dubai2.jpg","dubai3.jpg","dubai4.jpg","dubai5.jpg","dubai6.jpg","dubai7.jpg"]
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