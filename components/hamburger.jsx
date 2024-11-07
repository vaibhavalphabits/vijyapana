import React, { useState, useRef, useEffect } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai'; // Importing the close icon
import Link from 'next/link';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  // Close the sidebar when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        closeSidebar();
      }
    };

    // Attach event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Handle expanding and collapsing of sub-items
  const toggleExpand = (item) => {
    setExpanded(expanded === item ? null : item);
  };

  return (
    <div className="flex">
      {/* Hamburger Icon or Close Icon */}
      <div className="md:hidden">
        {isOpen ? (
          <AiOutlineClose className="cursor-pointer w-6 h-6" onClick={toggleSidebar} />
        ) : (
          <RxHamburgerMenu className="cursor-pointer w-6 h-6" onClick={toggleSidebar} />
        )}
      </div>

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 w-64 h-[100vh] z-50 bg-white shadow-md transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <ul className="flex flex-col p-4 space-y-2">
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
            <Link href="/">Home</Link>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('collections')}>
            Collections
          </li>
          {expanded === 'collections' && (
            <ul className="flex flex-col pl-4 space-y-2">
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('productShoot')}>
                Product Shoot
              </li>
              {expanded === 'productShoot' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('audioBook')}>
                Audio Book
              </li>
              {expanded === 'audioBook' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('webDevelopment')}>
                Web Development
              </li>
              {expanded === 'webDevelopment' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('appDevelopment')}>
                App Development
              </li>
              {expanded === 'appDevelopment' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('socialMediaCreatives')}>
                Social Media Creatives
              </li>
              {expanded === 'socialMediaCreatives' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('corporateGifts')}>
                Corporate Gifts
              </li>
              {expanded === 'corporateGifts' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
              <li className="py-1 hover:bg-gray-200 cursor-pointer" onClick={() => toggleExpand('printMedia')}>
                Print Media
              </li>
              {expanded === 'printMedia' && (
                <ul className="flex flex-col pl-4 space-y-1">
                  <li>Lorem item 1</li>
                  <li>Lorem item 2</li>
                  <li>Lorem item 3</li>
                  <li>Lorem item 4</li>
                </ul>
              )}
            </ul>
          )}
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
            <Link href={"/about"}>About</Link>
          </li>
          <li className="py-2 hover:bg-gray-200 cursor-pointer" onClick={() => closeSidebar()}>
            <Link href={"/career"}>Career</Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed inset-0 h-[100vh] bg-black opacity-50 z-[20]"
          onClick={closeSidebar} // Close sidebar on overlay click
        />
      )}
    </div>
  );
}

export default Sidebar;
