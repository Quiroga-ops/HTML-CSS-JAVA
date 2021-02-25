var today=new Date();
var hournow=today.getHours();
var greeting;

if(hournow>18){
    greeting="Buenas Noches!";
}else if(hournow>12){
    greeting="Buenas Tardes!";
}else if(hournow>0){
    greeting="Buenos días!";
}else {
    greeting="Bienvenidos!";
}
document.write('<h3>' + greeting + '</h3>');
