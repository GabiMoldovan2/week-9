function product(name , price){
  this.name = name;
  this.price = price

}
function cart(){
  this.product = [];
}

cart.prototype.addProduct = function(product){
  this.product.push(product);

}

cart.prototype.removeProduct = function(product){
  let index = this.products.indexOf(product); 
  if(index !== -1){
      this.products.splice(index,1);    
  }
}

cart.prototype.getTotalPrice = function(){
  let totalPrice = 0;
  for(let product of this.product){
      totalPrice = product.price
  }
  return console.log(totalPrice + '$');
}

function discountedProducts(name , price, discount){
    product.call(this, name, price);
    this.discount = discount;

}

discountedProducts.prototype.getPrice = function(){
    let afterDiscount = this.price -(this.price * this.discount)/100;
    return console.log(afterDiscount + '$')
}

let firstProduct = new product('shirt',50)
let secondProduct = new product('pants',40)
let thirdProduct = new product('hat',15);

let cart1 = new cart();

cart1.addProduct(firstProduct);
cart1.addProduct(secondProduct);
cart1.addProduct(thirdProduct);
console.log(cart1);

cart1.getTotalPrice();

let discountedProduct1 = new discountedProducts('shirt',70,9);
let discountedProduct2 = new discountedProducts('pants',45,7);
let discountedProduct3 = new discountedProducts('hat',10,4);

discountedProduct1.getPrice();
discountedProduct2.getPrice();
discountedProduct3.getPrice();