import Dashboard from "../Components/Dashboard";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function Home() {
  return (
    <>
      <div className="Home">
        <Header />
        <Dashboard />
        <Footer />
      </div>
    </>
  );
}
