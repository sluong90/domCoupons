//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow:
let finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.';

const getDisclaimer = document.getElementById('disclaimer');
getDisclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
const cookies = 'Nabisco'

const getBrand1 = document.getElementById('brand1');
getBrand1.innerHTML = cookies;

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
const getItem1 = document.getElementById('item1');
getItem1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
const getPrice1 = document.getElementById('price1');
getPrice1.innerHTML = '$8.99';


//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
const getDiscount1 = document.getElementById('discount1');
getDiscount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

const ginItem2 = document.createElement('div');
ginItem2.id = 'item2';
ginItem2.innerHTML = 'Hendrink\'s Gin';
brand2.appendChild(ginItem2);


//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
const ginPrice2 = document.createElement('div');
ginPrice2.id = 'price2';
ginPrice2.innerHTML = '$34.99';
ginItem2.appendChild(ginPrice2);


//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
const blockName = document.getElementsByClassName('block3');
const btnDiscount3 = document.createElement('button');
btnDiscount3.id = 'discount3';
btnDiscount3.innerHTML = '50% OFF Axe Body Soap';
blockName[0].appendChild(btnDiscount3);


//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
const itemBox = document.getElementsByClassName('item');
itemBox[0].innerHTML = 'Orange Chicken';


//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
const blockElement2 = document.getElementsByClassName('block2');
const btnDiscountShirt = document.createElement('button');
btnDiscountShirt.className = 'discount';
btnDiscountShirt.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
blockElement2[1].appendChild(btnDiscountShirt);




//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

const brandBox = document.getElementsByClassName('brand')
brandBox[1].innerHTML = 'Uniqlo';



//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
const priceBox = document.getElementsByClassName('price');
priceBox[1].innerHTML ='10,000';


//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
const headphoneBrand = document.createElement('div');
headphoneBrand.className = 'brand';
headphoneBrand.innerHTML = 'Hifiman Shangri-La';
blockName[1].appendChild(headphoneBrand);


//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
const itemHeadphone = document.createElement('div');
itemHeadphone.className = 'item';
itemHeadphone.innerHTML = 'Electronstatic Headphones'
blockName[1].appendChild(itemHeadphone);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
const headphonePrice = document.createElement('div');
headphonePrice.className = 'price';
headphonePrice.innerHTML = '$18,000';
blockName[1].appendChild(headphonePrice);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
const btnHeadphone = document.createElement('button');
btnHeadphone.className = 'discount';
btnHeadphone.innerHTML = 'Free Barry Manilow CD with purchase!';
blockName[1].appendChild(btnHeadphone);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!
brandBox[3].innerHTML = 'H&M';
itemBox[3].innerHTML = 'Unicorn-Head Slippers';
priceBox[3].innerHTML = '$21.99';

var btnDiscountBox = document.getElementsByClassName('discount');
btnDiscountBox[3].innerHTML = 'Free knee-high tube socks with purchase';



//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.
brandBox[4].innerHTML = 'Frito Lay';
itemBox[4].innerHTML = 'Poppin\' Jalapeno Doritos';
priceBox[4].innerHTML = '$7.77';
btnDiscountBox[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!
brandBox[5].innerHTML = 'Any Dog Breeder';
itemBox[5].innerHTML = 'Baby Puggy';
priceBox[5].innerHTML = 'Priceless';
btnDiscountBox[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.
var newImageBox = document.getElementsByTagName('img');
newImageBox[6].innerHTML = 

brandBox[6].innerHTML = 'Appo';
itemBox[6].innerHTML = 'iFone Z';
priceBox[6].innerHTML = 'Item will go to highest bidder!';
btnDiscountBox[6].innerHTML = 'Free iSpeaker with Purchase!';