import basil from '@/assets/toppings/basil.png'
import brocoli from '@/assets/toppings/brocoli.png'
import ham from '@/assets/toppings/ham.png'
import mushroom from '@/assets/toppings/mushroom.png'
import olive from '@/assets/toppings/olive.png'
import onion from '@/assets/toppings/onion.png'
import pepper from '@/assets/toppings/pepper.png'
import pepperoni from '@/assets/toppings/pepperoni.png'
import pineapple from '@/assets/toppings/pineapple.png'
import tomato from '@/assets/toppings/tomato.png'

export default {
  "/size": {
    "title": "Select Size",
    "options": [
      "small",
      "medium",
      "large"
    ],
    "link": {
      "text": "Add Toppings",
      "to": "/toppings"
    }
  },
  "/toppings": {
    "title": "Add Toppings",
    "options": [
      {
        text: "basil",
        image: basil,
      },
      {
        text: "brocoli",
        image: brocoli,
      },
      {
        text: "ham",
        image: ham,
      },
      {
        text: "mushroom",
        image: mushroom,
      },
      {
        text: "olive",
        image: olive,
      },
      {
        text: "onion",
        image: onion,
      },
      {
        text: "pepper",
        image: pepper,
      },
      {
        text: "pepperoni",
        image: pepperoni,
      },
      {
        text: "pineapple",
        image: pineapple,
      },
      {
        text: "tomato",
        image: tomato,
      },
    ],
    "link": {
      "text": "Confirm",
      "to": "/final"
    }
  },
  "/final": {
    "title": "Here's Your Pizza!",
    "actionText": "Make Another"
  }
}
