import { ReactNode } from 'react';

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
   * Content to display on the non-image side
   */
  children: ReactNode;
}

export function SplitInformation({
  backgroundColor,
  imageUrl,
  imageOnLeft = false,
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
        className={`w-1/2 ${imageOrder}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
}
