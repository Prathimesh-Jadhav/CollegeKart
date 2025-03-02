import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaFilePdf, FaMapMarkerAlt, FaPhone, FaBuilding } from "react-icons/fa";

export default function AuthPage({login}) {
  const [isLogin, setIsLogin] = useState(login);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("User");
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");

  const userFields = {
    Medical: ["ID", "Name", "Location", "Certificate (PDF)", "Contact Number"],
    Hostel: ["Hostel Name", "Owner Name", "Rule Book (PDF)", "Contact Number", "Available Rooms", "Location"],
    Mess: ["Mess Name", "Owner Name", "Rule Book (PDF)", "Contact Number", "Location"],
    Clinic: ["Doctor ID", "Doctor Name", "Contact Number", "Specialization", "Clinic Name", "Location"],
    Stationery: ["Name", "Owner Name", "Contact Number", "Location"],
    User: ["Name", "Location", "Contact Number"],
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prev) => ({ ...prev, Location: `${latitude}, ${longitude}` }));
        },
        (error) => {
          alert("Location access denied. Please enter manually.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Invalid credentials");
      return;
    }
    if (!email.includes("@")) {
      setError("Email must include '@'");
      return;
    }
    if (password.length > 8) {
      setError("Password must not exceed 8 characters");
      return;
    }
    setError("");
    console.log({ email
    }, { password
    }, { userType
    }, { formData
    });
    if (!isLogin) {
      setEmail("");
      setPassword("");
      setFormData({});
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white text-black rounded-2xl shadow-xl flex flex-col items-center text-center">
        <h1 className="text-4xl font-extrabold">Welcome Back</h1>
        <h2 className="text-2xl font-bold">{isLogin ? "Login" : "Sign Up"}</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form className="space-y-4 w-full flex flex-col items-center" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="border border-gray-600 rounded-lg p-3 w-full bg-gray-200 focus:ring-2 focus:ring-blue-500 text-black"
              >
                {Object.keys(userFields).map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {userFields[userType].map((field) => (
                <div
                  key={field}
                  className="flex items-center border border-gray-600 rounded-lg p-3 w-full bg-gray-200 focus-within:ring-2 focus-within:ring-blue-500"
                >
                  {field.includes("PDF") ? <FaFilePdf className="text-gray-600 mr-2" /> : field === "Location" ? <FaMapMarkerAlt className="text-gray-600 mr-2" /> : <FaUser className="text-gray-600 mr-2" />}
                  <input
                    type={field.includes("PDF") ? "file" : "text"}
                    placeholder={field}
                    value={field.includes("PDF") ? undefined : formData[field] || ""}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className="w-full bg-transparent focus:outline-none  text-black"
                  />
                  {field === "Location" && (
                    <button
                      type="button"
                      onClick={handleLocation}
                      className="ml-2 text-blue-500 underline text-sm"
                    >
                      Get Current Location
                    </button>
                  )}
                </div>
              ))}
            </>
          )}
          <div className="flex items-center border border-gray-600 rounded-lg p-3 w-full bg-gray-200 focus-within:ring-2 focus-within:ring-blue-500">
            <FaEnvelope className="text-gray-600 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent focus:outline-none  text-black"
            />
          </div>
          <div className="flex items-center border border-gray-600 rounded-lg p-3 w-full bg-gray-200 focus-within:ring-2 focus-within:ring-blue-500">
            <FaLock className="text-gray-600 mr-2" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent focus:outline-none  text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 text-black bg-[#86F8FE] rounded-lg hover:bg-[#FEBA86] transition duration-300 transform hover:scale-105"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"} {" "}
          <span
            onClick={() => {
              setIsLogin(!isLogin);
              if (!isLogin) {
                setEmail("");
                setPassword("");
                setFormData({});
                setError("");
              }
            }}
            className="text-black[#86F8FE] underline cursor-pointer hover:text-[#FEBA86] transition duration-300"
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}
