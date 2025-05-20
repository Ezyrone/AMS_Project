"use client";

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-green-600">🍽️ AMS Eats</h1>
        <nav>
          <a href="/auth/login" className="text-sm text-gray-700 hover:underline">
            Connexion
          </a>
        </nav>
      </header>

      {/* Hero section */}
      <section className="bg-[url('/hero.jpg')] bg-cover bg-center h-[300px] flex items-center justify-center text-white text-center px-4">
        <div className="bg-black/60 p-6 rounded-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Commandez vos plats préférés 🍕</h2>
          <p className="mb-4">Livrés chez vous en quelques clics</p>
          <a
            href="/client/menu"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition"
          >
            Voir le menu
          </a>
        </div>
      </section>

      {/* Menu preview */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="text-2xl font-semibold mb-6">Suggestions du moment 🧾</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { name: "Burger Maison", price: 12, img: "/burger.jpg" },
            { name: "Pizza Margherita", price: 10, img: "/pizza.jpg" },
            { name: "Wrap Poulet", price: 9, img: "/wrap.jpg" },
          ].map((dish, i) => (
            <div key={i} className="border rounded-lg shadow hover:shadow-md transition">
              <img src={dish.img} alt={dish.name} className="w-full h-40 object-cover rounded-t-lg" />
              <div className="p-4">
                <h4 className="text-lg font-bold">{dish.name}</h4>
                <p className="text-sm text-gray-500">{dish.price} €</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} AMS Eats – Tous droits réservés
      </footer>
    </div>
  );
}