import Menu from "../components/Menu";

export default function ProposalPage() {
  return (
    <main className="page">
      <Menu />

      <h1>FROM KOTO TO MONO</h1>

      <section className="proposalGrid">
        <div>
          <p className="small">VOID</p>
          <h2>見られない電波塔</h2>
          <p>
            電波塔は人々をつなげている。しかし人々はスマホを見ることで下を向き、
            その接続を支える塔を見上げない。
          </p>
        </div>

        <div>
          <p className="small">KOTO</p>
          <h2>上を向く行為をつくる</h2>
          <p>
            通信という不可視の現象を、身体の向き、視線、光、音として街に現す。
          </p>
        </div>

        <div>
          <p className="small">MONO</p>
          <h2>通信を観測する空間装置</h2>
          <p>
            電波塔の足元に、視線を上へ誘導する都市家具、観測フレーム、
            光のインスタレーションを設計する。
          </p>
        </div>
      </section>
    </main>
  );
}
