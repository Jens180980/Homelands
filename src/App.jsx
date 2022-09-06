import { BrowserRouter } from "react-router-dom";
import { AllRoutes } from "./Components/Partials/AllRoutes";
import { AuthWrapper } from "./Components/StateManagement/Authorize";
import { Footer } from "./Components/Partials/Footer";
import { Header } from "./Components/Partials/Header";
import { Main } from "./Components/Partials/Main";
import { ListWrapper } from "./Components/StateManagement/ListData";
import Style from './Assets/scss/App.module.scss'


function App() {
  return (
    <body className={Style.body}>
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
    </body>
  );
}

export default App;
