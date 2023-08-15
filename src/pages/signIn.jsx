import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../AuthContext";

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmial] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = UserAuth();

  // console.log(user?.email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setTimeout(() => {
        navigate("/home/" + user.uid);
      }, 500);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-[100vh] flex w-full justify-center relative  items-center">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6c884f48-f7d8-4a59-9d25-b7c138813aee/8db2c637-af3a-4cc7-a59e-edec17f7a102/DZ-fr-20230807-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className="h-full w-full object-cover "
      />
      <div className="w-[350px] h-[450px] md:w-[400px] md:h-[550px] bg-black/80 z-40 absolute rounded flex  justify-center items-center ">
        <div className="h-[80%] w-[70%]  ">
          <h2 className="text-white font-bold text-2xl">Sign In</h2>
          {error != "" && (
            <p className="text-white bg-amber-700 p-2 w-full text-center rounded text-[12px]">
              {error}
            </p>
          )}
          <form className="pt-4 pb-8">
            <input
              onChange={(e) => setEmial(e.target.value)}
              className="w-full py-4 px-2 text-white border-0  rounded bg-gray-700 my-2 "
              type="text"
              name=""
              id=""
              placeholder="email"
              required
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-4 px-2 text-white rounded bg-gray-700 my-2 "
              type="password"
              name=""
              id=""
              required
              placeholder="password"
            />
          </form>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-3 px-2 text-white rounded bg-red-600 my-1 "
          >
            Sign In
          </button>
          <div className=" text-gray-400 text-[13px] flex justify-between items-center  cursor-pointer ">
            <div className=" flex items-center cursor-pointer ">
              <input type="checkbox" name="" id="" />
              <p>Remembre Me</p>
            </div>

            <p>need help?</p>
          </div>
          <p className=" text-gray-500 mt-8 text-[16px] ">
            New to netflix?
            <span
              className="text-white text-[18px] cursor-pointer "
              onClick={() => navigate("/signUp")}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
      <div className="inset-0 absolute bg-black/30  -z-10"></div>
    </div>
  );
}

export default SignIn;
