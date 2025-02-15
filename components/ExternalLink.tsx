import QRCode from './QRCode';

interface ExternalLinkCardProps {
  /**
   * The URL to encode in the QR code
   */
  url: string;
  /**
   * The title of the external resource
   */
  title: string;
  /**
   * A brief description of the external resource
   */
  description: string;
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
   * @default 200
   */
  qrSize?: number;
}

export function ExternalLinkCard({
  url,
  title,
  description,
  imageUrl,
  qrPosition = 'right',
  qrSize = 200
}: ExternalLinkProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ width: '800px', height: '400px' }}>
      <div className={`flex ${qrPosition === 'right' ? 'flex-row' : 'flex-row-reverse'} h-full`}>
        <div className="flex-1 p-8 flex flex-col justify-between" 
             style={{ 
               backgroundImage: `url(${imageUrl})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center'
             }}>
          <div className="bg-black bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-4xl font-bold text-white mb-4">{title}</h3>
            <p className="text-2xl text-white">{description}</p>
          </div>
        </div>
        
        <div className="w-1/3 flex items-center justify-center p-8" style={{ backgroundColor: '#052957' }}>
          <div className="text-center">
            <QRCode 
              value={url}
              size={qrSize}
              className="mb-4"
            />
            <p className="text-xl text-white">Scan to view on your device</p>
          </div>
        </div>
      </div>
    </div>
  );
}
