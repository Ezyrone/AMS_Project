export default function ClientDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Bienvenue sur AMS 🍽️</h1>
      <p className="text-gray-600 mb-6">Découvrez nos plats et passez votre commande en ligne</p>

      <div className="flex gap-4">
        <a
          href="/client/menu"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg transition"
        >
          Voir le menu
        </a>
        <a
          href="/client/order"
          className="border border-gray-300 px-6 py-3 rounded-lg text-lg hover:bg-gray-100 transition"
        >
          Voir ma commande
        </a>
      </div>
    </div>
  );
}