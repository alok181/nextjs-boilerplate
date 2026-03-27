import React from "react";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="relative px-6 py-32 text-center overflow-hidden">
        
        {/* subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 to-black pointer-events-none" />

        <div className="relative max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-semibold leading-tight tracking-tight">
            Institutional On/Off Ramps.
            <br />
            <span className="text-gray-400">Without Friction.</span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto">
            Liquidity, fiat rails, custody, and compliance — unified into one infrastructure layer.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Move size. Not markets.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium">
              Request Access
            </button>
            <button className="px-6 py-3 border border-gray-700 rounded-lg">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* FLOW */}
      <section className="py-16 text-center">
        <div className="inline-block border border-zinc-800 rounded-xl px-6 py-4 text-gray-400">
          USD / EUR / AED → <span className="text-white">AssetRails</span> → BTC / USDT / USDC
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-12 text-center">
          Infrastructure for Institutional Capital Flows
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            {
              title: "Liquidity & Execution",
              desc: "Move size without moving markets.",
            },
            {
              title: "Fiat On/Off Ramps",
              desc: "Seamless fiat ↔ crypto conversion.",
            },
            {
              title: "Custody & Settlement",
              desc: "Secure and integrated asset flows.",
            },
            {
              title: "Treasury & Compliance",
              desc: "Operate with confidence.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 backdrop-blur hover:border-zinc-600 transition"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400 mt-3">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-32 text-center border-t border-zinc-800">
        <h2 className="text-3xl font-semibold">
          Ready to Move Size Without Moving Markets?
        </h2>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-white text-black rounded-lg">
            Request Access
          </button>
          <button className="px-6 py-3 border border-gray-700 rounded-lg">
            Talk to Sales
          </button>
        </div>
      </section>

    </div>
  );
}
