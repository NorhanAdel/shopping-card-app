let user_info=document.querySelector('.user_info');
let user=document.getElementById('user');
let user_Dtat=document.querySelector('.link');
if(localStorage.getItem('username')){
   user_Dtat.remove();
   user_info.style.display='flex';
   user.innerHTML=localStorage.getItem('username');
}
let logoutbtn =document.querySelector('.logout');
logoutbtn.addEventListener('click',function(){
   localStorage.clear();
   setTimeout(()=>{
      window.location='register.html';
   },1500)
})