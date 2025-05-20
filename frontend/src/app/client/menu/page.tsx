type Dish = {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  
  const mockMenu: Dish[] = [
    {
      id: 1,
      name: "Burger Maison",
      description: "Pain brioché, steak, cheddar, sauce secrète",
      price: 12,
    },
    {
      id: 2,
      name: "Pizza Margherita",
      description: "Tomate, mozzarella, basilic",
      price: 10,
    },
    {
      id: 3,
      name: "Wrap Poulet",
      description: "Poulet grillé, crudités, sauce blanche",
      price: 9,
    },
  ];
  
  export default function MenuPage() {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Notre Menu</h1>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockMenu.map((dish) => (
            <div
              key={dish.id}
              className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-lg font-semibold">{dish.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{dish.description}</p>
              <p className="text-md font-medium">{dish.price} €</p>
  
              <button
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
                onClick={() => alert(`Ajouté: ${dish.name}`)}
              >
                Ajouter au panier
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }