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
        //{ name: 'Focaccia Oven Pub', description: 'Focaccia stone-baked, classic with rosemary and salt. Ask for the garlic dip.', price: '€9,80', isVegan: true },
        //{ name: '*****Olives with Foccacia', description: 'Local Olives served with our Homemade Focaccia', price: '€7,80', isVegan: true },
        { name: 'Humous Home made', description: 'Fresh Mashed Chickpeas in a classic recipe that we Master in our Version Oven Pub,served with Local stoned baked Bread', price: '€8,80' , isVegan: true},
        { name: 'Tzatziki Local Recipe', description: 'Tzatziki with a Corfu Local Fuse Touch , Served with Local stoned baked Bread', price: '€8,80' , isVegan: true},
        { name: 'Napoli Crispy corn chicken dippers with Mozzarella', description: 'Unique Chicken Chicken Strips , cooked and Served with Home Made Napoletan Sauce on the side with Melted Mozzarella', price: '€13,50' },
        { name: '**Carpaccio Thodoris', description: '**', price: '€13,50' },
        { name: 'Stoned Baked Feta Cheese', description: 'Stoned Baked Local Feta Cheese , Made as My Grandmother used to do it , with Chilli ,Oregano and Tomatoes ! to get you in Greek Dance of Flavours, served with Local stoned baked Bread', price: '€11,40', isVegan: true },
        { name: '**Steamed Mussels', description: '**', price: '€16,80'},
        { name: 'Calamari', description: 'Greek Local Corfian Fresh Calamaries , cooked crispy and fried, served with garlic sauce', price: '€14,40' },
        { name: 'Bruschetta Mediterranean', description: '**', price: '€9,50' },
        //{ name: 'Garlic Bread', description: '', price: '€4,50' },
        //{ name: 'Garlic Bread with Cheese', description: '', price: '€5,50' },
        { name: 'VODKA Corn Chicken Dippers Alla Napoli', description: 'Forgive us  !! But we added Vodka , enjoy Fresh Basil and Mozzarella , Napolitan experience with Chicken in Corn FLakes', price: '€16,80' },
        { name: 'Saganaki Prawns', description: 'Fresh  Prawns Stone baked in Most popular Seafood starter in Greece! With Feta cheese', price: '€15,80' },
        { name: '**Potatoes Baby', description: '**', price: '€6,00', isVegan: true },
        { name: '**Potatoes Bravas', description: '**', price: '€6,00', isVegan: true },
        { name: '**Shrimp Kataifi', description: '**', price: '€6,00', isVegan: true },
        { name: '**Octopus with Split Peas', description: '**', price: '€6,00', isVegan: true },
        { name: '**Cevicee Dorada Mediterraneo', description: '**', price: '€6,00', isVegan: true },

      ],
    },
    {
      category: 'Salads',
      items: [
        { name: 'Unique Greek Salad Oven Pub', description: 'Served with Local stoned baked Bread', price: '€11,90' },
        { name: 'Home Made Caesar’s Oven Pub', description: 'Choose Plain Caesars or Chicken', price: '€13,80/€16,80', isVegan: true },
        { name: '**Salad with Avocado Dressing', description: 'Apples , red onion, sweet balsamic , sweetcorn , cherry tomatoes and walnuts, lettuce & tomatoes', price: '€15,80' },
        { name: '**Dakos salad', description: '**', price: '€13,80/€16,80', isVegan: true },
      ],
    },
    {
      category: 'Pasta Collection Oven Pub. Family recipes since 1986. (Choose Your Pasta )',
      items: [
        { name: 'Napoli', description: 'A classic Vegan Dish But so Good , enjoy with Spaghetti', price: '€10,80' },
        { name: '**Penne Papardelle', description: '**', price: '€13,80' },
        { name: '**Raviolli Dimare', description: '** gemisto me garida', price: '€16,80' },
        { name: '**Bolonez casaresse', description: '**', price: '€18,80' },
        { name: 'Carbonara', description: 'Guanciale', price: '€18,80' },
        { name: '**Carbonara Nduje', description: '**', price: '€18,80' },
      ],
    },
    // {
    //   category: 'Fresh Stone Baked Napolitan Style Pizzas since 1986 (Wood Oven)',
    //   items: [
    //     { name: 'Margherita', description: '', price: '€11,90' },
    //     { name: 'Marinara', description: 'Tomato sauce with olive oil & garlic', price: '€10,90', },
    //     { name: 'Special Oven Pub', description: 'Mozzarella, onions, Red & Green peppers, Salami , Ham, Fresh Mushrooms', price: '€15,50' },
    //     { name: 'Caperese', description: 'Tomato sauce, onion, green pepper, olive, capers, oregano, olive oil (optional: sausage).', price: '€15,50/€17,50' },
    //     { name: 'Vodkatoni', description: 'Tomato sauce/cream sauce, mozzarella, rigatoni, parmesan, vodka sauce, chicken.', price: '€22.00' },
    //     { name: 'Mediterranean Greek Pizza', description: 'Garlic, Feta cheese, olives, green peppers, Tomato', price: '€15,50' },
    //     { name: 'Pizza Carbonara', description: '', price: '€17,80' },
    //     { name: 'Pizza Marinero', description: 'Octopus, Tuna , Mussels', price: '€24,50' },
    //     { name: 'Chicken Pesto Pizza', description: 'Cream base pizza, pesto sauce, chicken, parmesan & mozzarella', price: '€15,90' },
    //     { name: 'Build your Own Pizza', description: '', price: '' },
    //   ],
    // },
    {
      category: 'Home Made Vodka Recipes',
      items: [
        { name: 'Vodka Chicken Parmigiano', description: 'VODKA Chicken Parm, served with Spaghetti', price: '€20,80' },
        { name: '**Vodka Porketta Parmigiano', description: '**', price: '€20,80' },
      ],
    },
    {
      category: 'Chicken Dishes',
      items: [
        { name: '**Chicken buta marinarismeno, patata baby+sws', description: '**', price: '€16,80' },
        { name: 'Chicken Parm', description: 'Parmesan Heaven with crispy chicken and Pasta all Stone Baked', price: '€19,80' },
        { name: '**Chicken meatballs', description: '**', price: '€16,80' },
        
      ],
    },
    {
      category: 'Traditional Local Cuisine Stone-Baked',
      items: [
        { name: 'Fresh Local GYROS Chicken or Pork', description: 'Served with Local stoned baked Bread and Home made Tzatziki', price: '€12,80' },
        { name: 'Traditional Souvlaki Large', description: 'Chicken or Pork ,Served with Local stoned baked Bread and Tzatziki Home made', price: '€14,80' },
        { name: 'Moussaka', description: '', price: '€13,80' },
        { name: '**Traditional Black Pork', description: '**', price: '€13,80' },
        { name: 'Wild Boar Stifado', description: '', price: '€23,80' },
        { name: 'Local Sofrito Beef', description: 'Local Beef Sofrito Stone Baked Recipe , its a must try dish in Corfu', price: '€19,80' },
        { name: 'Local Mixed Stoned Baked Original Paella for 1... Or 2...', description: '', price: '€35,50 / €48,50' },
      ],
    },
    {
      category: 'Fresh Sea Food Options',
      items: [
        { name: 'Octopus Grilled', description: 'Served with Humous Salad and Grilled Vegetables', price: '€21,60' },
        { name: 'Mare Monte', description: 'Mare Monte Sea food pasta made with seawater salt', price: '€23,50' },
        { name: 'King Prawns Pasta', description: 'With garlic & tomato sauce', price: '€19,80' },
        { name: 'King Prawns Grilled, Greek style', description: 'Served with rice & salad', price: '€19,80' },
        { name: 'Seafood Paella, Stoned Baked', description: 'Octopus , Prawns , Mussels, For 2... or 4...', price: '€38,80/€56,80' },
        { name: '**Tsipoura fileto me sparagia + poure patatas', description: '**', price: '€22,80' },
      ],
    },
    {
      category: 'Vegetarian - Vegan Options Oven Pub',
      items: [
        { name: 'Starters', description: '', price: '' },
        { name: '**Vegan Saganaki', description: '**', price: '€9,80', isVegan: true },
        { name: 'Bruschetta Mediterranean', description: 'With Local Feta {vegan feta or normal } , Olives and oregano', price: '€11,80' , isVegan: true},
        { name: 'Courgette’s', description: 'Courgette’s Local Fried', price: '€9,80', isVegan: true },
        { name: 'Main Courses', description: '', price: '' },
        { name: 'Beyond meat Vegan Vodka Chicken Parmigiana', description: 'A classic in Vodka', price: '€23,00', isVegan: true },    
        { name: 'Beyond meat Chicken Parmigiana', description: 'Vegan', price: '€19,80' , isVegan: true},
        { name: '**Kritharoto Brocolli', description: 'Blue Cheese, carrots & courgettes (vegetarian)', price: '€14,50', isVegan: true },
        { name: 'Spagheti Napoli', description: '', price: '€10,80', isVegan: true },
        { name: 'Vegan Carbonara', description: '', price: '€21,80', isVegan: true },
      ],
    },
    {
      category: 'Desserts',
      items: [
        { name: '**Tiramisu', description: '**', price: '€7,50' },
        { name: '**Orange Pie', description: '**', price: '€8,50' },
        { name: '**Tarta me gofreta kai popcorn', description: '**', price: '€9,20' },
        { name: '**Baclava', description: '**', price: '€8,50' },
      ],
    },
    {
      category: 'Wines',
      whiteWines: [
        { name: 'Single Wine Glass', description: 'Ask our experienced staff for recommendations', price: '€8.8' },
        { name: 'Ergo Sauvignon Blanc', description: 'A refreshing Greek Sauvignon Blanc with exotic fruit aromas, citrus notes, and a zesty, lemony finish.', price: '€10' },
        { name: 'Malagouzia Single Vineyard', description: 'A vibrant Greek Malagouzia with floral, citrus, and herbal aromas, offering a crisp, balanced palate and a long, lively finish.', price: '€10' },
        { name: 'Malagouzia Gerovasileiou Vineyard', description: 'A refined Malagouzia with floral, citrus, and tropical fruit aromas, balanced acidity, and a long, elegant finish.', price: '€10' },
        { name: 'Vivlia Country Vineyard Sauvignon Blanc', description: 'A vibrant white wine with exotic fruit and herbal aromas, balanced acidity, and a versatile, elegant profile.', price: '€10' },
        { name: 'Thema Paulides Vineyard Sauvignon Blanc', description: 'A refreshing Greek white wine with crisp lemon aromas and vibrant acidity, perfect for pairing with seafood and summer dishes.', price: '€10' },
        { name: 'Paraga Rhodites Vine Sauvignon Blanc', description: 'A crisp and fresh white wine with citrus aromas, vibrant acidity, and a smooth finish, perfect for pairing with light pasta dishes and seafood.', price: '€10' },
        { name: 'Plagies Gerakion Sauvignon Blanc', description: 'A complex and balanced Malagouzia/Sauvignon Blanc blend with citrus, floral, and subtle oak notes, offering a creamy texture, refreshing acidity, and a lingering fruity finish.', price: '€10' },
        { name: 'Historia Viognier Arvanitis Vineyard', description: 'A fresh and fruity white wine with notes of green apple, pear, apricot, and melon, offering refreshing acidity, subtle sweetness, and exceptional value for its quality.', price: '€10' },
        { name: 'Kehrimpari Rodites Kehris Vineyard', description: 'A classic retsina made from 100% Roditis, with aromas of fresh pine, pear, melon, and mastic, offering a balanced body and a long, herbal finish.', price: '€10' },
        { name: 'Natureo Muscat De-Alcoholized', description: 'A flavorful, alcohol-free wine, Natureo retains the aromas, antioxidants, vitamins, and minerals of the grape, offering a satisfying experience for those avoiding alcohol.', price: '€10' },
        { name: 'Alpha Sauvignon Blanc', description: 'A top-selling Greek Sauvignon Blanc with a balance of Old and New World styles, offering vibrant aromas of citrus, peach, mango, white flowers, and a crisp, refreshing acidity.', price: '€10' },
        { name: 'Little Ark Dry White', description: 'A refined Assyrtiko-Malagouzia blend offering aromatic elegance and crisp freshness, perfect for pairing with delicate Greek seafood dishes', price: '€10' },
        { name: 'Dafnios Vidiano', description: 'A vibrant Vidiano from Crete with aromas of lemon marmalade, bergamot, mango, and chamomile, offering balanced acidity, richness, and an impressive, lingering finish.', price: '€10' },

      ],
      redWines: [
        { name: 'Single Wine Glass', description: 'Ask our experienced staff for recommendations', price: '€8.8' },
        { name: 'Portes Merlot', description: 'A rich Merlot with cherry, plum, vanilla, violet, and smoky notes, offering a velvety palate and soft tannins for a long, complex finish.', price: '€10' },
        { name: 'Avantis Vineyard Syrah', description: 'A bold Syrah...', price: '€10' },
        { name: 'Paraga Merlot Syrah', description: 'A smooth red blend of Xinomavro, Merlot, and Syrah, offering vibrant aromas of berries and green pepper, balanced acidity, soft tannins, and a refreshing finish.', price: '€10' },
        { name: 'Nemea Red Agiorgítiko Papaioannou Estate', description: 'A classic Nemea Agiorgitiko with rich red fruit aromas, hints of vanilla and caramel, balanced acidity, refined tannins, and excellent aging potential.', price: '€10' },
        { name: 'Avantis Vineyard Syrah', description: 'A bold and complex Greek Syrah with aromas of black pepper, dark fruits, licorice, and violet, complemented by spicy oak notes, velvety tannins, and excellent aging potential.', price: '€10' },
      ],
      roseWines: [
        { name: 'Single Wine Glass', description: 'Ask our experienced staff for recommendations', price: '€8.8' },
        { name: 'Idylle dAchinos', description: 'A pale pink rosé with aromas of rose, orange peel, and cherry, offering a refreshing, crisp finish.', price: '€10' },
        { name: 'Three Witches Rose Semi Sweet', description: 'A vibrant semi-sweet rosé with cherry, strawberry, and floral aromas, refreshing acidity, and a caramel-tinged finish.', price: '€10' },
        { name: 'Little Ark Moschofilero', description: 'A delightful rosé Moschofilero with a floral bouquet, notes of quince, cherry, and strawberry, a crisp palate, and a refreshing, balanced finish.', price: '€10' },
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
        { name: 'Classics', description: 'Upon Request', price: '€9' },
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
        { name: 'Homemade Cider 500ml (Blackberry / Strawberry)', description: '', price: '€8,80' },
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
        { name: 'Coca-Cola', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Sprite', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Orange Fanta', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Lemon Fanta', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Tonic Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Soda Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Mineral Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Sparkling Water', description: 'Small 250ml / Large 350ml', price: '€3 / €4' },
        { name: 'Cranberry Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
        { name: 'Fresh Mint Lemonade', description: 'Glass 400ml / 1 L', price: '€5,90 / €10,90' },
        { name: 'Orange Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
        { name: 'Pineapple Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
        { name: 'Apple Juice', description: 'Small 250ml / Large 350ml', price: '€3,50 / €4,50' },
      ],
    },
  ];
}
