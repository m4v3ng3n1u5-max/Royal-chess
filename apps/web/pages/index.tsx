import Head from 'next/head'

export default function Home() {
  return (
    <div className="page-root">
      <Head>
        <title>ROYAL CHESS KINGDOM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <h1>ROYAL CHESS KINGDOM</h1>
      </header>

      <main className="container">
        <section className="card">
          <h2>Play</h2>
          <p>Start local matches or connect to the mobile app. Offline-first design.</p>
          <div className="muted">Mobile app and advanced features available in the native app.</div>
        </section>

        <section className="card">
          <h2>Adventure</h2>
          <p>Progress through levels and puzzles. Track your ranking and unlock boss stages.</p>
        </section>

        <section className="card">
          <h2>Leaderboard</h2>
          <p>View top players, points and records. Syncs when online.</p>
        </section>
      </main>

      <footer className="site-footer">
        <div>© {new Date().getFullYear()} Royal Chess</div>
      </footer>

      <style jsx>{`
        .page-root { min-height:100vh; display:flex; flex-direction:column; background:linear-gradient(180deg,#071633 0%, #081a33 100%); color:#fff; font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        .site-header { background:#0f1724; padding:20px; text-align:center; border-bottom:3px solid #007BFF }
        .site-header h1{ margin:0; font-size:1.5rem; letter-spacing:1px }
        .container { padding:24px; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:16px; max-width:1000px; margin:24px auto; width:100% }
        .card { background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.04); padding:18px; border-radius:10px }
        .card h2{ margin:0 0 8px 0; color:#E6F0FA }
        .muted{ color:#94A3B8; font-size:0.9rem }
        .site-footer{ text-align:center; padding:12px; margin-top:auto; color:#94A3B8 }
      `}</style>
    </div>
  )
}
