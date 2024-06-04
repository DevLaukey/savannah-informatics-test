import { LogoIcon } from "./Icons";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container flex pb-14 text-center items-center justify-evenly">
        <div className="col-span-full xl:col-span-2">
          <a
            rel="noreferrer noopener"
            href="/"
            className="font-bold text-xl flex"
          >
            <LogoIcon />
            ShadcnUI/React
          </a>
        </div>
        <h3>
          &copy; {new Date().getFullYear()} Made in Love by
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/DevLaukey"
            className="text-primary ml-2 underline transition-all border-primary hover:border-b-2"
          >
            Victor Mwaura
          </a>
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
