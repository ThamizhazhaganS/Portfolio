import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-16 text-center text-clean-muted dark:text-neon-muted text-sm border-t border-gray-200 dark:border-neon-cyan/20">
            <div className="container mx-auto px-8">
                <p></p>
            </div>
        </footer>
    )
}
export default Footer;
