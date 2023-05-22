import apple from '../images/apple.svg';
import breadEgg from '../images/bread-egg.svg';
import carrot from '../images/carrot.svg';
import cheeseburger from '../images/cheeseburger.svg';
import cherries from '../images/cherries.svg';
import cookie from '../images/cookie.svg';
import donut from '../images/donut.svg';
import frenchFries from '../images/french-fries.svg';
import friedChicken from '../images/fried-chicken.svg';
import grapes from '../images/grapes.svg';
import hotdog from '../images/hotdog.svg';
import iceCupcake from '../images/ice-cupcake.svg';
import lemon from '../images/lemon.svg';
import macaronCookies from '../images/macaron-cookies.svg';
import pear from '../images/pear.svg';
import pizza from '../images/pizza.svg';
import popcorn from '../images/popcorn.svg';
import softIceCream from '../images/soft-ice-cream.svg';
import strawberryMagnum from '../images/strawberry-magnum.svg';
import vanillaCupcake from '../images/vanilla-cupcake.svg';
import slicedPizza from '../images/sliced-pizza.svg';

export const getRandomItems = (size, history) => {
  let tempMap = new Set();
  let arr = [];
  let index;
  for (let i = 0; i < size; i++) {
    do {
      index = Math.floor(Math.random() * cards.length);
    } while (tempMap.has(cards[index].name));
    tempMap.add(cards[index].name);
    arr.push(cards[index]);
  }
  return arr;
};

const cards = [
  {
    name: 'Apple',
    path: apple,
  },
  {
    name: 'Toast with eggs',
    path: breadEgg,
  },
  {
    name: 'Carrot',
    path: carrot,
  },
  {
    name: 'Cheeseburger',
    path: cheeseburger,
  },
  {
    name: 'Cherries',
    path: cherries,
  },
  {
    name: 'Cookies',
    path: cookie,
  },
  {
    name: 'Donut',
    path: donut,
  },
  {
    name: 'French Fries',
    path: frenchFries,
  },
  {
    name: 'Fried Chicken',
    path: friedChicken,
  },
  {
    name: 'Grapes',
    path: grapes,
  },
  {
    name: 'Hotdog',
    path: hotdog,
  },
  {
    name: 'Iced Cupcake',
    path: iceCupcake,
  },
  {
    name: 'Lemon',
    path: lemon,
  },
  {
    name: 'Macarons',
    path: macaronCookies,
  },
  {
    name: 'Pear',
    path: pear,
  },
  {
    name: 'Pizza',
    path: pizza,
  },
  {
    name: 'Popcorn',
    path: popcorn,
  },
  {
    name: 'Ice Cream',
    path: softIceCream,
  },
  {
    name: 'Strawberry Magnum',
    path: strawberryMagnum,
  },
  {
    name: 'Vanilla Cupcake',
    path: vanillaCupcake,
  },
  {
    name: 'Sliced Pizza',
    path: slicedPizza,
  },
];
