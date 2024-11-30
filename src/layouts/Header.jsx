import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div>
        <Link to="/">
          <img src="divar.svg" alt="divar" />
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
        <Link to="/dashboard">ثبت آگهی</Link>
      </div>
    </header>
  );
}

export default Header;
