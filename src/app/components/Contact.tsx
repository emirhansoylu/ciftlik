import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    coordinates: string;
  };
}

interface ContactProps {
  contactInfo: ContactInfo;
  title: string;
}

export const Contact = ({ contactInfo, title }: ContactProps) => {
  const formatPhoneNumber = (phone: string) => phone.replace(/\D/g, '');

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 bg-background-dark pb-24 sm:pb-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-primary">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <a
            href={`tel:${formatPhoneNumber(contactInfo.phone)}`}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4 mx-auto">
              <i className="fas fa-phone text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2 text-primary">Telefon</h3>
            <p className="text-text-light text-center">{contactInfo.phone}</p>
          </a>

          <a
            href={`https://wa.me/${formatPhoneNumber(contactInfo.whatsapp)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4 mx-auto">
              <i className="fab fa-whatsapp text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2 text-primary">WhatsApp</h3>
            <p className="text-text-light text-center">{contactInfo.whatsapp}</p>
          </a>

          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address.coordinates)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mb-4 mx-auto">
              <i className="fas fa-map-marker-alt text-white text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2 text-primary">Adres</h3>
            <p className="text-text-light text-center">
              {contactInfo.address.street}<br />
              {contactInfo.address.city}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}; 