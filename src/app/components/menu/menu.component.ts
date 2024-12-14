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
        { name: 'Burrata e Patata Avocado & Cherry tomatoes', description: 'Classic pizza with fresh tomatoes, mozzarella, and basil.', price: '$8.99' },
        { name: 'Stoned Baked Feta Cheese', description: 'Served with focaccia Stoned baked', price: '$9.99' },
        { name: 'Humous Home made', description: 'Etiam at ultrices mauris, ac.', price: '$9.99' },
        { name: 'Olives with Foccacia e Alioli', description: 'Aenean vitae nisl eget sapien.', price: '$9.99' },
        { name: 'Bruschetta Mediterranean', description: 'Donec vitae pretium ligula. Maecenas.', price: '$9.99' },
        { name: 'Tzatziki e Limone Local Recipe', description: 'Duis sagittis erat ut libero.', price: '$9.99' },
        { name: 'Napoli Crispy corn chicken dippers with Mozzarella', description: 'Aliquam cursus aliquet magna eu.', price: '$9.99' },
        { name: 'Ballotino , Beef Meat Balls Starters experience', description: 'Vivamus mollis nibh tincidunt turpis.', price: '$9.99' },
        { name: 'Tomato e Mozzarella', description: 'Etiam a eleifend nisl. Ut.', price: '$9.99' },
        { name: 'VODKA Corn Chicken Dippers Alla Napoli', description: 'Aenean mauris metus, tempus eu.', price: '$9.99' },
        { name: 'Calamaris e Aliolii home made', description: 'Integer ac tortor felis. Praesent.', price: '$9.99' },
        { name: 'Saganaki with Prawns , feta & Local Herbs Stoned baked', description: 'Nunc pellentesque est nec libero.', price: '$9.99' },
        { name: 'Focaccia Oven Pub', description: 'Etiam iaculis nulla vel lorem.', price: '$9.99' },
      ],
    },
    {
      category: 'Salads',
      items: [
        { name: 'Caesar’s Oven Pub', description: 'A home made famous , Choose Chicken corn', price: '$12.99' },
        { name: 'Tuna salad', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts', price: '$11.99' },
      ],
    },
    {
      category: 'Pasta Collection Oven Pub. Family recipes since 1986. (Choose Your Pasta )',
      items: [
        { name: 'Napoli', description: 'A home made famous , Choose Chicken corn', price: '$12.99' },
        { name: 'Pesto Penne', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts', price: '$11.99' },
        { name: 'Chicken Penne Pesto', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts', price: '$11.99' },
        { name: 'Bologna ( Classic )', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts', price: '$11.99' },
        { name: 'Cipollini con Pollo e Fungi', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts', price: '$11.99' },
        { name: 'Tortellini Cacciatora', description: ':Brandy Mushrooms , garlic and bacon in a rich Creamy base .', price: '$11.99' },
        { name: 'Carbonara (Guancale )', description: 'Apples , red onion sweet balsamic , sweetcorn , cherry tomatoes and wall nuts', price: '$11.99' },
        { name: 'Lasagne Oven Pub', description: 'Stoned baked , toped with parmesan e Mozzarella', price: '$11.99' },
        { name: 'Capriccio Penne', description: 'No explanations - Speechless !!! , a bit chilly ,choose Chicken Or Pork Fillet', price: '$11.99' },
        { name: 'Napoli Spaghetti & Pollo', description: 'toped with Pecorino e Mozzarella all finished Stoned baked', price: '$11.99' },
      ],
    },
    {
      category: '72 hrs aged Stoned Baked Pizza, since 1986 Oven Pub (WOOD BRICK OVEN !!!!!).',
      items: [
        { name: 'Oven Pub Special', description: 'A home made famous , Choose Chicken corn', price: '$12.99' },
        { name: 'Chicago Thin-Crust', description: 'Pecorino Romano Cheese, Heavy cream, Scallions, Eggs, Black pepper', price: '$11.99' },
        { name: 'Capricciosa', description: 'Tomato sauce, Mozzarella, Mushrooms, Artichokes, Cooked ham, Olives, Olive oil', price: '$11.99' },
        { name: 'Pizza Al Taglio', description: 'Tomato sauce, Goat’s cheese', price: '$11.99' },
        { name: 'Traditional Sicilian pizza', description: 'Pecorino Romano Cheese, Heavy cream, Scallions, Eggs, Black pepper', price: '$11.99' },
        { name: 'New Haven "Apizza"', description: 'Tomato sauce, Mozzarella, Eggplants, Artichokes, Garlic, Basil', price: '$11.99' },
        { name: 'Margherita', description: 'San Marzano tomato sauce, Mozzarella di bufala, Olive Oil', price: '$11.99' },
        { name: 'Alle Verdure Grigliate', description: 'Tomato sauce, Mozzarella, Grilled vegetables', price: '$11.99' },
      ],
    },
    {
      category: 'Vodka Plates Oven Pub',
      items: [
        { name: 'Vodka Margherita', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$12.99' },
        { name: 'Vodka Chicken Margherita', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'Vodka Hot chicken Baked', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'Vodka Chicken Parmigiana', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
      ],
    },
    {
      category: 'Chicken Plates Oven Pub',
      items: [
        { name: 'Alfredo Chicken', description: 'A light but very tasty chicken dish (served with pasta and parmesan , stone Baked )', price: '$12.99' },
        { name: 'BBQ Crispy Corn chicken', description: 'Dippers served with Home made Potatoes.', price: '$11.99' },
        { name: 'Chicken Parm', description: 'Parmesan Heaven with crispy chicken and Pasta all Stone Baked', price: '$11.99' },
        { name: 'Chicken Paella Oven Pub for 2...or 4...', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
      ],
    },
    {
      category: 'Traditional Plates Oven Pub',
      items: [
        { name: 'GYROS Chicken or Pork', description: 'Served with stone baked Focaccia and Tzatziki Home made', price: '$12.99' },
        { name: 'Traditional Souvlaki Large', description: 'Chicken or Pork ,served with stone baked Focaccia and Tzatziki Home made', price: '$11.99' },
        { name: 'Mousaka', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'Local Wild Boar Stifado', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'Local Sofrito Beef', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'Local Spaghetti & Meat Balls SOUTZOUKAKIA', description: 'Stoned baked with mozzarella & and parmesan', price: '$11.99' },
        { name: 'Local Mixed Meat Paella Stoned Baked for 2... Or 4...', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
      ],
    },
    {
      category: 'Sea Food Options Oven Pub (Freshly Selected Daily with Knowledge )',
      items: [
        { name: 'Octopus Grilled', description: 'Served with Humous Salad and Rice', price: '$12.99' },
        { name: 'Mare Monte', description: 'Sea Food Local Spaghetti', price: '$11.99' },
        { name: 'Fresh Octopus Linguine', description: 'Napoli e Chilli', price: '$11.99' },
        { name: 'Cajun Salmon', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'King Prawns Pasta', description: 'Sed viverra augue vitae pharetra vulputate. Praesent quis.', price: '$11.99' },
        { name: 'Paella Seafood Stoned Baked', description: 'Octopus , Prawns , Mussels, For 2... or 4...', price: '$11.99' },
        { name: 'VODKA Mussels and Cream Served with', description: 'Fresh Foccacia Stone Baked', price: '$11.99' },
      ],
    },
    {
      category: 'Vegetarian - Vegan Options Oven Pub',
      items: [
        { name: 'Starters', description: '', price: '' },
        { name: 'Bruschetta Mediterranean', description: 'With feta & local olives, Vegan Feta', price: '$11.99' },
        { name: 'Beyond meat Vegan', description: 'Chicken Dippers Sauce & Vegetarian Sauce with Mozzarella', price: '$11.99' },
        { name: 'Courgette’s', description: 'Fried Greeks Style with a Garlic Dip', price: '$11.99' },
        { name: 'Main Courses', description: '', price: '' },
        { name: 'Beyond meat Vegan Vodka Chicken Parmigiana', description: 'a clasic în Vodka', price: '$11.99' },
        { name: 'Beyond meat Chicken Burger', description: 'Fresh Foccacia Stone Baked', price: '$11.99' },
        { name: 'Beyond meat Chicken Parmigiana', description: 'Vegan Or Vegetarian', price: '$11.99' },
        { name: 'Beyond Meat Vegan Spaghetti and meat balls', description: 'Fresh Foccacia Stone Baked', price: '$11.99' },
        { name: 'Vegan Penne Pesto', description: 'Fresh Foccacia Stone Baked', price: '$11.99' },
        { name: 'Beyond meat Chicken , Penne Pesto', description: 'Fresh Foccacia Stone Baked', price: '$11.99' },
        { name: 'Deserts', description: '', price: '' },
        { name: 'Bannofee', description: 'Fresh Foccacia Stone Baked', price: '$11.99' },
        { name: 'Langost with Honey and Nuts', description: 'aNapolitan Italian Classic Fried sweet Pizza', price: '$11.99' },
      ],
    },
    {
      category: 'WINE LIST- DRINKS - CAFE - BEVERAGES- DESSERTS',
      items: [
        { name: 'Château Margaux (France)', description: 'A legendary Bordeaux wine, known for its elegance, rich complexity, and smooth finish.', price: '100' },
        { name: 'Barolo (Italy)', description: 'The "King of Wines," a bold and tannic red with earthy and floral notes from the Piedmont region.', price: '$11.99' },
        { name: 'Penfolds Grange (Australia)', description: 'A premium Shiraz with intense fruit flavors, balanced by savory oak and a velvety texture.', price: '$11.99' },
      ],
    },
  ];
}
