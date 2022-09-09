import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Components/Partials/AllRoutes";
import { AuthWrapper } from "./Components/StateManagement/Authorize";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";
import { ListWrapper } from "./Components/StateManagement/ListData";
import Style from './Assets/scss/App.module.scss'
import { SearchWrapper } from "./Components/StateManagement/SearchData";


function App() {
  return (
    <section className={Style.body}>
      <BrowserRouter>
        <AuthWrapper> 
        <SearchWrapper>
          <Header />
          <Main>
            
            <ListWrapper>
              <AllRoutes />
            </ListWrapper>
            
          </Main>
          <Footer />
        </SearchWrapper>
        </AuthWrapper>
      </BrowserRouter>
    </section>
  );
}

export default App;
