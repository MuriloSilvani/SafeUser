import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-4 text-5xl">🔐</div>
        <h1 className="text-5xl font-bold text-gray-900 mb-2">SafeUser</h1>
        <p className="text-xl text-gray-600 mb-12">Gerenciador de Usuários Seguro</p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            Criar Conta
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition transform hover:scale-105"
          >
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
