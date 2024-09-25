import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import {
  setShowForgetModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/stateSlice";
import { useForm } from "react-hook-form";
import handleRandomToken from "../../../utils/handleRandomToken";
import { settings } from "../../../api";
import handleEncryptData from "../../../utils/handleEncryptData";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Login = () => {
  const [isPassword, setIsPassword] = useState(true);
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    dispatch(setShowLoginModal(false));
  });
  const { register, handleSubmit } = useForm({
    // defaultValues: {
    //   username: "9920627976",
    //   password: "avinya123",
    // },
  });

  const onSubmit = async ({ username, password }) => {
    const generatedToken = handleRandomToken();
    const loginData = {
      username: username,
      password: password,
      token: generatedToken,
      site: settings.siteUrl,
      b2c: true,
    };
    const encryptedData = handleEncryptData(loginData);
    const result = await handleLogin(encryptedData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const loginByDemoId = async () => {
    const generatedToken = handleRandomToken();
    const loginData = handleEncryptData({
      username: "demo",
      password: "",
      token: generatedToken,
      site: settings.siteUrl,
      b2c: true,
    });
    const encryptedData = handleEncryptData(loginData);
    const result = await handleLogin(encryptedData).unwrap();
    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  return (
    <div
      id="marketbetspopup"
      className="modal fade show sign-up-form sign-up-form-new"
      role="dialog"
      aria-labelledby="myModalLabel"
      aria-modal="true"
      style={{ display: "block" }}
    >
      <div className="modal-dialog modal-dialog-scrollable modal-sm">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-content"
          ref={loginRef}
        >
          <div className="modal-body" id="content">
            <div>
              <h5
                className="modal-title mt-0 text-black text-center font-bold"
                id="myModalLabel"
              >
                Login
                <button
                  onClick={() => dispatch(setShowLoginModal(false))}
                  type="button"
                  className="close text-black"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </h5>
            </div>
            <div className="text-center">
              <span className="subtitle-text mr-1">Not a member yet?</span>
              <span className="subtitle-text">
                |
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    dispatch(setShowLoginModal(false));
                    dispatch(setShowRegisterModal(true));
                  }}
                  className="link-over-white ml-1"
                >
                  Sign Up
                </a>
              </span>
            </div>
            <div>
              <div className="margin-bottom-5px">
                <label htmlFor="usernameforgot" className="uname" data-icon="u">
                  User ID
                </label>
                <input
                  {...register("username", { required: true })}
                  className="field lowercase"
                  type="text"
                  placeholder="username"
                />
              </div>

              <div className="margin-bottom-5px login-password-div">
                <label
                  htmlFor="passwordsignup"
                  className="youpasswd"
                  data-icon="p"
                >
                  Password{" "}
                </label>
                <input
                  {...register("password", { required: true })}
                  className="field p-relative"
                  type={isPassword ? "password" : "text"}
                  id="passcode"
                  placeholder="Password"
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setIsPassword((prev) => !prev)}
                  className="float-right login-password-div-span-i"
                >
                  <i
                    className={`${
                      isPassword ? "fa fa-eye-slash" : "fa fa-eye"
                    }fa fa-eye-slash`}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div
                onClick={() => {
                  dispatch(setShowLoginModal(false));
                  dispatch(setShowForgetModal(true));
                }}
                className="d-flex justify-content-end mb-3"
              >
                <a className="link-over-white signup-validation-text f-color-white">
                  Forgot Password
                </a>
              </div>
              <div className="align-items-md-center d-flex margin-bottom-5px"></div>
            </div>
          </div>
          <div className="modal-footer" id="content1">
            <div className="signin button mx-auto">
              <button className="btn-type-submit" type="submit">
                <span className="">Login</span>
              </button>
            </div>
            <div className="signin button mx-auto">
              <button
                onClick={loginByDemoId}
                type="button"
                className="btn-type-submit"
              >
                <span className="">Demo ID</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};

export default Login;
