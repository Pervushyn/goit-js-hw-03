// 'use strict';
// function getShippingCost(country) {
//    let price;
//     switch (country) {
//         case "China":
//             price = 100;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break;
//         case "Chile":
//             price = 250;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break; 
//         case "Australia":
//             price = 170;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break; 
//         case "Jamaica":
//             price = 120;
//             return `Shipping to ${country} will cost ${price} credits`;
//             break; 
//         default:
//                 return "Sorry, there is no delivery to your country";
//     }
// }
// console.log(getShippingCost("Australia")); 
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile")); 
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));
'use strict';
function slugify(title) {
    var lowercaseTitle = title.toLowerCase();
    var words = lowercaseTitle.split(" ");
    var slug = words.join("-");
    return slug;
  }
console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"