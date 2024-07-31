import { FC, useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdDarkMode } from 'react-icons/md';
import { Input, Listbox, ListboxOption } from '@headlessui/react';

interface Task {
    id: string;
    name: string;
}

const Navbar: FC = () => {
    const tasks: Task[] = [
        { id: '1', name: 'Task 1' },
        { id: '2', name: 'Task 2' },
        { id: '3', name: 'Task 3' },
    ];

    const [search, setSearch] = useState<string>('');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [isListboxOpen, setIsListboxOpen] = useState(false);

    const listboxRef = useRef<HTMLUListElement>(null);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearch(query);
        if (query === '') {
            setFilteredTasks([]);
        } else {
            setFilteredTasks(
                tasks.filter(task =>
                    task.name.toLowerCase().includes(query.toLowerCase())
                )
            );
        }
        console.log(filteredTasks);
        setIsListboxOpen(true);
    };

    const handleFocus = () => {
        setIsListboxOpen(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                listboxRef.current &&
                !listboxRef.current.contains(event.target as Node)
            ) {
                setIsListboxOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className='bg-background p-6 text-black shadow-md flex justify-between items-center'>
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-primary p-1 rounded'>
                    <RxHamburgerMenu className='text-3xl text-white' />
                </div>
                <div className='text-2xl'>Task</div>
            </div>
            <div className='flex justify-center items-center gap-4 mr-4 '>
                <div className='relative'>
                    <Input
                        name='full_name'
                        value={search}
                        onChange={handleSearchChange}
                        type='text'
                        placeholder='search a task'
                        className='p-2 focus:border-primary border-2 outline-none rounded'
                        onClick={handleFocus}
                    />
                    {isListboxOpen && (
                        <Listbox
                            ref={listboxRef}
                            as='ul'
                            className='absolute top-full left-0 w-full mt-1 bg-white border border-gray-300  rounded shadow-lg'
                        >
                            {filteredTasks.length > 0 ? (
                                filteredTasks.map(task => (
                                    <ListboxOption
                                        key={task.id}
                                        value={task}
                                        as='li'
                                        className='p-2 hover:bg-gray-100 cursor-pointer'
                                    >
                                        {task.name}
                                    </ListboxOption>
                                ))
                            ) : (
                                <li className='p-2'>No result found</li>
                            )}
                        </Listbox>
                    )}
                </div>

                <button>
                    <MdDarkMode className='text-2xl' />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
