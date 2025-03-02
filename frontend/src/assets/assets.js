import foodcourt from './food-court.png'
import place1 from './hotel.jpeg'
import hostelImg from "./hostel.png";
import hostelImgSelected from "./hostel-selected.png";
import messImg from "./mess.png";
import messImgSelected from "./mess-selected.png";
import clinicImg from "./clinic.png";
import clinicImgSelected from "./clinic-selected.png";
import medicalImg from "./medical.png";
import medicalImgSelected from "./medical-selected.png";
import stationeryImg from "./stationery.png";
import stationeryImgSelected from "./stationery-selected.png";


export const assets = {
    foodcourt,
    categoryImages: {
      Hostel: { default: hostelImg, selected: hostelImgSelected },
      Mess: { default: messImg, selected: messImgSelected },
      Clinic: { default: clinicImg, selected: clinicImgSelected },
      Medical: { default: medicalImg, selected: medicalImgSelected },
      Stationery: { default: stationeryImg, selected: stationeryImgSelected },
    },
  };
export const Places = [
    {
        _id: 'place1',
        name: 'Hostel XYZ',
        ownername:'Owner 1',
        image: place1,
        category: 'Hostel',
        rating: 4.2,
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, vero!',
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    
    {
        _id: 'place2',
        name: 'Mess XYZ',
        ownername:'Owner 2',
        image: place1,
        category: 'Mess',
        rating: 4.3,
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, vero!',
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'place3',
        name: 'Clinic XYZ',
        ownername:'Owner 3',
        image: place1,
        category: 'Clinic',
        rating: 4.0,
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, vero!',
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'place4',
        name: 'Medical XYZ',
        ownername:'Owner 4',
        image: place1,
        category: 'Medical',
        rating: 4.5,
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, vero!',
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'place5',
        name: 'Stationary XYZ',
        ownername:'Owner 5',
        image: place1,
        category: 'Stationery',
        rating: 4.1,
        about: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, vero!',
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    }
]