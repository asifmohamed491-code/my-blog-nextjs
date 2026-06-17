import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="mt-auto !rounded-none !border-0 !bg-transparent !shadow-none !p-0">
      <div className="w-full bg-slate-900 text-slate-300 py-10">
        <div className="container mx-auto px-4">
          <div className="w-full sm:flex sm:items-center sm:justify-between mb-6">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
              <h1 className="text-xl font-bold tracking-tight text-white">AmBlog</h1>
            </div>

            <FooterLinkGroup className="flex gap-6">
              <FooterLink href="#" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
                About
              </FooterLink>
              <FooterLink href="#" className="text-slate-300 hover:text-indigo-400 transition-colors duration-200">
                Contact
              </FooterLink>
            </FooterLinkGroup>
          </div>

          <FooterDivider className="border-slate-700" />

          <FooterCopyright
            className="mt-6 text-slate-400 [&_a]:text-indigo-400 [&_a]:hover:text-indigo-300 [&_a]:transition-colors"
            href="#"
            by="AmTech™"
            year={2026}
          />
        </div>
      </div>
    </Footer>
  );
}