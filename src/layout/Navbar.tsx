import { FC, useEffect, useRef, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Input, Listbox, ListboxOption } from '@headlessui/react';
import { useSidebarContext } from '@hooks'; // Custom hook for sidebar state
import { useTaskContext } from '@hooks'; // Custom hook for task state

interface Task {
    id: string;
    name: string;
}

const Navbar: FC = () => {
    // Access the function to toggle the sidebar from SidebarContext
    const { toggleSidebar } = useSidebarContext();
    // Access tasks from TaskContext
    const { tasks } = useTaskContext().state;

    // State for managing search input and filtered tasks
    const [search, setSearch] = useState<string>('');
    const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);
    const [isListboxOpen, setIsListboxOpen] = useState(false); // State for controlling Listbox visibility

    // Ref for the Listbox element to detect clicks outside
    const listboxRef = useRef<HTMLUListElement>(null);

    // Handle changes in the search input
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearch(query);
        if (query === '') {
            setFilteredTasks([]);
        } else {
            setFilteredTasks(
                tasks.filter((task: Task) => task.name.toLowerCase().includes(query.toLowerCase()))
            );
        }
        setIsListboxOpen(true);
    };

    // Handle focus on the search input to show the Listbox
    const handleFocus = () => {
        setIsListboxOpen(true);
    };

    // Effect to handle clicks outside the Listbox to close it
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (listboxRef.current && !listboxRef.current.contains(event.target as Node)) {
                setIsListboxOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className='bg-background p-6 text-white shadow-md flex justify-between items-center border-b-2 border-b-border'>
            {/* Navbar header with toggle sidebar button and title */}
            <div className='flex justify-center items-center gap-2'>
                <div className='bg-primary p-1 rounded'>
                    <RxHamburgerMenu
                        className='text-3xl text-white'
                        onClick={() => {
                            toggleSidebar();
                        }}
                    />
                </div>
                <div className='text-2xl'>Task</div>
            </div>
            {/* Search input and Listbox for task search */}
            <div className='flex justify-center items-center gap-4 mr-4'>
                <div className='relative'>
                    <Input
                        name='full_name'
                        value={search}
                        onChange={handleSearchChange}
                        type='text'
                        placeholder='search a task'
                        className='p-2 focus:border-primary text-border border-2 outline-none rounded'
                        onClick={handleFocus}
                    />
                    {isListboxOpen && (
                        <Listbox
                            ref={listboxRef}
                            as='ul'
                            className='absolute top-full left-0 w-full mt-1 text-border bg-white border border-gray-300 rounded shadow-lg'
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
            </div>
        </nav>
    );
};

export default Navbar;
