class Meal {
    constructor(initPhrase, carbo, protein, fat) {
        this._initPhrase = initPhrase; 
        this._carbo = carbo;
        this._protein = protein;
        this._fat = fat;      
    }

    get initPhrase() { return this._initPhrase; }
    get carbo() { return this._carbo; }
    get protein() { return this._protein; }
    get fat() { return this._fat; }

    set initPhrase(newInitPhrase) { this._initPhrase = newInitPhrase; }
    set carbo(newCarbo) { this._carbo = newCarbo; }
    set protein(newProtein) { this._protein = newProtein; }
    set fat(newFat) { this._fat = newFat; } 
    
    randomNumber(arr) { return Math.floor(Math.random()*arr.length); }

    mealCombination() {
        const randomInitPhrase = this.randomNumber(this._initPhrase);
        const randomCarbo = this.randomNumber(this._carbo);
        const randomProtein = this.randomNumber(this._carbo);
        const randomFat = this.randomNumber(this._carbo);
        return `${this._initPhrase[randomInitPhrase]} ${this._carbo[randomCarbo]} with ${this._protein[randomProtein]} and ${this._fat[randomFat]}.`
    }
    
}
/*
const initPhraseArr = ["i1", "i2", "i3"];
const carboArr = ["c1", "c2", "c3"];
const proteinArr = ["p1", "p2", "p3"];
const fatArr = ["f1", "f2", "f3"];
*/

const initPhraseArr = [
    "Enjoy a delicious",
    "Prepare a delightful",
    "Indulge in a savory",
    "Relish a tasty",
    "Feast on a mouth-watering",
    "Savor a delectable",
    "Experience a luscious",
    "Delight in a scrumptious",
    "Treat yourself to a delightful",
    "Devour a satisfying"
];

const carboArr = [
    "integral rice",
    "quinoa",
    "whole wheat pasta",
    "sweet potatoes",
    "oats",
    "barley",
    "brown rice",
    "couscous",
    "millet",
    "bulgur wheat"
];

const proteinArr = [
    "grilled chicken",
    "tofu",
    "baked salmon",
    "lentils",
    "turkey breast",
    "black beans",
    "shrimp",
    "tempeh",
    "lean beef",
    "chickpeas"
];

const fatArr = [
    "avocado",
    "olive oil",
    "chia seeds",
    "almonds",
    "walnuts",
    "flaxseeds",
    "hemp seeds",
    "coconut oil",
    "pumpkin seeds",
    "sunflower seeds"
];

const meal1 = new Meal(initPhraseArr, carboArr, proteinArr, fatArr);
//console.log(meal1.carbo);
//meal1.carbo = "carbo2";
//console.log(meal1.carbo);
//console.log(meal1.randomNumber(carboArr))
const mealCombination = meal1.mealCombination();


console.log(mealCombination)

let mealText = document.getElementById('meal');
mealText.innerHTML = mealCombination;
