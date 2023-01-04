let randNum = Math.floor(Math.random()*101);
x = 0

function GN(){
    const Guess_Number =document.getElementById('G_N').value;
    if(Guess_Number > randNum){
         alert("มากกว่า")
     }
     else if (Guess_Number == randNum){
         alert("ถูกต้อง ค่าที่ถูกคือ"+randNum+":คุณทายไปทั้งหมด:"+x+"ครั้ง")
     }
     else if(Guess_Number < randNum){
         alert("น้อยกว่า")
     }
    x= x+1
}
