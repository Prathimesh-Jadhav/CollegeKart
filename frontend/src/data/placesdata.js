const placesData = {
    hostel: {
      id: 1,
      name: "ABC Hostel",
      owner: "John Doe",
      location: "XYZ Street, City",
      description:
        "ABC Hostel provides a safe and comfortable environment for students, with modern amenities.",
      image: "../assets/hostelimg.jpg",
      rules: [
        "⏰ Entry Time: 10:00 PM",
        "🚫 No outsiders allowed inside rooms",
        "🧹 Cleanliness & discipline must be maintained",
        "📶 Wi-Fi usage restrictions from 1 AM - 5 AM",
      ],
      facilities: [
        "🏘️ Total Rooms: 50",
        "👨‍🎓 Students per Room: 2-3",
        "🚿 Attached Bathroom: Yes",
        "🛋️ Furnished: Bed, Study Table, Cupboard",
        "🔐 24/7 Security & CCTV",
        "📚 Common Study Room & Library",
        "🍽️ Mess with Veg & Non-Veg Options",
        "🧺 Laundry & Housekeeping Services",
      ],
      rulebook: "/assets/rulebook.pdf",
    },
    mess: {
      id: 2,
      name: "XYZ Mess",
      owner: "Jane Smith",
      location: "ABC Road, City",
      description: "XYZ Mess provides hygienic and nutritious meals for students and staff.",
      image: "/assets/messimg.jpg",
      rules: [
        "🥘 Meal Timings: 7 AM - 10 PM",
        "🚫 No outside food allowed",
        "🍽️ Plates should be returned after use",
      ],
      facilities: [
        "🥗 Veg & Non-Veg Options",
        "🍛 Buffet & À la carte available",
        "🥤 Filtered drinking water",
      ],
      rulebook: "/assets/mess_rulebook.pdf",
    },
  };
  
  export default placesData;
  