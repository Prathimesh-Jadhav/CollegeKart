import { useState } from "react";
import { MapPin, Home, Download } from "lucide-react";
import hostelImg from "../assets/hostelimg.jpg"


const Details = ({ data }) => {
  const [expanded, setExpanded] = useState(false); 

  // Function to handle PDF download
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hostel_Rulebook.pdf"; 
    link.download = "Rulebook.pdf"; 
    link.click();
  };
  

  return (
    <>
      
      {expanded && <div className="fixed inset-0 transition-opacity duration-300 bg-black "></div>}

      {/* Navbar */}
      <div className="relative z-10 flex items-center justify-center w-full font-bold text-white bg-black shadow-md h-14">
        Navbar
      </div>

      {/* Main Section */}
      <div className="relative z-10 flex flex-col w-full min-h-screen text-white bg-black sm:flex-row-reverse">
        {/* Right Section - Image */}
        <div className="relative mx-6 my-8 lg:mx-44">
          <img
            src={hostelImg}
            alt={data.name}
            className="h-[300px] w-[400px] sm:h-[450px] sm:w-[600px] rounded-lg shadow-lg transition-all duration-300"
          />

          {/* Overlapping div */}
          <div
            className={`bg-gray-800 p-6 rounded-lg shadow-2xl transition-all duration-300 ${
              expanded ? "w-[90%] sm:w-[450px] h-auto" : "w-[90%] sm:w-[400px]"
            } 
            absolute sm:top-[100px] right-[40px] sm:right-[540px] mt-5 
            sm:absolute sm:top-[70px]
            ${
              expanded
                ? "top-auto mt-4 sm:top-[50px] sm:mt-2" // Moves below on small screens
                : "top-auto sm:top-[50px]" // Maintains original position
            }
            `}
          >
            <h2 className="flex items-center gap-2 mb-2 text-xl font-bold text-[#eaeaea]">
              <Home className="text-yellow-400" /> {data.name}
            </h2>
            <p className="text-sm text-[#eaeaea]">Owner: {data.owner}</p>
            <p className="flex items-center gap-2 mt-1 text-sm text-[#eaeaea]">
              <MapPin className="text-blue-400" /> Location: {data.location}
            </p>
            <p className="mt-3 text-[#eaeaea]">{data.description}</p>

            
            {expanded && (
              <div className="pt-4 mt-4 border-t border-gray-700">
                <h3 className="text-lg font-semibold text-white">📜 Rules</h3>
                <ul className="text-sm text-[#eaeaea] list-disc list-inside">
                  {data.rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                  ))}
                </ul>

                <h3 className="mt-4 text-lg font-semibold text-white">🛏️ Facilities</h3>
                <ul className="text-sm text-[#eaeaea] list-disc list-inside">
                  {data.facilities.map((facility, index) => (
                    <li key={index}>{facility}</li>
                  ))}
                </ul>

                
                <div className="mt-4">
                  <button
                    onClick={handleDownload}
                    className="flex items-center justify-center gap-2 px-4 py-2 font-semibold text-black w-full transition bg-[#86F8FE] rounded-lg hover:bg-[#5ad5e3] shadow-md"
                  >
                    <Download size={20} /> Download Rulebook 📥
                  </button>
                </div>
              </div>
            )}

            
            <button
              onClick={() => setExpanded(!expanded)}
              className="w-full py-2 mt-4 font-semibold text-black transition bg-[#86F8FE] rounded-lg hover:bg-[#5ad5e3]"
            >
              {expanded ? "Show Less" : "Explore More"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
