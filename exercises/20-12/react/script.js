
const CELLSNUM =3 ; 
const arr =[] ;

const field = document.querySelector('input') ; 
function updateValues (e){
   const  {id,value} = e.target ; 
   for (let i = id+1 ; i<CELLSNUM ; i++) {
    document.getElementById(id).innerText += parseInt(value) ;
    }


    document.getElementById("notifcation").innerHTML ="updated "

}
//intiate the cells 

function start () {
    document.getElementById("0").addEventListener('input',updateValues) ;
    document.getElementById("1").addEventListener('input',updateValues) ;
    document.getElementById("2").addEventListener('input',updateValues) ;

    
}


//get new value


// recalculate other cells 

start() ; 