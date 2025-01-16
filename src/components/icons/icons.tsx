import icons from '@/assets/icons';
import { SVGProps } from 'react';

interface IIcons
  extends Pick<
    SVGProps<SVGElement>,
    | 'strokeLinecap'
    | 'strokeLinejoin'
    | 'strokeWidth'
    | 'fill'
    | 'stroke'
    | 'fillRule'
  > {
  name: string;
  className?: string;
  viewBox?: string;
  width?: string;
  height?: string;
  onClick?(): void;
}

function Icons({
  name,
  className = '',
  viewBox = '0 0 16 16',
  width = '24px',
  height = '24px',
  fill = 'currentColor',
  stroke,
  strokeWidth,
  onClick,
  ...props
}: IIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewBox}
      width={width}
      height={height}
      className={className}
      fill={fill}
      strokeWidth={strokeWidth}
      stroke={stroke}
      onClick={onClick}
    >
      <path d={icons[name] || ''} {...props} />
    </svg>
  );
}

export default Icons;
