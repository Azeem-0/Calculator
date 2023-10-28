var s = ''
var button = document.querySelectorAll("button");
Array.from(button).forEach((b)=>{
    b.addEventListener("click",azeem);
});
function azeem()
{
    a = this.innerHTML;
    if(a == 'AC')
    {
        s = '';
    }
    else if(a == 'B')
    {
        s = s.substring(0,s.length-1);
    }
    else if(a != '=')
    {
        s += a;
    }
    else{
        s = eval(s);
    }
    document.querySelector(".o").innerHTML = s;
    if(document.querySelector(".o").innerHTML == "NaN")
    {
        document.querySelector(".o").innerHTML = "Please Try to enter a valid expression.";
    }
}