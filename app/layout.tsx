import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PadelBuddy",
  description: "Trouver des partenaires pour des tournois de padel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
