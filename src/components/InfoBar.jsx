import React , { useState } from 'react';
import Image from '/Image.png';
import { IoIosMail } from "react-icons/io";
import { IoPhonePortrait } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { BsYoutube } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaBirthdayCake } from "react-icons/fa";
import { PanelLeftOpen } from 'lucide-react';

const InfoBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-5 right-5 z-50 p-2 bg-[#253030] text-white rounded-lg shadow-md hover:bg-[#0e1624] transition"
        aria-label="Toggle sidebar"
      >
        <PanelLeftOpen size={24} />
      </button>

      <div className={`fixed top-0 left-0 z-40 h-screen w-72 bg-[#040B14] text-white p-6 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0 md:flex md:flex-col md:h-screen`}>

        {/* Profile Image */}
        <div className="flex justify-center items-center">
          <img
            src={Image}
            alt="Profile"
            className="w-28 h-28 rounded-full border-8 border-[#292F37] object-cover shadow-lg"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center mt-4 mb-6">
          <h1 className="text-2xl font-bold">Gyanesh Kumar</h1>
          <p className="text-sm text-gray-400">Hustler</p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-6">
          <a href="https://www.facebook.com/gyanesh.kumar.796569" aria-label="Facebook" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-full transition">
            <FaFacebook size={18} />
          </a>
          <a href="https://x.com/GyaneshKum41451" aria-label="Twitter" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-full transition">
            <RiTwitterXFill size={18} />
          </a>
          <a href="https://www.youtube.com/@clashgamer8867" aria-label="YouTube" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-full transition">
            <BsYoutube size={18} />
          </a>
          <a href="https://www.instagram.com/gyanesh100/" aria-label="Instagram" className="bg-gray-800 hover:bg-cyan-600 p-2 rounded-full transition">
            <LuInstagram size={18} />
          </a>
        </div>

        {/* Info Cards */}
        <div className="w-full space-y-3">
          <InfoItem icon={<FaLocationDot />} label="Location" value="North West Delhi, India" />
          <InfoItem icon={<IoIosMail />} label="Email" value="gyanesh5009@gmail.com" href="mailto:gyanesh5009@gmail.com" />
          <InfoItem icon={<IoPhonePortrait />} label="Phone" value="+91 8368296563" href="tel:+918368296563" />
          <InfoItem icon={<FaBirthdayCake />} label="Birthday" value="25th June 2003" />
        </div>
      </div>
    </>
  );
};

const InfoItem = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-4 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition">
    <div className="text-xl text-cyan-400 mt-1">{icon}</div>
    <div>
      <p className="text-xs uppercase text-gray-400 tracking-wider font-semibold">{label}</p>
      {href ? (
        <a href={href} className="text-sm text-white hover:underline">{value}</a>
      ) : (
        <p className="text-sm text-white">{value}</p>
      )}
    </div>
  </div>
);

export default InfoBar;
