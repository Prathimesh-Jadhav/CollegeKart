import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { assets, Places } from "../assets/assets"; // Ensure correct import

const categories = ["Hostel", "Mess", "Clinic", "Medical", "Stationery"];

const Facilities = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  // Function to handle category click (toggle filter)
  const handleCategoryClick = (cat) => {
    if (category?.toLowerCase() === cat.toLowerCase()) {
      navigate("/facilities"); // Remove filter (Show all places)
    } else {
      navigate(`/facilities/${cat}`); // Apply filter
    }
  };

  useEffect(() => {
    const selectedCategory = category ? category.trim().toLowerCase() : "";

    // Filter places based on category
    const filtered = selectedCategory
      ? Places.filter(
          (place) => place.category.toLowerCase() === selectedCategory
        )
      : Places;

    setFilteredPlaces(filtered);
  }, [category]);

  return (
    <div className="m-10">
      <p className="text-white text-lg font-semibold">
        Browse through the Facilities.
      </p>

      <div className="flex flex-wrap gap-4 mt-10 text-sm text-white">
        {categories.map((cat) => {
          const isSelected = category?.toLowerCase() === cat.toLowerCase();
          
          const categoryImage = assets.categoryImages[cat]?.default; 
          const selectedImage = assets.categoryImages[cat]?.selected; 

          return (
            <div
              key={cat}
              onClick={() => handleCategoryClick(cat)}
              className={`flex items-center gap-3 px-5 py-2 border border-gray-300 rounded cursor-pointer transition-all 
              ${isSelected ? "bg-white text-black font-bold" : ""}`}
            >
              <img
                className="w-4 h-4"
                src={isSelected ? selectedImage : categoryImage} // Dynamically change image
                alt={cat}
              />
              <p>{cat}</p>
            </div>
          );
        })}
      </div>

      {/* Cards */}
      <div className="mt-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-6">
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map((place) => (
            <div
              key={place._id}
              onClick={() =>
                navigate(`/${place.category.toLowerCase()}/${place._id}`)
              }
              className="bg-gray-800  text-white p-4 cursor-pointer border border-gray-200 rounded-xl overflow-hidden hover:translate-y-[-10px] transition-all duration-500"
            >
              <img
                src={place.image}
                alt={place.name}
                className="h-40 w-full object-cover rounded-lg"
              />
              <p className="mt-3 text-lg font-semibold">{place.name}</p>
              <p className="text-gray-400 text-sm">
                {place.address.line1}, {place.address.line2}
              </p>
              <p className="text-yellow-400 text-sm font-bold">⭐ {place.rating}</p>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">
            No places found for this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Facilities;
