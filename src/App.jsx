import BookList from "./components/BookList";
import Footer from "./components/Footer";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container__row">
      <Sidebar></Sidebar>
      <div>
        <Search></Search>
        <BookList></BookList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
