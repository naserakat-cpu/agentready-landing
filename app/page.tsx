export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h1 className="text-5xl font-bold leading-tight">
          Your Website Is Being Read by AI Bots Right Now
          <span className="block text-green-400">
            You Just Can’t See It Yet
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          AgentReady shows you exactly how ChatGPT, GPTBot, and AI crawlers are
          using your site — so you can protect content, pricing, and traffic
          before it impacts your business.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://app.agentreadyapp.io/signup"
            className="rounded bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400"
          >
            Start Tracking AI Traffic Free
          </a>

          <a
            href="#how-it-works"
            className="rounded border border-slate-700 px-6 py-3 text-slate-300 hover:text-white"
          >
            Watch How It Works
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          No credit card required • Setup takes 30 seconds
        </p>

        <p className="mt-12 text-center text-sm text-slate-500">
          Detecting traffic from GPTBot, ChatGPT-User, OpenAI agents, and more
        </p>
      </section>

      {/* SOCIAL PROOF / PAIN */}
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <p className="text-slate-400">
          AI systems can crawl, summarize, and reuse your content without
          attribution.
        </p>

        <h2 className="mt-4 text-3xl font-semibold">
          You wouldn’t ignore human traffic.
          <span className="block text-green-400">
            Why ignore AI traffic?
          </span>
        </h2>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-3xl font-bold">
          What AgentReady Shows You
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'AI vs Human Traffic',
              desc: 'Know exactly how much of your traffic is AI bots vs real users.',
            },
            {
              title: 'Top Pages Hit by AI',
              desc: 'See which pages AI systems are reading and scraping.',
            },
            {
              title: 'AI Vendor Detection',
              desc: 'Identify ChatGPT, GPTBot, Claude, and other AI agents.',
            },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="mx-auto max-w-4xl px-6 py-20 text-center"
      >
        <h2 className="text-3xl font-bold">Setup in 30 Seconds</h2>

        <div className="mt-10 space-y-4 text-slate-400">
          <p>1. Copy a single tracking script</p>
          <p>2. Paste it into your website</p>
          <p>3. Watch AI traffic appear instantly</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded bg-slate-950 p-4 text-left text-sm text-green-400">
          {
            '<script src="https://app.agentreadyapp.io/agentready.js" async></script>'
          }
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">
          Start Tracking AI Traffic Today
        </h2>

        <p className="mt-4 text-slate-400">
          Free plan available. No credit card required.
        </p>

        <a
          href="https://app.agentreadyapp.io/signup"
          className="mt-8 inline-block rounded bg-green-500 px-8 py-3 font-semibold text-black hover:bg-green-400"
        >
          Start Tracking Free
        </a>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} AgentReady. All rights reserved.
      </footer>
    </main>
  )
}