import type React from 'react';

type LocationProps = {
  title: string;
  address: string;
  phone: string;
  email: string;
};

const LocationCard: React.FC<LocationProps> = ({ title, address, phone, email }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="aspect-video mb-4 bg-gray-200 rounded-lg overflow-hidden">
        {/* This would be a Google Map in the real implementation */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600">Map</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shreehari-blue mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-sm text-gray-700">{address}</p>
        </div>

        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shreehari-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <p className="text-sm text-gray-700">{phone}</p>
        </div>

        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shreehari-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <p className="text-sm text-gray-700">{email}</p>
        </div>
      </div>
    </div>
  );
};

const OfficeLocations = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Canada Office */}
        <div className="mb-16">
          <div className="bg-shreehari-lavender rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-shreehari-blue mb-4">Canada Office</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                  {/* This would be a Google Map in the real implementation */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-600">Map</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shreehari-blue mt-1 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-700">123 Pioneer Drive, Kitchener, ON N2P 2A3</p>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shreehari-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-700">+1 226 985 8998</p>
                </div>

                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-shreehari-blue mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-700">canada@shreehari.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* India Offices */}
        <div>
          <h2 className="text-2xl font-bold text-center text-shreehari-blue mb-8">India Offices</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LocationCard
              title="Ahmedabad"
              address="A 403, Shivalik Yash, Opp. Shastrinagar BRTS Bus Stand, 132' Ring Road, Naranpura, Ahmedabad 380013, Gujarat"
              phone="+91 95740 08581 | 079 2744 4444 | 079 2741 4445"
              email="info@shreehari.in"
            />

            <LocationCard
              title="Kalol"
              address="209, 2nd Floor Magnet Square, New Hirani Ahmedabad Highway, Kalol, Gujarat"
              phone="+91 99090 09581 | +91 99090 00421"
              email="kalol@shreehari.in"
            />

            <LocationCard
              title="Mehsana"
              address="415, Town Plaza, Nr. Bijapur Arcade, Shobhasan Circle Road, Near ONGC, Mehsana 384002, Gujarat"
              phone="+91 95120 00989 | +91 95120 00990"
              email="mehsana@shreehari.in"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficeLocations;
