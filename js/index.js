var bienvenida;

bienvenida= prompt("¿Como te llamas?");
alert("Bienvenido "+bienvenida);

const day=new Date().getDay();
switch(day){
case 1:
valDay="Feliz Lunes!"
break;
case 2:
valDay="Es Martes, un dia especial"
break;
case 3:
valDay="Miercoles, ya vamos a la mitad"
break;
case 4:
valDay="Es Jueves, solo un dia más para el fin de semana!"
break;
case 5:
valDay="Feliz Viernes, listos!!"
break;
case 6:
valDay="Que tengan un maravilloso Sábado"
break;
case 7:
valDay="Es Domingo, diá del Señor"
break;
default:
alert("No hay día");
break;
}
alert('Mensaje del día: '+valDay);

