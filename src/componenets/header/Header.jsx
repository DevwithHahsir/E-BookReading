import "./header.css";
import { useNavigate } from "react-router";

export default function Header() {
  const navigate = useNavigate();
  const handleCreateAccount = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="header-main-container">
        <div className="header-heading">Bookly</div>
        <div className="header-account-btn">
          <button onClick={handleCreateAccount}>Connect Account</button>
        </div>
      </div>
    </>
  );
}
