function vis()
{
    document.getElementById("password").removeAttribute("type")
    document.getElementById("regpass").removeAttribute("type")
    document.getElementById("show").setAttribute("src","../Assets/Images/vis 1.svg")
    document.getElementById("regshow").setAttribute("src","../Assets/Images/vis 1.svg")

}
function hide()
{
    document.getElementById("show").setAttribute("src","../Assets/Images/hide 1.svg")
    document.getElementById("password").setAttribute("type","password")
    document.getElementById("regpass").setAttribute("type","password")
    document.getElementById("regshow").setAttribute("src","../Assets/Images/hide 1.svg")

}
function auth()
{
    var password="sury@123"
    var email="surya@gmail.com"
    var userpass=document.getElementById("password").value
    var useremail=document.getElementById("email").value
    if(useremail==email && userpass==password)
    {
        document.getElementById("login").setAttribute("action","../HTML/index.html")
        document.getElementById("submit").setAttribute("type","submit")
        document.getElementById("password").style.borderColor="green"
        document.getElementById("email").style.borderColor="green"
        document.getElementById("result").innerHTML=" "
    }
    else if(useremail!=email && userpass==password)
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("password").style.borderColor="green"
        document.getElementById("result").innerHTML="Entered The Wrong Email"
        document.getElementById("bg").style.backgroundImage='linear-gradient(90deg,red,green)'
        }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("password").style.borderColor="red"
        document.getElementById("email").style.borderColor="green"
        document.getElementById("result").innerHTML="Entered The Wrong Password"
        document.getElementById("bg").style.backgroundImage='linear-gradient(90deg,green,red)'

    }
    else
    {
        document.getElementById("email").style.borderColor="red"
        document.getElementById("password").style.borderColor="red"
        document.getElementById("result").innerHTML="Entered The Wrong Email and Password"
         document.getElementById("bg").style.backgroundImage="linear-gradient(90deg,red,red)"
    }
}
function reg()
{
    document.getElementById("register").style.display="inline-block"
}
function relog()
{
    document.getElementById("register").style.display="none"
}
function pass()
{
    var password=document.getElementById("regpass").value
    var passlen=password.length
    if (passlen==0)
    {
        document.getElementById("strong").innerHTML=" "
    }
     else if(passlen<=5)
    {
        document.getElementById("strong").innerHTML="Weak password"
        document.getElementById("regpass").style.borderColor="red"
    }
     else if(passlen>=5)
    {
        document.getElementById("strong").innerHTML="Strong password"
        document.getElementById("regpass").style.borderColor="green"
    }
    

}
function passreg()
{
    var repass=document.getElementById("cnfpass").value
    var password1=document.getElementById("regpass").value
    var len=password1.length
     if(password1==repass)
    {
        document.getElementById("strong").innerHTML=""
        document.getElementById("regpass").style.borderColor="green"
        document.getElementById("cnfpass").style.borderColor="green"
    }
    else
    {
        document.getElementById("strong").innerHTML="Password not match"
        document.getElementById("regpass").style.borderColor="green"
        document.getElementById("cnfpass").style.borderColor="red"
    }

}