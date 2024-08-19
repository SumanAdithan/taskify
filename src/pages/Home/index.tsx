import { FC } from 'react';
import MovingBorder from '@/ui/MovingBorder';
import Prompt from '@/components/Prompt';

const Home: FC = () => {
    return (
        <div className=' flex flex-col items-center xl:flex-row gap-6 xl:h-[750px] '>
            <MovingBorder
                className='w-full p-1 shadow-xl bg-background xl:w-1/2'
                color='bg-conic-gradient-primary'
                initialRotation={45}
            >
                <div className='relative bg-inherit h-full p-4 w-full'>
                    <div className='p-4 bg-primary text-white text-center rounded-md '>
                        Pending Task
                    </div>
                    <div className=' mt-4 p-4  '>
                        <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border '>
                            <li className='p-2 bg-primary text-white'>hello</li>
                            --{' '}
                        </ul>
                    </div>
                </div>
            </MovingBorder>
            <Prompt />
            <MovingBorder
                className='w-full p-1 shadow-xl bg-background xl:w-1/2'
                color='bg-conic-gradient-secondary'
                initialRotation={115}
            >
                <div className='relative bg-inherit h-full p-4'>
                    <div className='p-4 bg-secondary text-white text-center rounded-md '>
                        Pending Task
                    </div>
                    <div className=' mt-4 p-4  '>
                        <ul className='bg-inherit p-4 h-[600px] border-x-2 border-x-border '>
                            <li className='p-2 bg-secondary text-white'>
                                hello
                            </li>
                        </ul>
                    </div>
                </div>
            </MovingBorder>
        </div>
    );
};

export default Home;
