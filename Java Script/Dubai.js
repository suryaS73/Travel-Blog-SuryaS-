function colo()
{
    var col=["Burj khalifa.jpg","pexels-aleksandar-pasaric-823696.jpg","pexels-kostiantyn-stupak-599982.jpg","pexels-max-avans-5087050.jpg","pexels-pixabay-460683.jpg","pexels-pixabay-460683.jpg"]
    var len=col.length
    var ran=Math.random()*len
    var rannum=Math.round(ran)
    document.getElementById("a").style.backgroundImage="URL(../Assets/Images/"+col[rannum]+")"
    var updatethetime=setTimeout(function(){colo()},2000)
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
