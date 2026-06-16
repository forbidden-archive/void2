import Link from "next/link";
import { logs } from "../data/logs";
import Menu from "./components/Menu";
import ScrollProgress from "./components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <Menu />
      <ScrollProgress />

      <section className="hero">
        <div className="bgText">SIGNAL / VOID / GAZE / TOWER</div>

        <div className="heroTop">
          <p>VOID TOWER ARCHIVE</p>
          <p>DESIGN 3 / 2026</p>
        </div>

        <h1 className="mainTitle">
          CONNECTING
          <br />
          VOID
        </h1>

        <p className="heroLead">
          人々をつなげているものが、最も人々から切り離されている。
        </p>

        <svg className="towerLine" viewBox="0 0 300 700">
          <line x1="110" y1="690" x2="145" y2="80" />
          <line x1="190" y1="690" x2="155" y2="80" />
          <line x1="110" y1="690" x2="190" y2="690" />
          <line x1="120" y1="560" x2="180" y2="560" />
          <line x1="130" y1="430" x2="170" y2="430" />
          <line x1="140" y1="300" x2="160" y2="300" />
          <line x1="110" y1="690" x2="180" y2="560" />
          <line x1="190" y1="690" x2="120" y2="560" />
          <line x1="120" y1="560" x2="170" y2="430" />
          <line x1="180" y1="560" x2="130" y2="430" />
          <line x1="130" y1="430" x2="160" y2="300" />
          <line x1="170" y1="430" x2="140" y2="300" />
          <circle cx="150" cy="80" r="44" />
          <circle cx="150" cy="80" r="76" />
          <line x1="74" y1="80" x2="226" y2="80" />
          <line x1="150" y1="4" x2="150" y2="156" />
        </svg>

        <div className="heroBottom">
          <Link href="/log">OBSERVATION LOG</Link>
          <Link href="/network">THINKING NETWORK</Link>
          <Link href="/proposal">PROPOSAL</Link>
        </div>
      </section>

      <section className="statement">
        <p className="small">VOID DEFINITION</p>
        <h2>
          社会に価値を与えたことで、
          <br />
          社会から切り離された存在。
        </h2>
      </section>

      <section className="works">
        <div className="sectionHead">
          <p>OBSERVATION LOG</p>
          <p>{logs.length} RECORDS</p>
        </div>

        {logs.map((log, index) => (
          <Link href="/log" className="workItem" key={log.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{log.title}</h2>
            <p>{log.date}</p>
          </Link>
        ))}
      </section>

      <section className="marquee">
        <div>SIGNAL / VOID / GAZE / TOWER / CONNECT / UNSEEN / SIGNAL / VOID /</div>
      </section>
    </main>
  );
}
