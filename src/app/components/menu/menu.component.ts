import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems = [
    {
      category: 'Antipasti',
      items: [
        { name: 'Focaccia Oven Pub', description: 'Focaccia Stoned baked , classic with Rosemary and Salt , ask for the Garlic Dip', price: '€9,80', isVegan: true },
        { name: 'Vegetable Soup', description: 'Home made Vegetable Soup', price: '€9,80', isVegan: true },
        { name: 'Olives with Foccacia', description: 'Local Olives served with our Home made Foccacia', price: '€7,80', isVegan: true },
        { name: 'Humous Home made', description: 'Fresh Mashed Check peas in a classic recipe that we Master in our Version Oven Pub,served with Local stoned baked Bread', price: '€8,80' , isVegan: true},
        { name: 'Tzatziki Local Recipe', description: 'Tzatzi with a Corfu Local Fuse Touch , Served with Local stoned baked Bread', price: '€8,80' , isVegan: true},
        { name: 'Tomato & Mozzarella', description: 'A Classic but simply so Good, served with Foccacia', price: '€12,80', isVegan: true },
        { name: 'Napoli Crispy corn chicken dippers with Mozzarella', description: 'Unique Chicken Chicken Strips , cooked and Served with Home Made Napoletan Sauce on the side with Melted Mozzarella', price: '€13,50' },
        { name: 'Ballotino , Beef Meat Balls Starters experience', description: 'My Nona knew how to Make a Meat Balls Starter , Simply extraordinary, served with Local stoned baked Bread ', price: '€13,50' },
        { name: 'Stoned Baked Feta Cheese', description: 'Stoned Baked Local Feta Cheese , Made as My Grandmother used to do it , with Chilli ,Oregano and Tomatoes ! to get you in Greek Dance of Flavours, served with Local stoned baked Bread', price: '€11,40', isVegan: true },
        { name: 'Local Garlic mussels', description: 'In tomato sauce & chilli, topped with Feta cheese, served with Local stoned baked Bread ', price: '€16,80'},
        { name: 'Calamaris', description: 'Greek Local Corfian Fresh Calamaries , cooked crispy and fried, served with garlic sauce', price: '€14,40' },
        { name: 'Bruschetta classic', description: '(2 slices)', price: '€7,80' },
        { name: 'Bruschetta Mediterranean', description: 'Like the clasic but with feta & olives (2 slices)', price: '€9,50' },
        { name: 'Garlic Bread', description: '', price: '€4,50' },
        { name: 'Garlic Bread with Cheese', description: '', price: '€5,50' },
        { name: 'VODKA Corn Chicken Dippers Alla Napoli', description: 'Forgive us  !! But we added Vodka , enjoy Fresh Basil and Mozzarella , Napolitan experience with Chicken in Corn FLakes', price: '€16,80' },
        { name: 'Saganaki Prawns', description: 'Fresh  Prawns Stone baked in Most popular Seafood starter in Greece! With Feta cheese', price: '€15,80' },
        { name: 'Fresh Home made Chips', description: '', price: '€6,00', isVegan: true },

      ],
    },
    {
      category: 'Salads',
      items: [
        { name: 'Unique Greek Salad Oven Pub', description: 'Served with Local stoned baked Bread', price: '€11,90' },
        { name: 'Home Made Caesar’s Oven Pub', description: 'Choose Plain Caesars or Chicken', price: '€13,80/€16,80', isVegan: true },
        { name: 'Tuna salad', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts, lettuce & tomatoes', price: '€15,80' },
      ],
    },
    {
      category: 'Pasta Collection Oven Pub. Family recipes since 1986. (Choose Your Pasta )',
      items: [
        { name: 'Napoli', description: 'A classic Vegan But so Good , enjoy with Spaghetti', price: '€10,80' },
        { name: 'Penne Pesto', description: '', price: '€13,80' },
        { name: 'Chicken Penne Pesto', description: '', price: '€15,80' },
        { name: 'Bologna ( Classic )', description: 'Spaghetti Bolognaise', price: '€13,80' },
        { name: 'Cipollini con Pollo e Fungi', description: 'Egg Tagliatelle , cooked in home made sauce with Chicken ,fresh  Mushrooms & Onion topped with cooking Cream  and lots of secrets', price: '€17,80' },
        { name: 'Tortellini Cacciatora', description: 'Brandy Mushrooms , garlic and bacon in a rich Creamy base.', price: '€16,80' },
        { name: 'Carbonara', description: 'Guancalle', price: '€18,80' },
        { name: 'Lasagne Oven Pub', description: 'Stoned baked , toped with parmesan & Mozzarella', price: '€14,00' },
        { name: 'Capriccio Penne', description: 'No explanations - Speechless !!! , a bit chilly ,choose Chicken Or Pork Fillet', price: '€16,80' },
        { name: 'Napoli Spaghetti & Pollo', description: 'Crispy Chicken Strips served like a Classic Spaghetti & meatballs , topped with Mozzarella', price: '€17,80' },
      ],
    },
    {
      category: 'Fresh Stone Baked Napolitan Style Pizzas since 1986 (Wood Oven)',
      items: [
        { name: 'Margerita', description: '', price: '€11,90' },
        { name: 'Marinara', description: 'Tomato sauce with olive oil & garlic', price: '€10,90', },
        { name: 'Special Oven Pub', description: 'Mozzarela, onions, Red & Green peppers, Salami , Ham, Fresh Mushrooms', price: '€15,50' },
        { name: 'Caperese', description: 'Tomato sauce, onion, green pepper, olive, capers, oregano, olive oil (optional: sausage).', price: '€15,50/€17,50' },
        { name: 'Vodkatoni', description: 'Tomato sauce/cream sauce, mozzarella, rigatoni, parmesan, vodka sauce, chicken.', price: '€22.00' },
        { name: 'Pizza Flakes', description: 'Cream, mozzarella, bacon, potato flakes.', price: '€16.80' },
        { name: 'Medditeranean Greek Pizza', description: 'Garlic, Feta cheese, olives, green peppers, Tomato', price: '€15,50' },
        { name: 'Pizza Carbonara', description: '', price: '€17,80' },
        { name: 'Pizza Marinero', description: 'Octapus, Tuna , Mussels', price: '€24,50' },
        { name: 'Pizza Stathis (Our Chef)', description: 'Tomato sauce, parmesan, mozzarella, fresh basil, olive oil.', price: '€13.90' },
        { name: 'Cherry Lady', description: 'Cream/tomato sauce, parmesan, mozzarella, breaded chicken, cherry tomatoes, basil cream.', price: '€14.90' },
        { name: 'Chicken Pesto Pizza', description: 'Cream base pizza, pesto sauce, chicken, parmesan & mozzarela', price: '€15,90' },
        { name: 'Build your Own Pizza', description: '', price: '' },
      ],
    },
    {
      category: 'Home Made Vodka Recipes',
      items: [
        { name: 'Vodka Margherita', description: 'A Classic that we add our Home Made Vodka sauce', price: '€16,80', isVegan: true },
        { name: 'Vodka Chicken Margherita', description: 'With Corn Crispy Chicken Strips , toped with parmensan', price: '€18,80' },
        { name: 'Vodka Hot chicken Baked', description: 'Chilli Pasta in Vodka sauce & Chicken Fillet, all stone baked with Mozzarela & Parmesan', price: '€15,80' },
        { name: 'Vodka Chicken Parmigiana', description: 'VODKA Chicken Parm, served with Spagetti', price: '€20,80' },
      ],
    },
    {
      category: 'Chicken Dishes',
      items: [
        { name: 'Alfredo Chicken', description: 'A light but very tasty chicken dish (served with pasta and parmesan , stone Baked )', price: '€16,80' },
        { name: 'BBQ Crispy Corn Chicken Strips', description: 'Chicken dippers served with Home made Napoli sauce & melted cheeses.', price: '€18,80' },
        { name: 'Chicken Parm', description: 'Parmesan Heaven with crispy chicken and Pasta all Stone Baked', price: '€19,80' },
        { name: 'Oven Pub paella Chicken for 2...or 4...', description: '', price: '€29,50/€42,50' },
      ],
    },
    {
      category: 'Traditional Local Cuisine Stoned Baked',
      items: [
        { name: 'Fresh Local GYROS Chicken or Pork', description: 'Served with stone baked Focaccia and Home made Tzatziki', price: '€12,80' },
        { name: 'Traditional Souvlaki Large', description: 'Chicken or Pork ,served with stone baked Focaccia and Tzatziki Home made', price: '€14,80' },
        { name: 'Moussaka', description: '', price: '€13,80' },
        { name: 'Wild Boar Stifado', description: '', price: '€23,80' },
        { name: 'Local Sofrito Beef', description: 'Local Beef Sofrito Stone Baked Recipe , its a must try dish in Corfu', price: '€19,80' },
        { name: 'Local Spaghetti & Meat Balls, SOUTZOUKAKIA', description: 'Stoned baked with mozzarella & and parmesan', price: '€17,80' },
        { name: 'Local Mixed Stoned Baked Meat Paella for 2... Or 4...', description: '', price: '€35,50 / €48,50' },
      ],
    },
    {
      category: 'Fresh Sea Food Options',
      items: [
        { name: 'Octopus Grilled', description: 'Served with Humous Salad and Rice', price: '€21,60' },
        { name: 'Mare Monte', description: 'Mare Monte Sea food pasta made with seawater salt', price: '€23,50' },
        { name: 'Fresh Octopus Linguine', description: 'Octopus Linguine in garlic and Chilly , Tomato based sauce with red wine', price: '€21,80' },
        { name: 'Cajun Salmon', description: 'Served with rice & grilled vegetables', price: '€17,80' },
        { name: 'King Prawns Pasta', description: 'With garlic & tomato sauce', price: '€19,80' },
        { name: 'King Prawns Grilled, Greek style', description: 'Served with rice & salad', price: '€19,80' },
        { name: 'Seafood Paella, Stoned Baked', description: 'Octopus , Prawns , Mussels, For 2... or 4...', price: '€38,80/€56,80' },
        { name: 'Mussels and Cream Rissoto', description: 'Topped with Napoli tomato sauce', price: '€22,80' },
      ],
    },
    {
      category: 'Vegetarian - Vegan Options Oven Pub',
      items: [
        { name: 'Starters', description: '', price: '' },
        { name: 'Bruschetta Mediterranean', description: 'With Local Feta {vegan feta or Normal } , Olives and oregano', price: '€11,80' , isVegan: true},
        { name: 'Vegetable Soup', description: 'Home made Vegetable Soup', price: '€9,80' , isVegan: true},
        { name: 'Courgette’s', description: 'Courgette’s Local Fried', price: '€9,80', isVegan: true },
        { name: 'Main Courses', description: '', price: '' },
        { name: 'Beyond meat Vegan Vodka Chicken Parmigiana', description: 'A clasic in Vodka', price: '€23,00', isVegan: true },    
        { name: 'Beyond meat Chicken Parmigiana', description: 'Vegan', price: '€19,80' , isVegan: true},
        { name: 'Kritharoto', description: 'Blue Cheese, carrots & courgettes (vegetarian)', price: '€14,50', isVegan: true },
        { name: 'Spaggeti Napoli', description: '', price: '€10,80', isVegan: true },
        { name: 'Vegan Risotto', description: '', price: '€13,50', isVegan: true },
        { name: 'Vegetarian Risotto', description: '', price: '€14,50', isVegan: true }
      ],
    },
    {
      category: 'Deserts',
      items: [
        { name: 'Hot Chocolate Cake', description: '', price: '€7,50' },
        { name: 'Orange Pie', description: '', price: '€8,50' },
        { name: 'Banoffee', description: '', price: '€9,20' },
        { name: 'Yogurt with Honey & Nuts', description: '', price: '€8,50' },
      ],
    },

    // aperol
    {
      category: 'Spritz Selection',
      items: [
        { name: 'New Peache Blush Spritz', description: 'Coldwater Creek rose wine, Archers peach schnapps (25ml), lemonade, With strawberry.', price: '€10' },
        { name: 'New Taqueray Spritz', description: 'Tanqueray (50ml), apple juice, elderflower tonic water. With cucumber and mint', price: '€10' },
        { name: 'Aperol Spritz', description: 'Aperol (100ml), Prosecco, soda, With orange', price: '€10' },
        { name: 'New Mango & Passionfruit Spritz', description: 'Smirnoff Mango & Passionfruit vodka (25ml), Prosecco, lemonade', price: '€10' },
      ],
    },

    //
    {
      category: 'Cocktails',
      items: [
        { name: 'Blackberries Smash', description: 'Vodka, Creme de Mure, Simple syrup, Lemon juice, Blackberries, Mint', price: '€9' },
        { name: 'Buttered Daiquiri', description: 'White Rum, Dark Rum, Caramel / Cinamon syrup', price: '€10' },
        { name: 'Marmalade Gin', description: 'Gin, Aperol, Limoncello, Lime, Orange Marmalade', price: '€9' },
        { name: 'Passion Victim', description: 'Mastiha, Passion Fruit, Lime, Vanilla, Mint, Aromatic Bitters', price: '€10' },
        { name: 'Pina Picante', description: 'Tequila, Lime, Simple syrup, Pineapple, Chilli, Triple Sec', price: '€9' },
        { name: 'Speced Agave', description: 'Tequila, Agave Syrup, Triple Sec, Lime, Ginger', price: '€9' },
        { name: 'Classics', description: 'Upon Request', price: '' },
      ],
    },
    //apostaseis
    {
      category: 'Beers',
      items: [
        { name: 'Draught Half.', description: '', price: '€4,00' },
        { name: 'Draught Pint.', description: '', price: '€5,00' },
        { name: 'Amstel 330ml.', description: '', price: '€3,90' },
        { name: 'Mythos 330ml.', description: '', price: '€3,90' },
        { name: 'Stella 330ml.', description: '', price: '€7,00' },
        { name: 'Peroni 330ml', description: '', price: '€7,00' },
        { name: 'Home made Cider 500ml (Blackberry / Strawberry)', description: '', price: '€8,80' },
      ],
    },
    {
      category: 'Milk Shake',
      items: [
        { name: 'Vanilla Shake', description: '', price: '€8,50' },
        { name: 'Chocolate Shake', description: '', price: '€8,50' },
        { name: 'Grenadine Shake', description: '', price: '€8,50' },
        { name: "Bailey's Shake", description: '', price: '€11,50' },
      ],
    },
    
    {
      category: 'Soft Drinks',
      items: [
        { name: 'Coka Cola', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Sprite', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Orange Fanta', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Lemon Fanta', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Tonic Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Soda Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Mineral Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Sparkling Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Cranberry Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
        { name: 'Fresh Mint Lemonade', description: 'Glass 400ml / 1 lt', price: '€5,90 / €10,90' },
        { name: 'Orange Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
        { name: 'Pineapple Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
        { name: 'Apple Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
      ],
    },
  ];
}
