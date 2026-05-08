export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-lg font-bold text-white">
            AgentReady
          </a>

          <nav className="flex items-center gap-6 text-sm">
            <a
              href="https://app.agentreadyapp.io/demo"
              className="text-slate-400 transition hover:text-white"
            >
              Demo
            </a>

            <a
              href="https://app.agentreadyapp.io/pricing"
              className="text-slate-400 transition hover:text-white"
            >
              Pricing
            </a>

            <a
              href="https://app.agentreadyapp.io/contact"
              className="text-slate-400 transition hover:text-white"
            >
              Contact
            </a>

            <a
              href="https://app.agentreadyapp.io/signup"
              className="rounded-lg bg-green-500 px-4 py-2 font-semibold text-black transition hover:bg-green-400"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mb-6 inline-flex rounded-full border border-green-500/30 bg-green-950/30 px-4 py-2 text-sm text-green-300">
          Live AI traffic visibility for your website
        </div>

        <h1 className="text-5xl font-bold leading-tight">
          Your Website Is Being Read by AI Bots Right Now
          <span className="block text-green-400">
            You Just Can’t See It Yet
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
          AgentReady shows you exactly how ChatGPT, GPTBot, Claude, Perplexity,
          and AI crawlers are using your site — so you can protect content,
          pricing, and traffic before it impacts your business.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://app.agentreadyapp.io/signup"
            className="rounded bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400"
          >
            Start Tracking AI Traffic Free
          </a>

          <a
            href="https://app.agentreadyapp.io/demo"
            className="rounded border border-green-600 px-6 py-3 font-semibold text-green-300 hover:border-green-400 hover:text-green-200"
          >
            View Live Demo
          </a>

          <a
            href="#how-it-works"
            className="rounded border border-slate-700 px-6 py-3 text-slate-300 hover:text-white"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-4 text-sm text-slate-500">
          No credit card required • Setup takes minutes • Live demo available
        </p>

        <p className="mt-12 text-center text-sm text-slate-500">
          Detecting traffic from GPTBot, ChatGPT-User, Claude, Perplexity,
          OpenAI agents, and more
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
          <span className="block text-green-400">Why ignore AI traffic?</span>
        </h2>
      </section>

      {/* LIVE DEMO TEASER */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-green-700 bg-green-950/20 p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold text-green-400">
                SEE IT BEFORE YOU INSTALL
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Explore a live sample dashboard first
              </h2>

              <p className="mt-4 text-slate-300">
                View sample AI traffic hitting pricing, demo, contact, and API
                pages. See the Revenue Exposure Report before connecting your
                own website.
              </p>

              <a
                href="https://app.agentreadyapp.io/demo"
                className="mt-6 inline-block rounded bg-green-500 px-5 py-3 font-semibold text-black hover:bg-green-400"
              >
                Open Live Demo
              </a>
            </div>

            <div className="rounded-xl border border-slate-800 bg-black p-5">
              <div className="grid grid-cols-2 gap-3">
                <MiniStat label="AI Sessions" value="42" />
                <MiniStat label="Risk Score" value="9/10" danger />
                <MiniStat label="High-Value URLs" value="4" warning />
                <MiniStat label="Top Vendor" value="ChatGPT" />
              </div>

              <div className="mt-4 rounded-lg border border-red-800 bg-red-950/20 p-4">
                <p className="text-sm font-semibold text-red-300">
                  Active Revenue Exposure Detected
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  AI systems accessed pricing, demo, contact, and quote-related
                  pages.
                </p>
              </div>
            </div>
          </div>
        </div>
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
              title: 'Revenue Exposure',
              desc: 'Identify pricing, contact, demo, quote, and API pages accessed by AI traffic.',
            },
          ].map((f) => (
            <div
              key={f.title}
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
        <h2 className="text-3xl font-bold">Setup in Minutes</h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          AgentReady guides you by website platform, including WordPress,
          Shopify, Wix, Squarespace, Webflow, and custom websites.
        </p>

        <div className="mt-10 space-y-4 text-slate-400">
          <p>1. Add your website domain</p>
          <p>2. Choose your website platform</p>
          <p>3. Install one lightweight tracking script</p>
          <p>4. Watch AI traffic appear in your dashboard</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded bg-slate-950 p-4 text-left text-sm text-green-400">
          {
            '<script src="https://app.agentreadyapp.io/agentready.js" async></script>'
          }
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold">Start Tracking AI Traffic Today</h2>

        <p className="mt-4 text-slate-400">
          Free plan available. No credit card required.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://app.agentreadyapp.io/signup"
            className="rounded bg-green-500 px-8 py-3 font-semibold text-black hover:bg-green-400"
          >
            Start Tracking Free
          </a>

          <a
            href="https://app.agentreadyapp.io/demo"
            className="rounded border border-slate-700 px-8 py-3 font-semibold text-white hover:border-slate-500"
          >
            View Live Demo
          </a>

          <a
            href="https://app.agentreadyapp.io/contact"
            className="rounded border border-green-700 px-8 py-3 font-semibold text-green-300 hover:border-green-500 hover:text-green-200"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span>© {new Date().getFullYear()} AgentReady. All rights reserved.</span>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
        </div>
      </footer>
    </main>
  )
}

function MiniStat({
  label,
  value,
  danger,
  warning,
}: {
  label: string
  value: string
  danger?: boolean
  warning?: boolean
}) {
  const color = danger
    ? 'text-red-400'
    : warning
      ? 'text-yellow-400'
      : 'text-white'

  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
      <p className="text-xs text-slate-500">{label}</p>
      <p className={`mt-2 text-xl font-bold ${color}`}>{value}</p>
    </div>
  )
}