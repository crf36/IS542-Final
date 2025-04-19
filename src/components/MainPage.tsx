import Header from "./Header";
import { Navigation } from "./Navigation";

export default function MainPage() {
  return (
    <main>
      <div className="page-container">
        <Header />
        <Navigation />
      </div>
    </main>
  );
}
