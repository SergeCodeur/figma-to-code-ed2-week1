import logo from "@/assets/images/logo.svg";

type footerLinksProps = {
  label: string;
  href: string;
};

const footerLinks: footerLinksProps[] = [
  {
    label: "Privacy",
    href: "/",
  },
  {
    label: "Terms & Conditions",
    href: "/",
  },
  {
    label: "About Us",
    href: "/",
  },
];

const Footer = () => {
  return (
    <footer className="container space-y-3.5">
      <div>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="flex items-center justify-between w-full py-8 flex-wrap gap-4">
        <h2 className="text-2xl font-semibold max-sm:text-xl">
          Create Explore & Collect Digital NFTs
        </h2>
        <ul className="inline-flex items-center gap-[30px] max-sm:w-full max-sm:justify-center">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <a
                className="text-sm font-medium max-sm:text-xs"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
