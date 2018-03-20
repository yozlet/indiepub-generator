/**
 * @author Yoz & co.
 * 
 * Most of these words and rules come from replies to this thread:
 * https://twitter.com/emilyhughes/status/975896813139124224
 */

var grammar = {

  // Words for rules

  clothesAdjective: [
    "Tight",
    "Skinny",
    "Velvet",
    "Linen",
    "Black",
    "Skimpy",
    "Denim",
    "Baggy",
    "Sparkly",
    "Sleek",
    "Warm",
    "Leather",
    "Feather",
    "Mustard",
    "Stretchy",
    "Loose",
    "Drapey",
    
  ],

  designElement: [
    "Waterfall",
    "Aspidistra",
    "Skylight",
    "Awning",
    "Birch",
    "Rockface",
    "Seaglass",
    "Vine",
    "Rocks",
    "Skull",
    "Creek",
    "Branch",
    "Succulent",
    "Cat",
    "Gecko",
    "Stones",


  ],

  favColour: [
    "Cerulean",
    "Black",
    "Vantablack",
    "Purple",
    "Scarlet",
    "Brick Red",
    "Yellow",
    "Navy Blue",
    "Russet",

  ],

  industrialInfrastructure: [
    "Airport",
    "Freight Train",
    "Power Plant",
    "Warehouse",
    "Grain Storage",
    "Water Tower",
    "Bus Depot",
    "Factory",
    "Storm Drain",

  ],

  unsuitableMaterial: [
    "Marzipan",
    "Crepe Paper",
    "Balsa",
    "Spelt",
    "Lycra",
    "Wax",
    "Tortilla",
    "Reconstituted Potato",
    "Vaseline",
    "Gouda",

  ],

  // Rules that use/combine words

  origin: [
    "#clothesAdjective# #designElement#",
    "#favColour# #industrialInfrastructure#",
    "#unsuitableMaterial# House",
    "#favColour# #unsuitableMaterial# Hotel",

  ]    

}
