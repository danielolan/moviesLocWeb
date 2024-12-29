// MainLayout.tsx
import NavBar from "../components/Navbar/Navbar";
interface Props {
  children: JSX.Element | JSX.Element[];
}
export const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
      {children}
      </main>
    </div>
  );
};

export default MainLayout;
