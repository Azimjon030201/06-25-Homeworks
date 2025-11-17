class Cofeshop {
    name;
    menu;
    orders;
    constructor(name, menu){
        this.name = name;
        this.menu = menu;
        this.orders = [];
    }
    addOrder(order){
        let menuItem = this.menu.find(item => item.item === order);
        if(menuItem){
            this.orders.push(menuItem);
            return "Order added!";
        } else {
            return "This item is currently unavailable?";
        }
    }
    fulfillOrder(){
        if(this.orders.length > 0){
            return this.orders.shift();
        }else {
            return null;
        }
    }
    listOrders(){
        return this.orders;
    }
    dueAmount(){
        return this.orders.reduce((total, order) => total + order.price, 0);
    }
    cheapestItem(){
        return this.menu.reduce((cheapest, item) => {
            if(item.price < cheapest.price){
                return item;
            }
            return cheapest;
        }, this.menu[0]);
    }
    drinksOnly(){
        return this.menu.filter(item => item.type === "drink");
    }
    foodOnly(){
        return this.menu.filter(item => item.type === "food");
    }
}

let menu = [
    {item: "Coffe", type: "Drink", price: 5},
    {item: "choy", type: "Drink", price: 2},
    {item: "HotDog", type: "Food", price: 20},
    {item: "Pizza ", type: "Food", price: 42},
    {item: "Pepsi", type: "Drink", price: 15},
    {item: "Burger", type: "Food", price: 35},
    {item: "Sandvich", type: "Food", price: 25},
]
console.log(menu.drinksOnly());