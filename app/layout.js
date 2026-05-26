import "./globals.css";

export const metadata = {
  title: "The Redhood House - A creative production house",
  description: "A creative production house",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
