import "@/styles/lightbox.css";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function LightboxModal({ title = "Pigeon", onClick }) {
  return (
    <section>
      <div className="lightbox-modal">
        <div className="btn-container">
          <button className="prev">
            <FaChevronLeft className="nav-icon" size={30} />
          </button>
        </div>
        <div className="photo-and-title">
          <Image
            src="/PhotoTest.jpg"
            width={350}
            height={300}
            alt={`Photo ${title}`}
            className="picture"
          />
          <p>{title}</p>
        </div>
        <div className="btn-container">
          <button className="next">
            <FaChevronRight className="nav-icon" size={30} />
          </button>
          <button className="close-lightbox-btn" onClick={onClick}>
            <IoMdClose size={42} />
          </button>
        </div>
      </div>
    </section>
  );
}
