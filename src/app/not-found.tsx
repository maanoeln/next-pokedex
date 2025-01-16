import Image from 'next/image';
import snorlax from '@/assets/pngegg.png';

function NotFound() {
  return (
    <div className='h-full flex justify-center items-center flex-col gap-4 w-[70%] mx-auto py-4'>
      <h2 className='text-secondary-light text-2xl'>404 | PAGE NOT FOUND</h2>
      <Image src={snorlax} alt={'Page not found'} width={792} height={612} />
    </div>
  );
}

export default NotFound;
