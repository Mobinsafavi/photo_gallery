import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SignUpPage from "./pages/SignUp_Page";
import LogInPage from "./pages/LogIn_page";
import MainPage from "./pages/Main_page";
import AlbumPage from "./pages/Album_page";
import PicturePage from "./pages/Picture_page";
import "./i18n";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home"></Redirect>
        </Route>
        <Route path="/home">
          <MainPage></MainPage>
        </Route>
        <Route path="/albums/:albumName">
          <AlbumPage></AlbumPage>
        </Route>
        <Route path="/pictures/:pictureId">
          <PicturePage></PicturePage>
        </Route>
        <Route path="/signup">
          <SignUpPage></SignUpPage>
        </Route>
        <Route path="/login">
          <LogInPage></LogInPage>
        </Route>
      </Switch>
    </QueryClientProvider>
  );
}

export default App;
