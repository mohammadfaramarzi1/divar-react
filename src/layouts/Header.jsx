import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getProfile } from "services/user";

import styles from "layouts/Header.module.css";
import { removeCookie } from "src/utils/cookie";

function Header() {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);

  const clickHandler = () => {
    removeCookie();
    navigate("/");
    refetch()
  };

  return (
    <header className={styles.header}>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="divar" className={styles.logo} />
        </Link>
        <span>
          <img src="location.svg" alt="location" />
          <p>تهران</p>
        </span>
      </div>
      <div>
        <Link to="/auth">
          <span>
            <img src="profile.svg" alt="profile" />
            <p>دیوار من</p>
          </span>
        </Link>
        <button className={styles.exit} onClick={clickHandler}>
          خروج از حساب کاربری
        </button>
        <Link to="/dashboard" className={styles.button}>
          ثبت آگهی
        </Link>
      </div>
    </header>
  );
}

export default Header;
