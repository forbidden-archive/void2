import { logs } from "../../data/logs";
import Menu from "../components/Menu";

export default function NetworkPage() {
  return (
    <main className="page">
      <Menu />

      <h1>THINKING NETWORK</h1>

      <div className="network">
        {logs.map((log, index) => (
          <div className="node" key={log.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{log.title}</h2>
            <p>{log.thought}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
