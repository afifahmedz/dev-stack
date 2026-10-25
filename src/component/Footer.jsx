import LogoImg from "../assets/logo-text.png"
export default function Footer() {
  return (
  

    
<footer className="bg-base-100 text-base-content border-t border-base-200">
  <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-8">

    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

      
      <aside className="space-y-4 lg:col-span-2">
        <div>
          <img src={LogoImg} alt="Dev Stack" />
        </div>

        <p className="text-sm opacity-70 max-w-md">
          Curated tools, technologies, and resources for developers
          building modern software.
        </p>

        <div className="flex gap-4 text-sm font-medium">
          <p className="cursor-pointer hover:text-primary transition-colors">GitHub</p>
          <p className="cursor-pointer hover:text-primary transition-colors">Twitter</p>
          <p className="cursor-pointer hover:text-primary transition-colors">LinkedIn</p>
        </div>
      </aside>

     
      <nav className="flex flex-col items-start gap-3">
        <h6 className="footer-title">Product</h6>
        <ul className="space-y-2 text-sm opacity-70">
          <li className="cursor-pointer hover:text-primary">Home</li>
          <li className="cursor-pointer hover:text-primary">Technologies</li>
          <li className="cursor-pointer hover:text-primary">Projects</li>
        </ul>
      </nav>

   
      <nav className="flex flex-col items-start gap-3">
        <h6 className="footer-title">Company</h6>
        <ul className="space-y-2 text-sm opacity-70">
          <li className="cursor-pointer hover:text-primary">About</li>
          <li className="cursor-pointer hover:text-primary">Contact</li>
          <li className="cursor-pointer hover:text-primary">Careers</li>
        </ul>
      </nav>

   
      <nav className="flex flex-col items-start gap-3">
        <h6 className="footer-title">Legal</h6>
        <ul className="space-y-2 text-sm opacity-70">
          <li className="cursor-pointer hover:text-primary">Privacy Policy</li>
          <li className="cursor-pointer hover:text-primary">Terms of Service</li>
        </ul>
      </nav>

    </div>

    
    <div className="mt-10 pt-8 border-t border-base-200
                    flex flex-col sm:flex-row
                    justify-between items-start sm:items-center
                    gap-4 text-xs opacity-60">

      <p>© 2026 Dev Stack. All rights reserved.</p>

      <div className="flex gap-6">
        <p className="cursor-pointer hover:opacity-100 transition-opacity">
          Privacy
        </p>
        <p className="cursor-pointer hover:opacity-100 transition-opacity">
          Terms
        </p>
      </div>

    </div>
  </div>
</footer>

  );
}