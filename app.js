 let user_info=document.querySelector('.user_info');
 let user=document.getElementById('user');
 let user_Dtat=document.querySelector('.link');
 if(localStorage.getItem('username')){
    user_Dtat.remove();
    user_info.style.display='flex';
    user.innerHTML=localStorage.getItem('username');
 }
let allproduct=document.querySelector('.products');


let logoutbtn =document.querySelector('.logout');
logoutbtn.addEventListener('click',function(){
   localStorage.clear();
   setTimeout(()=>{
      window.location='login.html';
   },1500)
})
let products=[
   {
      id:1,
      title:'fresh fruit',
      imgeurl:'1.png'
   },

   {
      id:2,
      title:'chicken',
      imgeurl:'3.png'
   },

   {
      id:3,
      title:'soup',
      imgeurl:'4.png'
   },
   {
      id:4,
      title:'salad',
      imgeurl:'5.png'
   },

   {
      id:4,
      title:'fresh fruit',
      imgeurl:'1.png'
   },


]
function draw_item(){
   let y=products.map(item =>{
return `<div class="product_item">
<img src="${item.imgeurl}" alt="">
 <div class="dis">
    <h2>${item.title}</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, expedita.</p>
 </div>

<div class="product_action">
<button class="add_to_cart" onClick="addToCart(${item.id})">add to cart</button>
<i class="far fa-heart fav"></i>
</div>
</div>`
   })

   allproduct.innerHTML=y;
}

  draw_item();

let badge=document.querySelector('.badge');


let dataitem=[];

 
    if(localStorage.getItem =('username')){
      function addToCart(id){
         let chossen_product=products.find((item)=> item.id == id)
          cartpoductdiv.innerHTML +=`<p>${chossen_product.title}</p>`;
          dataitem=[...dataitem,chossen_product];
          localStorage.setItem('productcart', JSON.stringify(dataitem));
         let cardproductlenght=document.querySelectorAll('.cart_products div p');
         // console.log(cardproductlenght.length)
         badge.style.display='block';
         badge.innerHTML=cardproductlenght.length;
         
          }
   }else{
      window.location='login.html';
   }
 
  let cartpoductdiv=document.querySelector('.cart_products div');
 
 let cart =document.querySelector('.shopping_cart');
 let cart_product=document.querySelector('.cart_products')
 cart.addEventListener('click',function(){
   if(cartpoductdiv !=''){
if(cart_product.style.display=='block'){
   cart_product.style.display='none'
}
else{
   cart_product.style.display='block';
}
   }
 })