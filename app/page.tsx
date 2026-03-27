import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      
      {/* HERO */}
      <section className="px-6 py-24 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold">
          Institutional On/Off Ramps. Without Friction.
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl mx-auto">
          Liquidity, fiat rails, custody, and compliance — unified into one infrastructure layer.
        </p>
        <p className="mt-4 text-gray-500">Move size. Not markets.</p>
      </section>

      {/* FLOW */}
      <section className="text-center text-gray-500 py-10">
        USD / EUR / AED → AssetRails → BTC / USDT / USDC
      </section>

      {/* SOLUTIONS */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        
        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Liquidity & Execution</h3>
          <p className="text-gray-400 mt-2">Move size without moving markets.</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Fiat On/Off Ramps</h3>
          <p className="text-gray-400 mt-2">Seamless fiat ↔ crypto conversion.</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Custody & Settlement</h3>
          <p className="text-gray-400 mt-2">Secure and integrated asset flows.</p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl">
          <h3 className="text-xl font-semibold">Treasury & Compliance</h3>
          <p className="text-gray-400 mt-2">Operate with confidence.</p>
        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-20">
        <h2 className="text-3xl font-semibold">
          Ready to Move Size Without Moving Markets?
        </h2>
      </section>

    </div>
  );
}
