import {BrowserRouter} from "react-router-dom";
import './App.css';
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import CustomThemeProvider from "./providers/CustomThemeProvider";

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <Layout>
          <Router/>
        </Layout>
      </CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;
