export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300 ">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-white">E-KagajPatra</h3>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            नेपालको डिजिटल सरकारी कागजात व्यवस्थापन प्रणाली। सुरक्षित, छिटो, र
            प्रयोगमैत्री सेवा अनुभव।
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact Info</h4>
          <p className="mt-3 text-sm text-slate-400">Bhairahawa, Nepal</p>
          <p className="mt-2 text-sm text-slate-400">support@ekagajpatra.com</p>
          <p className="mt-2 text-sm text-slate-400">+977-9800000000</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © 2026 E-KagajPatra. All rights reserved.
      </div>
    </footer>
  );
}
