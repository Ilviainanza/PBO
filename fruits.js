class FruitBasket {
    constructor() {
        this.fruits = [];
    }

    addItem(item) {
        this.fruits.push(item);
        console.log(`kamu baru saja menambahkan ${item}`);
    }

    getInformation () {
        console.log(`list buah dikeranjang ${this.fruits}`);
    }
}

const fruits = new FruitBasket();
fruits.addItem("jeruk");
fruits.addItem("apel");
fruits.getInformation();