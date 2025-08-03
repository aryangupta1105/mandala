import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const MandalaHeader = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="flex items-center space-x-2">
                            {/* Mandala logo image */}
                            <div className="w-24 h-24 relative">
                                <img
                                    src="/logo.png"
                                    alt="Mandala Logo"
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                    </div>


                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-lato font-semibold text-sm leading-[100%] tracking-normal">
                        <a href="#" className="text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                            Home
                        </a>
                        <a href="#" className="text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                            About Mandala
                        </a>
                        <a href="#" className="text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                            Is This You?
                        </a>
                        <a href="#" className="text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                            Guidance
                        </a>
                        <a href="#" className="text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                            Articles
                        </a>
                    </nav>


                    {/* Book a Session Button - Desktop */}
                    <div className="hidden md:block">
                        <button className="bg-[#664000] hover:bg-[#4d2f00] cursor-pointer text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
                            Book a Session
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200">
                        <div className="py-4 space-y-4 font-lato font-semibold text-sm leading-[100%] tracking-normal">
                            <a href="#" className="block text-[#80500080] hover:text-[#996000] focus:text-[#996000]  transition-colors">
                                Home
                            </a>
                            <a href="#" className="block text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                                About Mandala
                            </a>
                            <a href="#" className="block text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                                Is This You?
                            </a>
                            <a href="#" className="block text-[#80500080] hover:text-[#996000] focus:text-[#996000] transition-colors">
                                Guidance
                            </a>
                            <a href="#" className="block text-[#80500080] hover:text-[#996000] focus:text-[#996000]  transition-colors">
                                Articles
                            </a>
                            <div className="pt-4">
                                <button className="w-full bg-[#664000] hover:bg-[#4d2f00] cursor-pointer text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                                    Book a Session
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default MandalaHeader;