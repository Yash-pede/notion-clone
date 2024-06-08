const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="flex over-hidden h-screen">{children}</main>;
};

export default MainLayout;
