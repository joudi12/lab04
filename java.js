var name;
var addres;
var phone;
var order;
var noitems;
var link;
var linkname;

function  myfunction() {
     
    name = prompt("enter your name");
    addres = prompt("enter your addres");
    phone = prompt("enter your mobile number");
    order = prompt("pleas enter your choice the number from list  1 - food hut  2- damascus food 3- food time");

    if (order==1){
        link='https://randalsallaq.github.io/restaurant-04/';
        linkname='food hut';
    }
    else if (order==2){
        link='https://aghyadalbalkhi-asac.github.io/Lab-04---Structure-web-pages-with-HTML/';
        linkname='damascus food';
    }
    else {
        link='https://joudi12.github.io/lab04/';
        linkname='food time';
    }
    document.getElementById("IDOFELEMENT").href = link;
    document.getElementById("IDOFELEMENT").innerText=linkname;
    document.getElementById("orderContent").innerHTML="Your Name is "+name+"  and Your Address is : "+addres+" your Phone is "+phone;

}