import { ReactNode } from 'react';
import QRCode from './QRCode';
import Link from 'next/link';

type ContentVariant = 'card' | 'reference';

interface ContentReferenceCardProps {
  /**
   * The variant of the content display
   * 'card' - Compact card layout (800x400)
   * 'reference' - Larger reference layout (1200x600)
   */
  variant: ContentVariant;
  /**
   * The URL for the external content (will show QR code)
   */
  externalHref?: string;
  /**
   * The URL for internal navigation (makes card clickable)
   */
  internalHref?: string;
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
   * @default based on variant (200 for card, 300 for reference)
   */
  qrSize?: number;
  /**
   * Child components to render in the content area (only used in reference variant)
   */
  children?: ReactNode;
}

export function ContentReferenceCard({
  variant,
  externalHref,
  internalHref,
  title,
  description,
  imageUrl,
  qrPosition = 'right',
  qrSize,
  children
}: ContentReferenceCardProps) {
  const isReference = variant === 'reference';
  const defaultQrSize = isReference ? 300 : 200;
  const containerWidth = isReference ? '1200px' : '800px';
  const containerHeight = isReference ? '600px' : '400px';
  const contentPadding = isReference ? 'p-12' : 'p-8';
  const titleSize = isReference ? 'text-5xl' : 'text-4xl';
  const descriptionSize = isReference ? 'text-3xl' : 'text-2xl';
  const qrTextSize = isReference ? 'text-2xl' : 'text-xl';
  const qrContainerPadding = isReference ? 'p-12' : 'p-8';
  const contentGap = isReference ? 'mb-6' : 'mb-4';

  const ContentDisplay = () => (
    <div className={`flex ${externalHref ? (qrPosition === 'right' ? 'flex-row' : 'flex-row-reverse') : ''} h-full`}>
      <div 
        className={`${externalHref ? 'flex-1' : 'w-full'} h-full`}
        style={{ 
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className={`h-full ${contentPadding} flex flex-col justify-between`}>
          <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h3 className={`${titleSize} font-bold text-white ${contentGap}`}>{title}</h3>
          <p className={`${descriptionSize} text-white ${children ? contentGap : ''}`}>{description}</p>
          {children}
          </div>
        </div>
      </div>
      
      {externalHref && (
        <div className="w-1/3 flex items-center justify-center" style={{ backgroundColor: '#052957' }}>
          <div className={`text-center ${qrContainerPadding}`}>
            <QRCode 
              value={externalHref}
              size={qrSize || defaultQrSize}
              className={contentGap}
            />
            <p className={`${qrTextSize} text-white`}>Scan to view on your device</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div 
      className="bg-white rounded-xl shadow-lg overflow-hidden"
      style={{ width: containerWidth, height: containerHeight }}
    >
      <div className={internalHref ? 'cursor-pointer' : ''}>
        {internalHref ? (
          <Link href={internalHref} className="block">
            <ContentDisplay />
          </Link>
        ) : (
          <ContentDisplay />
        )}
      </div>
    </div>
  );
}
