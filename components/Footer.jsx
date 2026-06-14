
import { Footer, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";

export default function FooterComponent() {
  return (
    <Footer container className="mt-auto">
      <div className="w-full text-center bg-black text-white py-5">
        <div className="w-full sm:flex sm:items-center sm:justify-between mb-4">
          <h1 className="text-2xl ml-3">AmBlog</h1>

          <FooterLinkGroup className="flex gap-2 mr-2">
            <FooterLink href="#" className="hover:text-gray-400">About</FooterLink>
            <FooterLink href="#" className="hover:text-gray-400">Contact</FooterLink>
          </FooterLinkGroup>
        </div>

        <FooterDivider />

        <FooterCopyright
          className="mt-4"
          href="#"
          by="AmTech™"
          year={2026}
        />
      </div>
    </Footer>
  );
}
