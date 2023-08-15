import { useLocation, useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { idState, logout } = UserAuth();
  // eslint-disable-next-line no-unused-vars
  const [id, _] = idState;
  const isInHome =
    location.pathname === "/home/" + id || location.pathname === "/account";

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <div className=" text-white flex  justify-between p-4 md:px-8  absolute w-full z-50 ">
      <h1
        className=" text-red-500   font-bold  text-3xl md:text-4xl uppercase cursor-pointer"
        onClick={() => navigate("/home/" + id)}
      >
        Netflix
      </h1>
      {isInHome ? (
        <div className="">
          <button
            className="px-2 text-sm "
            onClick={() => navigate("/account")}
          >
            Account
          </button>
          <button
            className="px-4 py-2 text-sm rounded bg-red-700  shadow-lg shadow-red-700/50 hover:bg-red-600  transition-all duration-500 "
            onClick={() => handleLogout()}
          >
            LogOut
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
