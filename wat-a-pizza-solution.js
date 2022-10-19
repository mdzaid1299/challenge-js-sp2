let menu = [
    {
        'category': 'Beverages',
        'name': 'Coke',
        'price': 1.5
    },
    {
        'category': 'Starters',
        'name': 'Garlic Bread',
        'price': 2.8
    },
    {
        'category': 'Starters',
        'name': 'Mozzarella Sticks',
        'price': 5.5
    },
    {
        'category': 'Main Meal',
        'name': 'Medium Size Margherita Pizza',
        'price': 11
    },
    {
        'category': 'Beverages',
        'name': 'Iced Tea',
        'price': 1.25
    },
    {
        'category': 'Starters',
        'name': 'Greek Wedge Salad',
        'price': 4.5
    },
    {
        'category': 'Main Meal',
        'name': 'Veg Family Meal',
        'price': 13.25
    },
    {
        'category': 'Main Meal',
        'name': 'Large Size Vegan Pepperoni Pizza',
        'price': 14.5
    }
]
const order = {
    'items': [
        {
            'name': 'Mozzarella Sticks',
            'price': 5.5,
            'quantity': 2
        },
        {
            'name': 'Garlic Bread',
            'price': 2.8,
            'quantity': 2
        },
        {
            'name': 'Coke',
            'price': 1.5,
            'quantity': 3
        },
        {
            'name': 'Medium Size Margherita Pizza',
            'price': 11,
            'quantity': 2
        },
        {
            'name': 'Iced Tea',
            'price': 1.25,
            'quantity': 1
        },
        {
            'name': 'Veg Family Meal',
            'price': 13.25,
            'quantity': 2
        },
    ]
};

//Write function to filter menu items by Category and sort them alphabetically
function listByCategoryForBeverages(menu, categoryName){
    let filterResults = menu.filter(item => item.category == "Beverages").map(item=>{
        return 'category : ' + categoryName +"  name: " + item.name + "   price : " + item.price
    })
    return filterResults
}

console.log(listByCategoryForBeverages(menu,'Beverages'))

//Write function to calculate the amount of each ordered item

function listByCategoryForStaters (menu, categoryName){
    let filterResults =menu.filter(item => item.category == "Starters")
    .map (item =>{
        return 'category : ' + categoryName +"  name: " + item.name + "   price : " + item.price

    })
    return filterResults
}
console.log(listByCategoryForStaters(menu,'Starters'))

function listByCategoryForBeveragesForMainMeal(menu, categoryName){
    let filterResults = menu.filter(item => item.category == "Main Meal").map(item => 
        {return  'category : ' + categoryName +"  name: " + item.name + "   price : " + item.price })
        return filterResults
    }
    console.log(listByCategoryForBeveragesForMainMeal(menu,'Main Meal'))

console.log ("sorting alphabetically")

console.log ( menu.sort((a,b) => a.name >b.name ? 1 : -1))

let res = 0;
function calculateAmount(order,itemName){
    let filterResult = order.items.filter(item=>{
        if(item.name == itemName){
          res =  item.price*item.quantity;
        }
    }
    )   
    return res;   
}
console.log("  Name\t\t\t\t\t\t\t\tPrice         ")
console.log('Mozzarella Sticks: \t\t\t\t\t'+ calculateAmount (order,'Mozzarella Sticks'))
console.log('Garlic Bread: \t\t\t\t\t\t'+ calculateAmount(order,'Garlic Bread'))
console.log('Coke: \t\t\t\t\t\t\t\t'+ calculateAmount(order,'Coke'))
console.log('Medium Size Margherita Pizza: \t\t'+ calculateAmount(order,'Medium Size Margherita Pizza'))
console.log('Iced Tea: \t\t\t\t\t\t\t'+ calculateAmount(order,'Iced Tea') )
console.log('Veg Family Meal: \t\t\t\t\t'+ (order,'Veg Family Meal'))
console.log("------------------------------------------------")


//Write function to find the totalAmount of the order based on the calculated mainMealAmount value

function calculateMainMeal(menu,categoryName){
    let filterResult = menu.filter(item=> {
        return item.category == categoryName;
    } )
    let values =filterResult.map(item => {
    return item.price
})
let sum = values.reduce((accumulator, currentValue) => { 
        return accumulator + currentValue;
     } , 0);
     return sum;
}
let result = calculateMainMeal(menu,'Main Meal');
console.log("Total amount for the main meal ordered : "+result)
//Write function to calculate the final amount after discount

let afterDisc = 0;
let totBill = 0;
function calculateDiscount(menu){
    let filterResult = menu.filter(item=> {
        if(totBill > 50){
           afterDisc = (totBill - (totBill*5 / 100));
        }else{
            afterDisc = totBill;
        }
    } )
   return afterDisc;
}
let discBill = calculateDiscount(menu);
console.log("After discount : "+ discBill)

//Write function to display the total amount 

function calculatetotalBill(menu){
    let filterResult = menu.map(item=> {
        return item.price;
    } )    
    let sum = filterResult.reduce((accumulator, currentValue) => { 
        return accumulator + currentValue;
     } , 0);   
     return sum;
    } 
    let totBill1 = calculatetotalBill(menu);
    console.log("Total bill of all the item : "+totBill1);
