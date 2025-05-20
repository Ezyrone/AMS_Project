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
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Notre Menu 🧾</h1>

      <div className="space-y-4">
        {mockMenu.map((dish) => (
          <div
            key={dish.id}
            className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-[80px] h-[80px] object-cover rounded-md"
            />
            <div className="flex flex-col flex-1">
              <h2 className="text-base font-semibold">{dish.name}</h2>
              <p className="text-sm text-gray-500">{dish.description}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="text-green-600 font-bold">{dish.price} €</p>
                <button
                  className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                  onClick={() => alert(`Ajouté au panier : ${dish.name}`)}
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}