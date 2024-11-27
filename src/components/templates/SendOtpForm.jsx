import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { sendOtp } from "../../services/auth";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (mobile.length !== 11) {
      return toast("شماره ی موبایل خود را به صورت صحیح وارد کنید!", {
        position: "top-right",
        type: "warning",
      });
    }
    const { response, error } = await sendOtp(mobile);
    console.log({ response, error });
    if (response) setStep(2);
    if (error)
      toast("با مشکل مواجه شدید!", { position: "top-right", type: "error" });
  };

  return (
    <form onSubmit={submitHandler}>
      <p>ورود به حساب کاربری</p>
      <span>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شماره موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button type="submit">ارسال کد تایید</button>
      <ToastContainer />
    </form>
  );
}

export default SendOtpForm;
