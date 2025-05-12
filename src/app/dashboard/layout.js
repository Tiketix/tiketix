'use client';

import { useState } from 'react';
import { Home, Ticket, Calendar, PlusCircle, Settings, LogOut, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Ticket, label: 'My Tickets', path: '/dashboard/tickets' },
    { icon: Calendar, label: 'My Events', path: '/dashboard/my-events' },
    { icon: PlusCircle, label: 'Create Event', path: '/dashboard/create-event' },
    { icon: Settings, label: 'Account Settings', path: '/dashboard/settings' },
  ];

  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-gray-50">
          {/* Mobile menu button */}
          <button
            className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Sidebar */}
          <div className={`
            fixed lg:static inset-y-0 left-0 z-40 w-64 transform 
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 transition-transform duration-300 ease-in-out
            bg-white shadow-lg
          `}>
            <div className="flex flex-col h-full">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800">EventHub</h2>
              </div>

              <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`
                        flex items-center px-4 py-3 text-gray-700 rounded-lg
                        hover:bg-gray-100 transition-colors duration-200
                        ${pathname === item.path ? 'bg-blue-50 text-blue-600' : ''}
                      `}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="p-4 border-t">
                <button className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 w-full">
                  <LogOut className="w-5 h-5 mr-3" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
            <div className="p-8">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}