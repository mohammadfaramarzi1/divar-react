import React from "react";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const submitHandler = (event) => {
    event.preventDefault();
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
      <button>تغییر شماره ی موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
