function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Fareed. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm">
          Built by{" "}
          <a
            href="https://www.afrodemoz.com"
            target="_blank"
            rel="noreferrer"
            className="text-green-500 hover:text-green-400 transition-colors duration-200">
            Afrodemoz Tech
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
