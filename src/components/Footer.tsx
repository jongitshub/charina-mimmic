const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-2xl font-bold">Charity</h3>
              <p className="mt-2">Making the world a better place, one donation at a time.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Contact</h3>
              <p>Email: info@charity.org</p>
              <p>Phone: +123 456 789</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Follow Us</h3>
              <p>Facebook | Twitter | Instagram</p>
            </div>
          </div>
          <p className="text-center mt-6">&copy; 2024 Charity. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  