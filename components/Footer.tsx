import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} AlexDev. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;