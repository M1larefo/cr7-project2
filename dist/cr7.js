const go=document.querySelector('.go')
const cr7_moving = document.querySelector('.cr7-moving')
const cr7_stand_copy = document.querySelector('.cr7-stand-copy')
const cr7_stand = document.querySelector('.cr7-stand')
const cr7_pregoon = document.querySelector('.cr7-pregoon')
const cr7_goon = document.querySelector('.cr7-goon')
const messi_stand=document.querySelector('.messi-stand')
const messi=document.querySelector('.messi')
const ball=document.querySelector('.ball')
const speedinput=document.querySelector('.speedinput');
const setspeed=document.querySelector('.set')
const siu=document.querySelector('.siu')
const siuu=document.querySelector('.siuu')
const goon = document.querySelector('.goon');
const orgasm = document.querySelector('.orgasm')
const tribune = document.querySelector('.tribune');
const tribune2 = document.querySelector('.tribune2');
const cum = document.querySelector('.cum')
let count=0;

function init(){
   
go.addEventListener('click', () => {
   
   tribune2.currentTime=0.2;
   tribune2.volume = 0.2;
   tribune2.play()
   console.log(count)
     if(count % 2 == 0){
      count++;
      
setTimeout(()=>{
   if(count % 2 !== 0){
   ball.style.display='block';
      cr7_moving.style.display = 'none';
    cr7_stand.style.display = 'block';
     cr7_stand.style.left ='46%';
  cr7_stand.style.top ='140px';
  setTimeout(()=>{
      if(count % 2 !== 0){
  ball.style.left='17%';
   ball.style.top='280px';
    cr7_stand.style.display = 'none';
 cr7_pregoon.style.display = 'block';
 cr7_pregoon.style.left = '32.6%';
 cr7_pregoon.style.top = '120px';
 tribune.currentTime = 0.1;
 setTimeout(() => {
   tribune2.volume = 0.6;
 tribune.play()
 },100)

 setTimeout(()=>{
   if(count % 2 !== 0){
 cr7_pregoon.style.display = 'none';
 cr7_goon.style.display='block';
  goon.addEventListener('click', () =>{
   cum.play();
orgasm.play()
 })
   }
 },700)
}
  },600)
}
    },1500)
   
    go.style.background = 'linear-gradient(45deg, rgba(207, 64, 56, 1), rgba(228, 151, 17, 1)';
    go.innerText = 'RESET';
    cr7_moving.style.display = 'block';
 cr7_moving.style.left ='47%';
  cr7_moving.style.top ='140px';
    cr7_stand_copy.style.display = 'none';
    cr7_stand.style.display = 'none';
    messi.style.display = 'block';
    messi_stand.style.display = 'none';
    messi.style.left='28%';
   messi.style.top='140px';
     }else{
      count++;
       go.style.background = 'linear-gradient(45deg, rgb(56, 207, 56), rgb(42, 165, 184)';
    go.innerText = 'GO';
    cr7_moving.style.display = 'none';
 cr7_moving.style.left ='47%';
  cr7_moving.style.top ='140px';
    cr7_stand_copy.style.display = 'block';
    cr7_stand.style.display = 'none';
    messi.style.display = 'none';
    messi_stand.style.display = 'block';
    messi.style.left='28%';
   messi.style.top='140px';
    cr7_pregoon.style.display = 'none';
 cr7_goon.style.display='none';
    ball.style.display='none';
    ball.style.left='47.4%';
   ball.style.top='310px';
     }
    
})


 setspeed.addEventListener('click' , () => {

   if(speedinput.value !== null ){
      var speed='0';
      if(parseInt(speedinput.value) < 1){
 speed=0.5*(100*parseInt(speedinput.value));
      }else{
   speed=0.5/parseInt(speedinput.value);
      }

cr7_goon.style.animation = 'none';
void cr7_goon.offsetWidth;
cr7_goon.style.animation = `${speed}5s ease-out  normal infinite goon`;
   }
 })

 siu.addEventListener('click' , () => {
   siuu.currentTime = 4.75;
  siuu.play()
 })

}

init();