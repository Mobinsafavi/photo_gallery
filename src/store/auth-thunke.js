import { loginSliceActions } from "./login_slice";

export const sendUserLogInInformation = (userName, password) => {
  return async (dispatch) => {
    const logInPostRequest = async () => {
      const response = await fetch("http://137.74.230.245:8000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: userName,
          password: password,
        }),
      });

      if (!response.ok) {
        if (response.status === 400) {
          throw new Error("invalid username or password");
        }
      }

      if (response.status === 200) {
        dispatch(
          loginSliceActions.requestResponseHandler({
            message: "loggedin successfully",
          })
        );
        dispatch(loginSliceActions.logInHandler());
      }
    };

    try {
      await logInPostRequest();
    } catch (error) {
      dispatch(
        loginSliceActions.requestResponseHandler({ message: error.message })
      );
    }
  };
};

export const sendUserSignUpInformation = (Email, UserName, Password) => {
  return async (dispatch) => {
    const signUppostRequest = async () => {
      const response = await fetch("http://137.74.230.245:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: UserName,
          password: Password,
          email: Email,
        }),
      });

      if (!response.ok) {
        throw new Error("something went wronge");
      }
    };

    try {
      await signUppostRequest();
      dispatch(loginSliceActions.logInHandler);
    } catch (error) {
      console.log(error.message);
    }
  };
};
