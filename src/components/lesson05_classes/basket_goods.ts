// Необходимо сделать корзину (Cart) на сайте,
//  которая имееет список продуктов (Product), добавленных в корзину
// и переметры доставки (Delivery). Для Cart реализовать методы:
//  - Добавить продукт в корзину
// - Удалить продукт из корзины по ID
// - Посчитать стоимость товаров в корзине
// - Задать доставку
// - Checkout - вернуть что всё ок, если есть продукты и параметры доставки
// Product: id, название и цена
// Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)
import {Simulate} from "react-dom/test-utils";
import timeUpdate = Simulate.timeUpdate;

class Products {
    constructor(
        public id: number,
        public title: string,
        public price: number
    ) {
    }
}

class Delivery {
    constructor(public date: Date) {
    }
}

class HomeDelivery extends Delivery {
    constructor(date: Date, public adress: string) {
        super(date)
    }
}

class ShopDelivery extends Delivery {
    constructor(public shopId: number) {
        super(new Date());
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

export class Card {
    private products: Products[] = [];
    private delivery: DeliveryOptions | undefined;

    public addProduct(product: Products): void{
     this.products.push(product);
    }

    public deleteProduct(productId: number): void{
     this.products = this.products.filter((p:Products) => p.id !== productId);
    }

    public getSum(): number{
     return this.products.map(p=> p.price).reduce((p1,p2)=> p1 + p2);
    }
    public setDelivery(delivery: DeliveryOptions): void{
     this.delivery = delivery;
    }

    public Checkout(){
     if (this.products.length === 0){
      throw new Error('You dont have any product')
     }
     if(!this.delivery){
      throw new Error('Add delivery options')
     }
     return {success: true}
    }
}

const card = new Card();
card.addProduct(new Products(0,'Apple',20));
card.addProduct(new Products(1,'Banana',15));
card.addProduct(new Products(2,'Kiwi',10));
card.deleteProduct(0);
card.setDelivery(new HomeDelivery(new Date(),''));
console.log(card.getSum());
console.log(card.Checkout());
