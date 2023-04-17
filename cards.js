let producctincart=localStorage.getItem('productcart');
let allproduct=document.querySelector('.products');
if(producctincart){
    let item =JSON.parse(producctincart);
    draw_items(item);
}
function draw_items(products){
    let y=products.map(item =>{
 return `<div class="product_item">
 <img src="${item.imgeurl}" alt="">
  <div class="dis">
     <h2>${item.title}</h2>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam, expedita.</p>
  </div>
 
 <div class="product_action">
 <button class="add_to_cart" onClick="addToCart(${item.id})">Remove</button>
 
 </div>
 </div>`
    })
 
    allproduct.innerHTML=y;
 }
 