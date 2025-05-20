"use client";

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4 shadow-sm sticky top-0 bg-white z-10">
        <h1 className="text-2xl font-bold text-green-600">🍽️ AMS Eats</h1>
        <nav>
          <a href="/auth/login" className="text-sm text-gray-700 hover:underline">
            Connexion
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative w-full h-[220px] md:h-[280px] lg:h-[320px] overflow-hidden rounded-b-xl mb-8">
        <img
          src="/hero.jpg"
          alt="Image d'accueil"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Commandez vos plats préférés 🍕</h2>
          <p className="mb-4 text-sm md:text-base">Livrés chez vous en quelques clics</p>
          <a
            href="/client/menu"
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-full font-medium transition"
          >
            Voir le menu
          </a>
        </div>
      </section>

      {/* Suggestions */}
      <section className="max-w-3xl mx-auto px-4 pb-10">
        <h3 className="text-2xl font-semibold mb-6">Suggestions du moment 🧾</h3>
        <div className="space-y-4">
          {[
            { name: "Burger Maison", price: 12, image: "/burger.jpg" },
            { name: "Pizza Margherita", price: 10, image: "/pizza.jpg" },
            { name: "Wrap Poulet", price: 9, image: "/wrap.jpg" },
          ].map((dish, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-4 bg-white rounded-lg shadow hover:shadow-md transition"
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-[80px] h-[80px] object-cover rounded-md"
              />
              <div className="flex flex-col flex-1">
                <h2 className="text-base font-semibold">{dish.name}</h2>
                <p className="text-green-600 font-bold mt-1">{dish.price} €</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-muted mt-10 pb-6">
        &copy; {new Date().getFullYear()} AMS Eats – Tous droits réservés
      </footer>
    </div>
  );
}