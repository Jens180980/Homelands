import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Components/Partials/AllRoutes";
import { AuthWrapper } from "./Components/StateManagement/Authorize";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";
import { ListWrapper } from "./Components/StateManagement/ListData";


function App() {
  return (
    <BrowserRouter>
      <AuthWrapper> 
        <Header />
        <Main>
          <ListWrapper>
            <AllRoutes />
          </ListWrapper>
        </Main>
        <Footer />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
