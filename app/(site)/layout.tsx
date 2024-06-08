import Header from "@/components/landing-page/header";

export default function HomePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="">
      <Header />
      {children}
    </main>
  );
}
