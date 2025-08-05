// src/app/page.tsx
import { Thermometer, Droplet } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-4 font-sans pb-20">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">IoT Dashboard</h1>
        <span className="text-sm text-green-600 border border-green-600 px-2 py-0.5 rounded-full">Conectado</span>
      </header>

      <section className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex items-center gap-2 text-gray-500">
            <Thermometer size={20} /> <span>Temperatura</span>
          </div>
          <p className="text-3xl font-bold">24.5°C</p>
          <p className="text-sm text-green-600">Óptima</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow">
          <div className="flex items-center gap-2 text-gray-500">
            <Droplet size={20} /> <span>Humedad</span>
          </div>
          <p className="text-3xl font-bold">65%</p>
          <p className="text-sm text-green-600">Ideal</p>
        </div>
      </section>

      <section className="bg-white rounded-xl p-4 shadow mb-4">
        <h2 className="font-semibold mb-2">Historial Ambiental</h2>
        <div className="h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400 text-sm">
          (Gráfico aquí)
        </div>
      </section>

      <section className="bg-white rounded-xl p-4 shadow">
        <h2 className="font-semibold mb-2">Alertas Recientes</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>⚠️ Temperatura alta detectada: 28°C. <br /><span className="text-xs text-gray-400">Hace 5 minutos</span></li>
          <li>✔️ Nivel de humedad estable. <br /><span className="text-xs text-gray-400">Hace 15 minutos</span></li>
        </ul>
      </section>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-2">
        <Link href="/" className="flex flex-col items-center text-blue-600">🏠<span className="text-xs">Dashboard</span></Link>
        <Link href="/alertas" className="flex flex-col items-center text-gray-500">🚨<span className="text-xs">Alertas</span></Link>
        <Link href="/ajustes" className="flex flex-col items-center text-gray-500">⚙️<span className="text-xs">Ajustes</span></Link>
      </footer>
    </main>
  );
}
