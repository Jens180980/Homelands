import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Components/Partials/AllRoutes";
import { AuthWrapper } from "./Components/Partials/Authorize";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";


function App() {
  return (
    <BrowserRouter>
      <AuthWrapper> 
        <Header />
        <Main>

            <AllRoutes />
 
        </Main>
        <Footer />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
