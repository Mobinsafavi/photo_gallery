import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import SignUpPage from "./pages/SignUp_Page";
import LogInPage from "./pages/LogIn_page";
import MainPage from "./pages/Main_page";
import AlbumPage from "./pages/Album_page";
import PicturePage from "./pages/Picture_page";
import './i18n'

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
