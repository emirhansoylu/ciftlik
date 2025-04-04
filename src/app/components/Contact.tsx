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
    <section id="contact" className="py-12 sm:py-16 px-4 bg-background-dark pb-24 sm:pb-28">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-primary">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="bg-white p-5 rounded-full text-primary mb-4 transform hover:scale-110 transition-transform duration-300 border-2 border-primary">
              <FaPhone className="text-3xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">Telefon</h3>
            <p className="text-lg text-accent hover:text-accent-dark transition-colors duration-300 font-medium mt-1">
              {contactInfo.phone}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="bg-white p-5 rounded-full text-primary mb-4 transform hover:scale-110 transition-transform duration-300 border-2 border-primary">
              <FaWhatsapp className="text-3xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">WhatsApp</h3>
            <p className="text-lg text-accent hover:text-accent-dark transition-colors duration-300 font-medium mt-1">
              {contactInfo.whatsapp}
            </p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="bg-white p-5 rounded-full text-primary mb-4 transform hover:scale-110 transition-transform duration-300 border-2 border-primary">
              <FaMapMarkerAlt className="text-3xl" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">Adres</h3>
            <p className="text-lg text-text hover:text-accent transition-colors duration-300 font-medium mt-1">
              {contactInfo.address.street}
            </p>
            <p className="text-lg text-text hover:text-accent transition-colors duration-300 font-medium mt-1">
              {contactInfo.address.city}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}; 