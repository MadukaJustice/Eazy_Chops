import Categories from "./components/Categories";
import TopPicks from "./components/TopPicks"
import Delivery from "./components/Delivery";
import Featured from "./components/Featured";
import TopNav from "./components/TopNav";
import Meal from "./components/Meal";
import Newsletter from "./components/NewsLetter";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <TopNav />
      <Featured />
      <Delivery />
      <TopPicks />
      <Meal />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
