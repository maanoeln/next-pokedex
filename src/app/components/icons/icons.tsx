import icons from '@/assets/icons';
import { SVGProps } from 'react';

interface IIcons
  extends Pick<
    SVGProps<SVGElement>,
    'strokeLinecap' | 'strokeLinejoin' | 'strokeWidth' | 'fill' | 'stroke'
  > {
  name: string;
  className?: string;
  viewbox?: string;
  width?: string;
  height?: string;
}

function Icons({
  name,
  className,
  viewbox,
  width,
  height,
  fill,
  stroke,
  strokeWidth,
  ...props
}: IIcons) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox={viewbox || '0 0 16 16'}
      width={width || '24px'}
      height={height || '24px'}
      className={className}
      fill={fill}
      strokeWidth={strokeWidth}
      stroke={stroke}
    >
      <path d={icons[name]} {...props} />
    </svg>
  );
}

export default Icons;
