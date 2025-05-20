"use client";

type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const mockMenu: Dish[] = [
  {
    id: 1,
    name: "Burger Maison",
    description: "Pain brioché, steak, cheddar, sauce secrète",
    price: 12,
    image: "/burger.jpg",
  },
  {
    id: 2,
    name: "Pizza Margherita",
    description: "Tomate, mozzarella, basilic frais",
    price: 10,
    image: "/pizza.jpg",
  },
  {
    id: 3,
    name: "Wrap Poulet",
    description: "Poulet grillé, crudités, sauce blanche",
    price: 9,
    image: "/wrap.jpg",
  },
];

export default function MenuPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Notre Menu 🧾</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mockMenu.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{dish.name}</h2>
              <p className="text-sm text-gray-500">{dish.description}</p>
              <p className="mt-2 font-semibold text-green-600">{dish.price} €</p>
              <button
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                onClick={() => alert(`Ajouté au panier : ${dish.name}`)}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}