import "./globals.css";

export const metadata = {
  title: "VOID TOWER ARCHIVE",
  description: "Connecting Void Research Archive"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
