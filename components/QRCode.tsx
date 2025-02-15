import { QRCodeSVG } from 'qrcode.react';

interface QRCodeProps {
  /**
   * The URL or text to encode in the QR code
   */
  value: string;
  /**
   * The size in pixels of the QR code
   * @default 256
   */
  size?: number;
  /**
   * Optional title for accessibility
   */
  title?: string;
  /**
   * Background color of the QR code
   * @default "#FFFFFF"
   */
  bgColor?: string;
  /**
   * Foreground color of the QR code
   * @default "#000000"
   */
  fgColor?: string;
  /**
   * Error correction level
   * @default "M"
   */
  level?: 'L' | 'M' | 'Q' | 'H';
  /**
   * CSS class name to apply to the SVG
   */
  className?: string;
}

export default function QRCode({
  value,
  size = 256,
  title,
  bgColor = '#FFFFFF',
  fgColor = '#000000',
  level = 'M',
  className,
}: QRCodeProps) {
  return (
    <div className={className}>
      <QRCodeSVG
        value={value}
        size={size}
        title={title}
        bgColor={bgColor}
        fgColor={fgColor}
        level={level}
        includeMargin={true}
      />
    </div>
  );
}
