
var GuestName = document.getElementById("name1").value;
namesOfThePeople.push(GuestName);
namesOfThePeople.sort();


function searching()

{
var s = document.getElementById("s1").value;
var found=0;
var j;
for(j=0; j<namesOfThePeople.length; j++)
{
    if(s==namesOfThePeople[j]){
        found=found+1;
    }
}
    document.getElementById("p2").innerHTML="Nome encontrado "+found+" vez(es)";
    console.log("Nome encontrado"+found+" vez(es)");

}