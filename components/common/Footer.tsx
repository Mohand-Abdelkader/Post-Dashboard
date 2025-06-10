import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-0">
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-sm text-gray-600">
              © {new Date().getFullYear()} Post Dashboard. All rights reserved.
            </div>
            <div className="text-xs text-gray-500">
              Built with Next.js & shadcn/ui
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link 
              href="https://jsonplaceholder.typicode.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              API Docs
            </Link>
            <Link 
              href="/" 
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              href="/admin" 
              className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;