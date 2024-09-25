import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { setShowRegisterModal } from "../../../redux/features/stateSlice";
import handleRandomToken from "../../../utils/handleRandomToken";
import { settings } from "../../../api";
import handleEncryptData from "../../../utils/handleEncryptData";
import toast from "react-hot-toast";
import { setUser } from "../../../redux/features/auth/authSlice";
import { useForm } from "react-hook-form";
import images from "../../../assets/images";
import useGetSocialLink from "../../../hooks/useGetSocialLink";

const Register = () => {
  const { socialLink } = useGetSocialLink();
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState({});
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const registerRef = useRef();
  useCloseModalClickOutside(registerRef, () => {
    dispatch(setShowRegisterModal(false));
  });

  const handleMobileInputChange = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const handleOTP = async () => {
    if (!mobile) {
      return toast.error("Please enter mobile no");
    }
    const generatedToken = handleRandomToken();
    const otpData = {
      mobile,
      token: generatedToken,
      site: settings?.siteUrl,
    };
    const encryptedData = handleEncryptData(otpData);
    const res = await getOTP(encryptedData).unwrap();
    if (res?.success) {
      setOTP({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const generatedToken = handleRandomToken();
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      site: settings.siteUrl,
      token: generatedToken,
      otp: data?.otp,
      isOtpAvailable: settings.otp,
      referralCode: data?.referralCode,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };
    const encryptedData = handleEncryptData(registerData);
    const result = await handleRegister(encryptedData).unwrap();
    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      dispatch(setUser({ user, token, bonusToken }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      if (token && user) {
        dispatch(setShowRegisterModal(false));
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
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
          ref={registerRef}
        >
          <div className="modal-body p-0" id="content">
            <button
              onClick={() => dispatch(setShowRegisterModal(false))}
              type="button"
              className="close text-black closearrow"
              data-dismiss="modal"
              aria-hidden="true"
            >
              ×
            </button>
            <img
              src="static/images/signup-popup.webp"
              alt=""
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            />
            <h5
              className="modal-title mt-0 text-black text-center f11"
              id="myModalLabel"
            >
              Register as New User
            </h5>

            {socialLink?.whatsapplink && (
              <>
                <div className="getid">Get your instant ID from whatsapp</div>
                <div>
                  <div className="signUpNew_whattsUp_button btn-grad">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        handleOpenSocialLink(socialLink?.whatsapplink)
                      }
                      className="whatsapp-text"
                    >
                      <div className="signUpNew_whattsUp_button-icon">
                        <img src={images.whatsapp} />
                      </div>
                      <div className="signUpNew_whattsUp_button-number blinking">
                        WHATSAPP NOW
                      </div>
                    </a>
                  </div>
                </div>
                <div className="signUpNew-separator">
                  <div className="signUpNew-separator-rightLine"></div>
                  <div className="signUpNew-separator-or">OR</div>
                  <div className="signUpNew-separator-leftLine"></div>
                </div>
              </>
            )}

            <div>
              <div className="mb-1 mt-2 p-relative">
                <label htmlFor="mobileNumber" className="uname" data-icon="u">
                  Mobile <span className="star">*</span>
                </label>
                <div className="react-tel-input">
                  <input
                    maxLength={10}
                    onChange={(e) => handleMobileInputChange(e)}
                    className="form-control"
                    placeholder="Enter Mobile Number"
                    type="tel"
                    value={mobile}
                  />
                  <div className="flag-dropdown">
                    <div
                      className="selected-flag"
                      title="India: + 91"
                      role="button"
                      aria-haspopup="listbox"
                    >
                      <div className="flag in">
                        <div className="arrow"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleOTP}
                  className="btn-type-submit otpbtnnew"
                  type="button"
                >
                  Get Code
                </button>
              </div>
              <div className="mb-1">
                <label htmlFor="otpsignup" className="uname" data-icon="u">
                  Enter Code <span className="star">*</span>
                </label>
                <input
                  {...register("otp", { required: true })}
                  className="field"
                  type="text"
                  placeholder="Enter OTP"
                />
              </div>

              <div className="mb-1">
                <label
                  htmlFor="passwordsignup"
                  className="youpasswd"
                  data-icon="p"
                >
                  Password <span className="star">*</span>{" "}
                </label>
                <input
                  {...register("password", { required: true })}
                  className="field"
                  type={isPassword ? "password" : "text"}
                  placeholder="Password"
                />
                <span
                  onClick={() => setIsPassword((prev) => !prev)}
                  className="float-right"
                  style={{
                    marginTop: "-30px",
                    marginRight: "8px",
                    cursor: "pointer",
                  }}
                >
                  <i
                    className={`fa ${isPassword ? "fa-eye-slash" : "fa-eye"}`}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="mb-1">
                <label
                  htmlFor="passwordsignup_confirm"
                  className="youpasswd"
                  data-icon="p"
                >
                  Confirm password <span className="star">*</span>
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  className="field"
                  type={isConfirmPassword ? "password" : "text"}
                  placeholder="Confirm Password"
                />
                <span
                  onClick={() => setIsConfirmPassword((prev) => !prev)}
                  className="float-right"
                  style={{ marginTop: "-30px", marginRight: "8px" }}
                >
                  <i
                    className={`fa ${
                      isConfirmPassword ? "fa-eye-slash" : "fa-eye"
                    }`}
                    aria-hidden="true"
                  ></i>
                </span>
              </div>
              <div className="mb-1">
                <label
                  htmlFor="signUpReferenceName"
                  className="uname"
                  data-icon="u"
                >
                  Referral code
                </label>
                <input
                  {...register("referralCode", { required: true })}
                  className="field text-transform-uppercase"
                  type="text"
                  placeholder="Referral Code"
                />
              </div>
              <div className="signin mb-1 f11-login">
                By clicking on the Register button, you agree to the
                <a className="text-blue">Terms and Conditions</a>
                and confirm that you are over <strong>18 years old</strong>.
              </div>
            </div>
          </div>
          <div className="modal-footer" id="content1">
            <div className="signin button mx-auto">
              <button type="submit" className="btn-type-submit">
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="modal-backdrop fade show"></div>
    </div>
  );
};

export default Register;
