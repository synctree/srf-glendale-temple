import { ReactNode } from 'react';
import QRCode from './QRCode';

interface ExternalReferenceProps {
  /**
   * The URL to encode in the QR code
   */
  url: string;
  /**
   * Optional title of the external resource
   */
  title?: string;
  /**
   * Optional description of the external resource
   */
  description?: string;
  /**
   * URL of the background/preview image
   */
  imageUrl: string;
  /**
   * Position of the QR code
   * @default 'right'
   */
  qrPosition?: 'left' | 'right';
  /**
   * Size of the QR code in pixels
   * @default 300
   */
  qrSize?: number;
  /**
   * Child components to render in the content area
   */
  children?: ReactNode;
}

export function ExternalReference({
  url,
  title,
  description,
  imageUrl,
  qrPosition = 'right',
  qrSize = 300,
  children
}: ExternalReferenceProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ width: '1200px', height: '600px' }}>
      <div className={`flex ${qrPosition === 'right' ? 'flex-row' : 'flex-row-reverse'} h-full`}>
        <div className="flex-1 p-12 flex flex-col justify-between" 
             style={{ 
               backgroundImage: `url(${imageUrl})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
            {title && <h3 className="text-5xl font-bold text-white mb-6">{title}</h3>}
            {description && <p className="text-3xl text-white mb-6">{description}</p>}
            {children}
          </div>
        </div>
        
        <div className="w-1/3 flex items-center justify-center p-12" style={{ backgroundColor: '#052957' }}>
          <div className="text-center">
            <QRCode 
              value={url}
              size={qrSize}
              className="mb-6"
            />
            <p className="text-2xl text-white">Scan to view on your device</p>
          </div>
        </div>
      </div>
    </div>
  );
}
