import { FC } from 'react';
import MovingBorder from '@/ui/MovingBorder';

const Home: FC = () => {
    return (
        <div className=' flex gap-6 h-[750px]'>
            <MovingBorder
                className='w-1/2 p-1 shadow-xl bg-background '
                color='bg-conic-gradient-primary'
                initialRotation={45}
            >
                <div className='relative bg-inherit h-full p-4'>
                    <div className='p-4 bg-primary text-white text-center rounded-md '>
                        Pending Task
                    </div>
                    <div className=' mt-4 p-4  '>
                        <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border '>
                            <li className='p-2 bg-primary'>hello</li>
                        </ul>
                    </div>
                </div>
            </MovingBorder>
            <MovingBorder
                className='w-1/2 p-1 shadow-xl bg-background '
                color='bg-conic-gradient-secondary'
                initialRotation={115}
            >
                <div className='relative bg-inherit h-full p-4'>
                    <div className='p-4 bg-secondary text-white text-center rounded-md '>
                        Pending Task
                    </div>
                    <div className=' mt-4 p-4  '>
                        <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border '>
                            <li className='p-2 bg-primary'>hello</li>
                        </ul>
                    </div>
                </div>
            </MovingBorder>
        </div>
    );
};

export default Home;
