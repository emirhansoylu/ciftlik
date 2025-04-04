import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfo {
    phone: string;
    whatsapp: string;
    address: {
        street: string;
        city: string;
    };
}

interface StickyContactBarProps {
    contactInfo: ContactInfo;
}

export const StickyContactBar = ({ contactInfo }: StickyContactBarProps) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-primary/10">
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-3 gap-0">
                    <a
                        href={`tel:${contactInfo.phone}`}
                        className="flex items-center justify-center gap-3 py-4 px-4 bg-white hover:bg-background transition-colors duration-300"
                    >
                        <i className="fas fa-phone text-primary text-2xl"></i>
                        <span className="text-base font-medium text-primary">Ara</span>
                    </a>

                    <a
                        href={`https://wa.me/${contactInfo.whatsapp.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-4 px-4 bg-white hover:bg-background transition-colors duration-300"
                    >
                        <i className="fab fa-whatsapp text-primary text-2xl"></i>
                        <span className="text-base font-medium text-primary">WhatsApp</span>
                    </a>

                    <a
                        href="https://www.google.com/maps?q=36.88754,34.78861"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 py-4 px-4 bg-white hover:bg-background transition-colors duration-300"
                    >
                        <i className="fas fa-map-marker-alt text-primary text-2xl"></i>
                        <span className="text-base font-medium text-primary">Konum</span>
                    </a>
                </div>
            </div>
        </div>
    );
}; 