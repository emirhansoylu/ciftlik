import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfo {
  phone: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
  };
}

interface ContactProps {
  title: string;
  contactInfo: ContactInfo;
}

export const Contact = ({ title, contactInfo }: ContactProps) => {
  return (
    <section id="contact" className="py-12 sm:py-16 px-4 bg-background-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="bg-primary p-4 rounded-full text-white mb-4 transform hover:scale-110 transition-transform duration-300">
              <FaPhone className="text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">Telefon</h3>
            <p className="text-accent hover:text-accent-dark transition-colors duration-300 font-medium">
              {contactInfo.phone}
            </p>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="bg-primary p-4 rounded-full text-white mb-4 transform hover:scale-110 transition-transform duration-300">
              <FaWhatsapp className="text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">WhatsApp</h3>
            <p className="text-accent hover:text-accent-dark transition-colors duration-300 font-medium">
              {contactInfo.whatsapp}
            </p>
          </a>

          <a
            href={`https://maps.app.goo.gl/stqo9x6NmbozsQq26`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <div className="bg-primary p-4 rounded-full text-white mb-4 transform hover:scale-110 transition-transform duration-300">
              <FaMapMarkerAlt className="text-2xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-primary">Adres</h3>
            <p className="text-text hover:text-accent transition-colors duration-300 font-medium">
              {contactInfo.address.street}
            </p>
            <p className="text-text hover:text-accent transition-colors duration-300 font-medium">
              {contactInfo.address.city}
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}; 