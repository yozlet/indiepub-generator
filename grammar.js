/**
 * @author Yoz & co.
 */

var grammar = {

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

  origin: [
    "#clothesAdjective# #designElement#",
    "#favColour# #industrialInfrastructure#",
  ]    

}
