// MainLayout.tsx
import NavBar from "../components/Navbar/Navbar";
import { useMovies } from "../context/MovieContext";

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainLayout = ({ children }: Props) => {
  const { modalVideoUrl, closeModal } = useMovies();

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">{children}</main>


      {modalVideoUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg relative w-11/12 max-w-3xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
            >
              ✖
            </button>
            <iframe
              width="560"
              height="315"
              src={modalVideoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
