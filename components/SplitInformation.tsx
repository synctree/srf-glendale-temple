import { ReactNode } from 'react';
import QRCode from './QRCode';

interface SplitInformationProps {
  /**
   * Background color for the content side
   */
  backgroundColor: string;
  /**
   * URL of the image to display
   */
  imageUrl: string;
  /**
   * Whether to show the image on the left (true) or right (false)
   * @default false
   */
  imageOnLeft?: boolean;
  /**
   * Optional href for making the image side clickable
   */
  href?: string;
  /**
   * Optional call to action text for QR code
   * @default "Scan to learn more"
   */
  qrCallToAction?: string;
  /**
   * Content to display on the non-image side
   */
  children: ReactNode;
}

const isExternalUrl = (url: string) => {
  return /^https?:\/\//.test(url);
};

export function SplitInformation({
  backgroundColor,
  imageUrl,
  imageOnLeft = false,
  href,
  qrCallToAction = "Scan to learn more",
  children
}: SplitInformationProps) {
  const contentOrder = imageOnLeft ? 'order-2' : 'order-1';
  const imageOrder = imageOnLeft ? 'order-1' : 'order-2';

  return (
    <div className="w-full h-full flex">
      <div 
        className={`w-1/2 ${contentOrder}`}
        style={{ backgroundColor }}
      >
        <div className="h-full p-16 flex items-center">
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
      
      <div 
        className={`w-1/2 ${imageOrder} relative`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {href && isExternalUrl(href) && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <QRCode 
              value={href}
              size={400}
              className="mb-8"
            />
            <p className="text-white text-3xl font-semibold">{qrCallToAction}</p>
          </div>
        )}
      </div>
    </div>
  );
}
