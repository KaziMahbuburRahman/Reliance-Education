import React, { useEffect, useState } from 'react';

// react icons
import { IoChevronDown } from 'react-icons/io5';

const FlagSelector = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState('Bangladesh'); // Default to Bangladesh

    const items = [
        { image: "/flag/1.jpg", name: "Bangladesh" },
        { image: "/flag/2.webp", name: "Nigeria" },
        { image: "/flag/3.webp", name: "India" },
        { image: "/flag/4.png", name: "Pakistan" },
        { image: "/flag/5.png", name: "Sri Lanka" },
        { image: "/flag/6.jpeg", name: "Nepal" },
        { image: "/flag/7.png", name: "Morocco" },
        { image: "/flag/8.png", name: "UAE" },
        { image: "/flag/9.webp", name: "Malaysia" },
        { image: "/flag/10.png", name: "Ghana" },
        { image: "/flag/11.png", name: "Indonesia" },
        { image: "/flag/12.png", name: "Saudi Arabia" },
        { image: "/flag/13.png", name: "South Africa" },
        { image: "/flag/14.jpg", name: "South Korea" },
        { image: "/flag/15.webp", name: "Philippines" },
        { image: "/flag/16.webp", name: "USA" },
        { image: "/flag/17.webp", name: "Turkey" },
        { image: "/flag/18.webp", name: "Afghanistan" },
    ];

    // Find the flag image for the selected item
    const selectedFlag = items.find(item => item.name === selectedItem)?.image;

    // outside click to off the dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            let target = event.target;

            if (!target.closest('.dropdown')) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="mb-4 flex items-center flex-col gap-5 justify-center">
            <button
                className="bg-[#fff] border border-[#d1d1d1] rounded-md w-[80%] justify-between px-3 py-2 flex items-center gap-8 relative cursor-pointer dropdown"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ whiteSpace: 'nowrap' }} // Prevent text wrapping
            >
                <img
                    src={selectedFlag} // Display the selected flag
                    alt={selectedItem}
                    className="w-6 h-6 object-cover rounded-full"
                />
                {selectedItem}
                <IoChevronDown
                    className={`${
                        isDropdownOpen ? 'rotate-[180deg]' : 'rotate-0'
                    } transition-all duration-300 text-[1.2rem]`}
                />
                <div
                    className={`${
                        isDropdownOpen
                            ? 'z-[1] opacity-100 scale-[1]'
                            : 'z-[-1] opacity-0 scale-[0.8]'
                    } w-full absolute top-12 left-0 right-0 z-40 bg-[#fff] rounded-xl flex flex-col overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{
                        boxShadow: '0 15px 60px -15px rgba(0, 0, 0, 0.3)',
                    }}
                >
                    {items?.map((item, index) => (
                        <p
                            className="py-2 px-4 hover:bg-[#ececec] transition-all duration-200 flex items-center gap-2"
                            key={index}
                            onClick={() => setSelectedItem(item.name)}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-6 h-6 object-cover rounded-full"
                            />
                            {item.name}
                        </p>
                    ))}
                </div>
            </button>
        </div>
    );
};

export default FlagSelector;
