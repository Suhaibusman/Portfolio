import locationImage from "../../Images/map.png";
import mailImage from "../../Images/mail.png";
import whatsAppImage from "../../Images/whatsapp.png";
import linkedInImage from "../../Images/linkedIn.png";
import facebookImage from "../../Images/facebook.png";
import instagramImage from "../../Images/Instagram_logo_2016.svg.webp";

const handleHireMeClick = () => {
  window.open("mailto:zohaibsoomro0101@gmail.com", "_blank");
};

const handleWhatsApp = () => {
  const phoneNumber = "+923112136120"; // Replace with the recipient's phone number
  const message = "Hello ! I see your portfolio and I want flutter service"; // Replace with your desired message

  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  window.open(url);
};

export const contactdata = [
  {
    id: 1,
    title: "Location",
    title2: "Karachi, Pakistan",
    img: locationImage,
    locationhover: false,
  },
  {
    id: 2,
    title: "Mail",
    title2: "suhaibusman54@gmail.com",
    img: mailImage,
    click: handleHireMeClick,
  },
  {
    id: 3,
    title: "WhatsApp",
    title2: "0311 2136120",
    img: whatsAppImage,
    click: handleWhatsApp,
  },
  {
    id: 4,
    title: "LinkedIn",
    title2: "Muhammad Suahib Usman",
    img: linkedInImage,
    link: "https://www.linkedin.com/in/suhaibusman/",
    hover: true,
  },
  {
    id: 5,
    title: "Facebook",
    title2: "Suhaib Usman ",
    img: facebookImage,
    link: "https://www.facebook.com/MuhammadSuhaib0",
    hover: true,
  },
  {
    id: 6,
    title: "Instagram",
    title2: "S　U　H　 A　I　B　ツ",
    img: instagramImage,
    link: "https://instagram.com/suhaib__usman",
    hover: true,
  },
];
