var name;
var addres;
var phone;
var order;
var noitems;
var link;
var linkname;
var Quantity;
var menu;


alert('welcome to shawerma resturant Quickly  see the menu then  order')

function  myfunction(){
    name = prompt("enter your name");
    addres = prompt("enter your addres");
    phone = prompt("enter your mobile number");
    order = prompt("pleas enter your choice the number from list  1 - food hut  2- damascus food 3- food time");
    while (order > 3 ){
        order = prompt("pleas enter your choice the number from list  1 - food hut  2- damascus food 3- food time");
    }
   
    Quantity = prompt("pleas enter how many shawerma you eat in the day ");

    if (order==1 && Quantity >=1){
        link='https://randalsallaq.github.io/restaurant-04/';
        linkname='food hut';
        document.getElementById('print').innerHTML = "pleas dont eat a lot of shawerma to stay healthy"
    }
    else if (order == 2 && Quantity >=2 ){
        link='https://aghyadalbalkhi-asac.github.io/Lab-04---Structure-web-pages-with-HTML/';
        linkname='damascus food';
        document.getElementById('print').innerHTML = "pleas dont eat a lot of shawerma  to stay healthy"
    }
    else {
        link='https://joudi12.github.io/lab04/';
        linkname='food time';
        document.getElementById('print').innerHTML = "pleas dont eat a lot of shawerma to stay healthy"
    }

   
    document.getElementById("IDOFELEMENT").href = link;
    document.getElementById("IDOFELEMENT").innerHTML=linkname;
    document.getElementById("orderContent").innerHTML="Your Name is "+name+"  and Your Address is : "+addres+" your Phone is "+phone;
    


}

function newfunction(){
    menu = prompt('how many food you want to eat it from here ');


    var list ='arabic shawerma';
    var div = document.getElementById("list")
    

    for( var i=0; i<menu; i++){
       var p= document.createElement("p");
       div.appendChild(p)
       
       p.textContent=list

    }
}



