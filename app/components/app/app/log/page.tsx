import { logs } from "../../data/logs";
import Menu from "../components/Menu";
import ScrollProgress from "../components/ScrollProgress";

export default function LogPage() {
  return (
    <main className="page">
      <Menu />
      <ScrollProgress />

      <h1>OBSERVATION LOG</h1>

      {logs.map((log, index) => (
        <article className="card" key={log.id}>
          <p className="small">0{index + 1} / {log.date}</p>
          <h2>{log.title}</h2>
          <p>{log.observation}</p>
          <div className="thought">{log.thought}</div>
        </article>
      ))}
    </main>
  );
}
