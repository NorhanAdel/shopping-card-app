let username=document.getElementById('username');
 
let password=document.getElementById('password');
let login_btn=document.getElementById('sign_up');
let local_username=localStorage.getItem('username');
let local_password=localStorage.getItem('password');
login_btn.addEventListener('click',function(e){
e.preventDefault();
if(username.value ==''||password.value ==''){
    alert('please fill data');

}
else{
    if(local_username && local_username.trim() === username.value.trim() && local_password && local_password.trim()=== password.value){
        setTimeout(()=>{
            window.location='app.html';
        },1500)
    }
    else{
        alert('wrong data');

    }
}

}) 
 