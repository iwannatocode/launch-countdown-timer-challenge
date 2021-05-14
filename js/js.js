let  dead_line, countdown;

// guardamos la fecha actual y la parseamos para trabajar con numeros (milisegundos)
dead_line = new Date();
dead_line = Date.parse(dead_line);

//calculamos y agregamos el tiempo a contar en milisegundos (14 dias)
countdown = 14 * 24 * 60 * 60 * 1000 + 1000 ;
dead_line += countdown;


//muestra el tiempo restante cada 1s
const clock_start = setInterval(()=>{
    const time = get_time();//nos regresa un objeto con los reslutados procesados
    
    //mostramos los resultados
    $(".seconds").html(time.seconds);
    $(".minutes").html(time.minutes);
    $(".hours").html(time.hours);
    $(".days").html(time.days);

    //paramos la ejecucion cuando el contador llegue a 0
    if( time.current <= 0 ){
        clearInterval(clock_start);
        alert("Time Over");
    }

}, 1000);

//funcion para procesar el tiempo
function get_time(){
   let current = dead_line - Date.parse(new Date()),
        seconds = (current / 1000 ) % 60,
        minutes = Math.floor( ((current / 1000) / 60 ) % 60  ),
        hours = Math.floor( ((current / 1000) / 60 / 60) % 24 ),
        days = Math.floor(  (current / 1000) / 60 / 60 / 24);
        
        //le añado 0 para q se ve mejor
        if( seconds < 10) seconds = '0' + seconds;
        if( minutes < 10) minutes = '0' + minutes;
        if( hours < 10) hours = '0' + hours;
        if( days < 10) days = '0' + days;

    return { current, seconds, minutes, hours, days };
}

//crea un div de manera dinamica para efecto en los contenedores 'box'
var div = `<div class="efect"></div>`;
$(".cont").append(div);