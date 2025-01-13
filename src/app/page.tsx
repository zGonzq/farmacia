import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Farmacia",
  description: "Sistema de gestión de farmacias",
};

export default function Home() {
  return ( 
<main className="flex min-h-screen flex-col p-6 gap-4">
  <div className="flex items-center justify-between">
    <h1 className="text-2xl font-bold">Bienvenido, Usuario</h1>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="font-semibold">Total Clientes</h2>
      <p className="text-2xl font-bold">0</p>
      <a href="/clientes" className="text-blue-500 text-sm hover:underline mt-2 block">Ver lista →</a>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="font-semibold">Total Medicamentos</h2>
      <p className="text-2xl font-bold">0</p>
      <a href="/medicamentos" className="text-blue-500 text-sm hover:underline mt-2 block">Ver lista →</a>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="font-semibold">Sin Stock</h2>
      <p className="text-2xl font-bold text-red-500">0</p>
      <a href="/sin-stock" className="text-blue-500 text-sm hover:underline mt-2 block">Ver lista →</a>
    </div>
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="font-semibold">Por Vencer</h2>
      <p className="text-2xl font-bold text-yellow-500">0</p>
      <a href="/por-vencer" className="text-blue-500 text-sm hover:underline mt-2 block">Ver lista →</a>
    </div>
  </div>

  <div className="mt-6 p-4 bg-white rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">Ventas del Mes</h2>
    <div className="h-64 bg-gray-100 rounded">
      {/* Aquí irá el gráfico de ventas */}
    </div>
  </div>
</main>
  );

}