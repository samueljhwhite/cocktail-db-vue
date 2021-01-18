const drinks: DrinkData[] = [
  {
    id: "1",
    name: "Gin & Tonic",
    tags: ["Gin"],
    primaryIngredients: ["Gin", "Tonic Water"],
    description:
      "A highball cocktail made with gin and tonic water, poured over ice.",
    method: [
      "Lorem ipsum chunga bunga, liddi do-da. Horumph, horay",
      "Fugiat adipisicing deserunt quis proident.",
      "Consectetur elit do excepteur do qui ipsum velit voluptate officia proident reprehenderit consectetur mollit elit.",
      "Proident dolore ex enim aliqua aliqua ut.",
    ],
  },
  {
    id: "2",
    name: "Mojito",
    tags: ["White Rum"],
    primaryIngredients: ["Rum", "Soda Water"],
    description:
      "A traditional, white rum, Cuban highball. Poured over crushed ice.",
    method: [
      "Culpa ea labore officia eiusmod ullamco laboris culpa laborum anim minim quis cupidatat ex reprehenderit.",
      "Est sint commodo duis tempor ad esse officia.",
      "Eu ea culpa sit deserunt eiusmod veniam.",
      "Laborum ad commodo consequat enim veniam cupidatat minim minim Lorem.",
    ],
  },
  {
    id: "3",
    name: "Pina Colada",
    tags: ["Rum"],
    primaryIngredients: ["Rum"],
    description:
      "A sweet cocktail made with rum, cream of coconut or coconut milk.",
    method: [
      "Ad do commodo deserunt minim consequat laborum deserunt adipisicing id.",
      "Ipsum voluptate ut Lorem occaecat aute fugiat incididunt incididunt dolor eiusmod ex minim ipsum eu.",
      "Id ea elit anim Lorem.",
      "Tempor nisi incididunt aliqua reprehenderit tempor.",
    ],
  },
  {
    id: "4",
    name: "Margarita",
    tags: ["Tequila"],
    primaryIngredients: ["Tequila"],
    description:
      "Tequila, orange liqueur, and lime juice often served with salt on the rim.",
    method: [
      "Cillum est id irure sit anim enim in nostrud.",
      "Deserunt labore aute aliquip veniam nostrud magna occaecat eiusmod cillum nostrud mollit eiusmod nostrud deserunt.",
      "Eu qui nisi sunt ullamco.",
      "Sit id et tempor laboris ullamco id elit veniam pariatur ad.",
    ],
  },
  {
    id: "5",
    name: "Whiskey Sour",
    primaryIngredients: ["Bourbon Whisky"],
    tags: ["Bourbon", "Whiskey"],
    description:
      "Whiskey, lemon juice, sugar, and optionally, a dash of egg white.",
    method: [
      "Anim do sint reprehenderit velit exercitation cillum.",
      "Culpa cupidatat laborum cupidatat excepteur officia duis sunt labore ipsum.",
      "Lorem est tempor adipisicing velit officia ut dolor tempor irure officia voluptate duis.",
      "Qui quis do aliqua ullamco pariatur culpa elit amet deserunt et culpa Lorem.",
    ],
  },
  {
    id: "6",
    name: "Mary Pitchfork",
    primaryIngredients: ["Rum"],
    tags: ["Rum", "Liqueurs"],
    description:
      "White rum, pineapple juice, grenadine, and Maraschino liqueur.",
    method: [
      "Amet minim culpa sunt quis proident consequat non commodo enim ipsum quis proident.",
      "Ad laborum dolor et qui in voluptate in incididunt ex consequat incididunt amet incididunt.",
      "Occaecat cupidatat minim ullamco elit eu minim dolore ut aliqua.",
      "Occaecat amet reprehenderit exercitation amet commodo duis culpa sit reprehenderit.",
    ],
  },
  {
    id: "7",
    name: "Rossini",
    primaryIngredients: ["Prosecco White Wine"],
    tags: ["Wine"],
    description:
      "A strawberry variation of the bellini cocktail. Typically served in a Champagne flute.",
    method: [
      "Et minim ex nulla ad.",
      "Cupidatat do velit occaecat anim eiusmod eu ipsum ea eiusmod officia esse.",
      "Sunt anim dolore est Lorem nulla exercitation consequat.",
      "Adipisicing occaecat Lorem occaecat deserunt ut sunt commodo.",
    ],
  },
  {
    id: "8",
    name: "Cosmopolitan",
    primaryIngredients: ["Vodka"],
    tags: ["Vodka"],
    description: "Vodka, triple sec, cranberry juice, and squeezed lime juice.",
    method: [
      "Fugiat ut consectetur eu dolore excepteur non proident magna duis est elit.",
      "Officia aute anim ut occaecat eiusmod est laborum laborum duis officia est tempor minim.",
      "Nisi exercitation commodo fugiat anim laboris deserunt tempor aliqua anim voluptate irure.",
      "Aliquip proident incididunt dolor anim.",
    ],
  },
  {
    id: "9",
    name: "Americana",
    primaryIngredients: ["Prosecco White Wine", "Bitters"],
    tags: ["Wine"],
    description:
      "Campari, sweet vermouth, and for the sparkling version, club soda and lemon.",
    method: [
      "Quis aliquip duis velit ut minim aute adipisicing esse sit labore.",
      "Mollit exercitation labore laborum magna.",
      "Occaecat commodo sint incididunt eiusmod enim.",
      "Officia incididunt do anim exercitation velit.",
    ],
  },
  {
    id: "10",
    name: "Vanilla Pear Drop",
    primaryIngredients: ["Vodka"],
    tags: ["Vodka"],
    description:
      "Grey Goose vodka, squeezed lemon juice, and pear & vanilla syrup.",
    method: [
      "Do labore velit ad mollit eu pariatur ut consequat reprehenderit nostrud cillum sunt.",
      "Reprehenderit adipisicing qui voluptate culpa id sunt nostrud eiusmod quis amet.",
      "Dolore consectetur cupidatat officia fugiat sit labore cupidatat fugiat qui et quis officia ut.",
      "Dolore culpa consequat cupidatat nostrud nulla excepteur adipisicing mollit et laboris eiusmod pariatur.",
    ],
  },
  {
    id: "11",
    name: "Treacle Cocktail",
    primaryIngredients: ["Rum", "Bitters"],
    tags: ["Rum"],
    description: "Rum, sugar syrup, served over ice, with a lemon wedge.",
    method: [
      "Ad culpa ea duis magna quis incididunt labore minim enim enim sint consequat ipsum cillum.",
      "Sint nulla nostrud amet dolore anim excepteur.",
      "Ut consequat consequat non elit veniam ut.",
      "Exercitation cillum anim irure pariatur duis do anim.",
    ],
  },
  {
    id: "12",
    name: "Hot Toddy",
    primaryIngredients: ["Whisky"],
    tags: ["Whiskey", "Served Hot"],
    description:
      "Whiskey, honey syrup, hot water, cloves, and lemon juice; served warm.",
    method: [
      "Incididunt deserunt sint Lorem aute aliqua nisi enim exercitation culpa adipisicing reprehenderit ad.",
      "Magna dolore consequat laboris et ut proident minim anim incididunt.",
      "Nostrud pariatur amet est eiusmod minim nulla.",
      "Consectetur laborum mollit adipisicing excepteur nisi nisi occaecat.",
      "Dolor dolore irure ea duis culpa fugiat duis consequat nisi consequat deserunt ipsum.",
    ],
  },
  {
    id: "16",
    name: "Margarita",
    tags: ["Tequila"],
    primaryIngredients: ["Tequila"],
    description:
      "Tequila, orange liqueur, and lime juice often served with salt on the rim.",
    method: [
      "Cillum est id irure sit anim enim in nostrud.",
      "Deserunt labore aute aliquip veniam nostrud magna occaecat eiusmod cillum nostrud mollit eiusmod nostrud deserunt.",
      "Eu qui nisi sunt ullamco.",
      "Sit id et tempor laboris ullamco id elit veniam pariatur ad.",
    ],
  },
  {
    id: "17",
    name: "Whiskey Sour",
    primaryIngredients: ["Bourbon Whisky"],
    tags: ["Bourbon", "Whiskey"],
    description:
      "Whiskey, lemon juice, sugar, and optionally, a dash of egg white.",
    method: [
      "Anim do sint reprehenderit velit exercitation cillum.",
      "Culpa cupidatat laborum cupidatat excepteur officia duis sunt labore ipsum.",
      "Lorem est tempor adipisicing velit officia ut dolor tempor irure officia voluptate duis.",
      "Qui quis do aliqua ullamco pariatur culpa elit amet deserunt et culpa Lorem.",
    ],
  },
  {
    id: "18",
    name: "Mary Pitchfork",
    primaryIngredients: ["Rum"],
    tags: ["Rum", "Liqueurs"],
    description:
      "White rum, pineapple juice, grenadine, and Maraschino liqueur.",
    method: [
      "Amet minim culpa sunt quis proident consequat non commodo enim ipsum quis proident.",
      "Ad laborum dolor et qui in voluptate in incididunt ex consequat incididunt amet incididunt.",
      "Occaecat cupidatat minim ullamco elit eu minim dolore ut aliqua.",
      "Occaecat amet reprehenderit exercitation amet commodo duis culpa sit reprehenderit.",
    ],
  },
  {
    id: "13",
    name: "Gin & Tonic",
    tags: ["Gin"],
    primaryIngredients: ["Gin", "Tonic Water"],
    description:
      "A highball cocktail made with gin and tonic water, poured over ice.",
    method: [
      "Lorem ipsum chunga bunga, liddi do-da. Horumph, horay",
      "Fugiat adipisicing deserunt quis proident.",
      "Consectetur elit do excepteur do qui ipsum velit voluptate officia proident reprehenderit consectetur mollit elit.",
      "Proident dolore ex enim aliqua aliqua ut.",
    ],
  },
  {
    id: "14",
    name: "Mojito",
    tags: ["White Rum"],
    primaryIngredients: ["Rum", "Soda Water"],
    description:
      "A traditional, white rum, Cuban highball. Poured over crushed ice.",
    method: [
      "Culpa ea labore officia eiusmod ullamco laboris culpa laborum anim minim quis cupidatat ex reprehenderit.",
      "Est sint commodo duis tempor ad esse officia.",
      "Eu ea culpa sit deserunt eiusmod veniam.",
      "Laborum ad commodo consequat enim veniam cupidatat minim minim Lorem.",
    ],
  },
  {
    id: "15",
    name: "Pina Colada",
    tags: ["Rum"],
    primaryIngredients: ["Rum"],
    description:
      "A sweet cocktail made with rum, cream of coconut or coconut milk.",
    method: [
      "Ad do commodo deserunt minim consequat laborum deserunt adipisicing id.",
      "Ipsum voluptate ut Lorem occaecat aute fugiat incididunt incididunt dolor eiusmod ex minim ipsum eu.",
      "Id ea elit anim Lorem.",
      "Tempor nisi incididunt aliqua reprehenderit tempor.",
    ],
  },
  {
    id: "19",
    name: "Rossini",
    primaryIngredients: ["Prosecco White Wine"],
    tags: ["Wine"],
    description:
      "A strawberry variation of the bellini cocktail. Typically served in a Champagne flute.",
    method: [
      "Et minim ex nulla ad.",
      "Cupidatat do velit occaecat anim eiusmod eu ipsum ea eiusmod officia esse.",
      "Sunt anim dolore est Lorem nulla exercitation consequat.",
      "Adipisicing occaecat Lorem occaecat deserunt ut sunt commodo.",
    ],
  },
  {
    id: "20",
    name: "Cosmopolitan",
    primaryIngredients: ["Vodka"],
    tags: ["Vodka"],
    description: "Vodka, triple sec, cranberry juice, and squeezed lime juice.",
    method: [
      "Fugiat ut consectetur eu dolore excepteur non proident magna duis est elit.",
      "Officia aute anim ut occaecat eiusmod est laborum laborum duis officia est tempor minim.",
      "Nisi exercitation commodo fugiat anim laboris deserunt tempor aliqua anim voluptate irure.",
      "Aliquip proident incididunt dolor anim.",
    ],
  },
  {
    id: "22",
    name: "Vanilla Pear Drop",
    primaryIngredients: ["Vodka"],
    tags: ["Vodka"],
    description:
      "Grey Goose vodka, squeezed lemon juice, and pear & vanilla syrup.",
    method: [
      "Do labore velit ad mollit eu pariatur ut consequat reprehenderit nostrud cillum sunt.",
      "Reprehenderit adipisicing qui voluptate culpa id sunt nostrud eiusmod quis amet.",
      "Dolore consectetur cupidatat officia fugiat sit labore cupidatat fugiat qui et quis officia ut.",
      "Dolore culpa consequat cupidatat nostrud nulla excepteur adipisicing mollit et laboris eiusmod pariatur.",
    ],
  },
  {
    id: "23",
    name: "Treacle Cocktail",
    primaryIngredients: ["Rum", "Bitters"],
    tags: ["Rum"],
    description: "Rum, sugar syrup, served over ice, with a lemon wedge.",
    method: [
      "Ad culpa ea duis magna quis incididunt labore minim enim enim sint consequat ipsum cillum.",
      "Sint nulla nostrud amet dolore anim excepteur.",
      "Ut consequat consequat non elit veniam ut.",
      "Exercitation cillum anim irure pariatur duis do anim.",
    ],
  },
  {
    id: "24",
    name: "Hot Toddy",
    primaryIngredients: ["Whisky"],
    tags: ["Whiskey", "Served Hot"],
    description:
      "Whiskey, honey syrup, hot water, cloves, and lemon juice; served warm.",
    method: [
      "Incididunt deserunt sint Lorem aute aliqua nisi enim exercitation culpa adipisicing reprehenderit ad.",
      "Magna dolore consequat laboris et ut proident minim anim incididunt.",
      "Nostrud pariatur amet est eiusmod minim nulla.",
      "Consectetur laborum mollit adipisicing excepteur nisi nisi occaecat.",
      "Dolor dolore irure ea duis culpa fugiat duis consequat nisi consequat deserunt ipsum.",
    ],
  },
  {
    id: "21",
    name: "Americana",
    primaryIngredients: ["Prosecco White Wine", "Bitters"],
    tags: ["Wine"],
    description:
      "Campari, sweet vermouth, and for the sparkling version, club soda and lemon.",
    method: [
      "Quis aliquip duis velit ut minim aute adipisicing esse sit labore.",
      "Mollit exercitation labore laborum magna.",
      "Occaecat commodo sint incididunt eiusmod enim.",
      "Officia incididunt do anim exercitation velit.",
    ],
  },
];

interface DrinkData {
  id: string;
  name: string;
  tags: string[];
  primaryIngredients: string[];
  description: string;
  method: string[];
}

export { drinks, DrinkData };
