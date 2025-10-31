const prompt=require("prompt-sync")();

let Taxis = [ 
{ id: 1, position: 5, available: true, timeRemaining: 0, totalRides:0, destination:null  }, 
{ id: 2, position: 12, available: false, timeRemaining:0, totalRides:0, destination:null }, 
{ id: 3, position: 20, available: true, timeRemaining:0, totalRides:0, destination:null } 
];
let Requests = [ 
{ reqId: 1, position: 10, duration: 3, time: 0 }, 
{ reqId: 2, position: 3, duration: 4, time: 2 }, 
{ reqId: 3, position: 18, duration: 2, time: 4 }, 
{ reqId: 4, position: 7, duration: 5, time: 5 } 
];
//2. Fonctionnalités à implémenter 
//A. Trouver le taxi le plus proche et disponible 
let pR=0;
let timec=0;

function TrouverTaxiPourRequest(request) {
  if (Taxis.length === 0) {
    console.log("Aucun taxi disponible !");
    return null;
  }

  let taxiPlusProche = null;
  let distanceMin = 0;

  for (let taxi of Taxis) {
    if (taxi.available === true) {
      let distance = Math.abs(request.position - taxi.position);
      if (distanceMin===0||distance < distanceMin) {
        distanceMin = distance;
        taxiPlusProche = taxi;
      }
    }
  }

  return taxiPlusProche;
}
//B. Gérer la durée du trajet:
let taxi = TrouverTaxiPourRequest(Requests[0]);
if (taxi) {
  console.log("Le taxi le plus proche est l'ID ", taxi.id, " à la position ", taxi.position);
} else {
  console.log("Aucun taxi trouvé.");
}

function ladureedetrajet(Request){
let tab=[];
 Taxis.available=false ;
    for (let t1=0; t1<Taxis.length;t1++){
    let tax=Taxis[t1];
   if(tax.available) {

    tax.timeRemaining=Request.duration;
    tax.destination=Request.position;
    tax.totalRides+=1;
    tab.push(`[t=${timec}] request${Request.reqId}(posi${Request.position},dur${Request.duration})->taaxi#${tax.id}`);
while (tax.timeRemaining>0) {
    tax.timeRemaining -- ;
}
Taxis.available=true ;
Taxis.position == Request.position;

}
}  return tab;




}
for (let i = 0; i < Requests.length; i++) {
    console.log(ladureedetrajet(Requests[i]));
}
function filedattente(req){
    let waitingQueue=[];
    for(let i=0; i<Taxis.length;i++){
        let t=Taxis[i];
        if(t.available == false){
            waitingQueue.push(req.reqId);
        }
        if(t.available==true){
            t.timeRemaining=req.duration;
            t.destination=req.position;
            
        }
        // tab.push(`[taxi#${t.id}]-> request${req.reqId} (pos${req.position},dur${req.duration})`);
        // return tab;
    }return waitingQueue;
    
    
    



} for (let i = 0; i < Requests.length; i++) {
    console.log(filedattente(Requests[i]));
}


pR++;
console.log("--- Final Report ---" );
let p=[];
p.push("taxi : ",Taxis.id,": position : ",Requests.position," , trajets : ",pR,);
console.log(p);




    

