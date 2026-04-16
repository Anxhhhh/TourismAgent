export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#050b10] border-t border-[#1a242d]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <div className="text-slate-200 font-bold text-lg mb-2">Celestial Voyager</div>
          <p className="font-['Inter'] text-xs uppercase tracking-widest text-slate-400">
            © 2024 Celestial Voyager. Part of the Digital Concierge Network.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 font-['Inter'] text-xs uppercase tracking-widest">
          {['Privacy Policy', 'Terms of Service', 'API Access', 'Sustainability'].map((label) => (
            <a
              key={label}
              href="#"
              className="text-slate-500 hover:text-[#a6ccdd] transition-opacity opacity-80 hover:opacity-100"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
