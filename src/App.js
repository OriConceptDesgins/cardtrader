import {BrowserRouter} from "react-router-dom";
import './App.css';
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import UserProvider from "./users/providers/UserProvider";
import SnackbarProvider from "./providers/SnackbarProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <SnackbarProvider>
        <CustomThemeProvider>
          <Layout>
            <Router/>
          </Layout>
        </CustomThemeProvider>
        </SnackbarProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
