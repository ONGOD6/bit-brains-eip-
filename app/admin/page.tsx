// app/admin/page.tsx
// Bit Brains — Admin Interface
//
// Author: Alex Diaz
// Developer: ONGOD
//
// Description:
// Internal administrative interface for Bit Brains.
// This page will later control mint toggles, epoch states,
// and backend verification signals (ZK + ownership checks).
//
// NOTE:
// - No wallet connections here
// - No private keys
// - UI only, logic will be wired later

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <section className="max-w-4xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-bold">Bit Brains — Admin</h1>
          <p className="text-gray-400 mt-2">
            Internal control panel (restricted access)
          </p>
        </header>

        <section className="border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Mint Controls</h2>

          <div className="flex items-center justify-between">
            <span className="text-gray-300">Mint Status</span>
            <button
              disabled
              className="px-4 py-2 rounded bg-gray-700 text-gray-400 cursor-not-allowed"
            >
              Disabled
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-3">
            Mint activation will be wired to backend logic and contract state.
          </p>
        </section>

        <section className="border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Epoch Status</h2>
          <p className="text-gray-400">
            Epoch configuration and progression will appear here.
          </p>
        </section>

        <footer className="pt-8 text-xs text-gray-600">
          Bit Brains Protocol • Admin Interface
        </footer>
      </section>
    </main>
  );
}
