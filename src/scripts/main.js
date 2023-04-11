AOS.init();

const dataDoEvento = new Date("Dec 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

   const diasAteoEvento = Math.floor(distanciaAteOEvento  / diaEmMs);
   const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
   const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
   const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);


//    console.log(diasAteoEvento);
//    console.log(horasAteOEvento);
//    console.log(minutosAteOEvento);
//    console.log(segundosAteOEvento);

   document.getElementById('contador').innerHTML = `${diasAteoEvento}D ${horasAteOEvento}H ${minutosAteOEvento}M ${segundosAteOEvento}S `;

   if(distanciaAteOEvento < 0 ){
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML - 'Evento expirado'
   }
}, 1000)