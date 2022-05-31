
// console.log(document.getElementsByTagName("h1")[0].textContent);

// document.getElementsByTagName("h2")[0].innerText="my dom app";

// var spann =document.getElementsByTagName("span")[0]
// var h3 =document.getElementsByTagName("h3")[0]
// var h4 =document.getElementsByTagName("h4")[0]
// var h5 =document.getElementsByTagName("h5")[0]

// console.log(spann.innerText,h3.innerText,h4.innerText,h5.innerText)
// console.log(h3);
// console.log(h4.innerHTML)

// var p = document.getElementsByTagName("p")[0]
// var article = document.getElementsByTagName("article")[0]
// var span = document.getElementsByTagName("span")[0]
// var h6 = document.getElementsByTagName("h6")[0]

// console.log(p,article,span,h6)

// function printname(){
//     var Name = prompt("name?")
//     document.write("<h2>"+Name+"</h2>")
// }
// printname()



// function printspan(){
//     var coll = prompt("color?")
//     var num = +prompt("how match?")
//     for(var i = 0;i<num;i++){
//         document.write("<span>"+"<br>"+coll+"<br>"+"</span>")
//     }
// }
// printspan()



// function printtext(){
//     var text = prompt("text?")
//     var tag = prompt("tag?")
//     document.write("<"+tag+">"+text+"<"+tag+">")
// }
// printtext()





// function printinp(){
//     var inp = prompt("input?")
//     document.write("<input type="+inp+">")
// }
// printinp()


// function printclass(className,text1){
//     for(var i = 0;i<3;i++){
//     document.getElementsByClassName(className)[i].innerText=text1
//     }
// }
// printclass("ran",prompt("text?"))



// function printp() {
//     for (var i = 0; i < 6; i++) {
//     document.getElementsByTagName("p")[i].innerHTML="<span>text</span>"
//     }
// }
// printp()



// function printname(){
//     var print1 = prompt("name?");
//     document.write("<h2>"+print1+"</h2>")
// }
// printname()




// function userDate (){
//     var username = prompt("enter name");
//     var lastname = prompt("enter last name");
//     var userage = +prompt('enter age');
//     document.write(username+"<br>"+lastname+"<br>"+userage+"<br>")
//     if (userage >18){
//         document.write("<input type=text>")
//     }
// }
// userDate()




// function printobj() {
//     var obj = {
//         moviename: prompt("movies options: חגיגה בסנוקר , לשחרר את שולי , צ'רלי וחצי , lucifer , never back down 1, naver back down 2, never back down 3, onward, popeye"),
//         view: prompt("views?"),
//         year: prompt("year?"),
//     }
//     var images = document.getElementById("imgs").src = obj.moviename + ".jpg";

//     document.write("<h2>" + "Movie:  " + obj.moviename + "<br>" + "Views:  " + obj.view + "<br>" + "Year:  " + obj.year + "</h2>" + "<br>" + images)
// }
// printobj()


// var objguest={
//     name:prompt("name"),
//     lname:prompt("last name"),
//     email:prompt("email"),
//     class:prompt("class")
// }
// document.write("<h1>"+objguest.name+"</h1>"+"<br>"+"<h2>"+objguest.lname+"</h2>"+"<br>"+"<h3>"+objguest.email+"</h3>"+"<br>"+"<h4>"+objguest.class+"</h4>")


function printbuild() {
const building = {
    contractor:prompt("contractor?"),
    CompanyName:prompt("Company Name?"),
    Severalfloors:prompt("Several floors"),
    Numberofapartments:prompt("Number of apartments")
}
document.write("<h3>"+contractor.building+"<br>"+CompanyName.building+"<br>"+Severalfloors.building+"<br>"+Numberofapartments.building+"</h3>")
}
const num = +prompt("enter number")
for (var i = 0; i < num; i++) {
    printbuild()
}



///שאלה 18 ///

// function createStore(){

// }


