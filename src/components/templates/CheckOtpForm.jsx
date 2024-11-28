import { toast, ToastContainer } from "react-toastify";
import { checkOtp } from "services/auth";

import { setCookie } from "utils/cookie";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const submitHandler = async (event) => {
    event.preventDefault();
    if (code.length !== 5) {
      return toast("کد ارسال شده را وارد کنید!", {
        position: "top-right",
        type: "warning",
      });
    }
    const { response, error } = await checkOtp(mobile, code);
    console.log({ response, error });

    if(response) {
        setCookie(response.data)
    }

    if (error) {
      toast("کد وارد شده صحیح نیست!", { position: "top-right", type: "error" });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد اس ام اس شده به شماره ی {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره ی موبایل</button>
      <ToastContainer />
    </form>
  );
}

export default CheckOtpForm;
