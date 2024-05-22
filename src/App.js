import {BrowserRouter} from "react-router-dom";
import './App.css';
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import UserProvider from "./users/providers/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <CustomThemeProvider>
          <Layout>
            <Router/>
          </Layout>
        </CustomThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
