import { Vue, Component } from "vue-property-decorator";
import DrinkCard from "@/components/DrinkCard/DrinkCard.vue";
import { DrinkData } from "@/components/DrinkCard/DrinkCard.ts";

@Component({
  components: {
    DrinkCard,
  },
})
export default class Drinks extends Vue {
  protected drinksArray: DrinkData[] = [
    {
      name: "Gin & Tonic",
      tags: ["Gin"],
      primaryIngredients: ["Gin", "Tonic Water"],
      description:
        "A highball cocktail made with gin and tonic water poured over a large amount of ice.",
      method: [
        "Lorem ipsum chunga bunga, liddi do-da. Horumph, horay",
        "Fugiat adipisicing deserunt quis proident.",
        "Consectetur elit do excepteur do qui ipsum velit voluptate officia proident reprehenderit consectetur mollit elit.",
        "Proident dolore ex enim aliqua aliqua ut.",
      ],
    },
    {
      name: "Mojito",
      tags: ["White Rum"],
      primaryIngredients: ["White Rum", "Soda Water"],
      description: "A traditional, white rum, Cuban highball. Poured over crushed ice.",
      method: [
        "Culpa ea labore officia eiusmod ullamco laboris culpa laborum anim minim quis cupidatat ex reprehenderit.",
        "Est sint commodo duis tempor ad esse officia.",
        "Eu ea culpa sit deserunt eiusmod veniam.",
        "Laborum ad commodo consequat enim veniam cupidatat minim minim Lorem.",
      ],
    },
  ];

  protected addToList() {
    console.log("Function!");
  }
}
