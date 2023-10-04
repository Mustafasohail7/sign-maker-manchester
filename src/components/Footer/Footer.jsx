//stylesheet
import "../../styles/Footer.css";
import FooterItem from "./FooterItem";

const Footer = () => {

  const footerItems = [
    {id: 1, item: "About"},
    {id: 2, item: "Contact"},
    {id: 3, item: "Terms of Use"},
    {id: 4, item: "Privacy Policy"},
    {id: 5, item: "Careers"},
    {id: 6, item: "Advertise"},
    {id: 7, item: "Blog"},
    {id: 8, item: "Help"},
    {id: 9, item: "Status"},
    {id: 10, item: "Account"},
    {id: 11, item: "888 456 764"},
    {id: 12, item: "johndoe@email.com"}
  ]

  return (
    <footer className="footer-container">
      <h1 className="footer-logo">Logo</h1>
      <div className="footer-columns">
        <ul className="footer-flex">
          {footerItems.map((item) => (
            <FooterItem key={item.id} name={item.item} />
          ))}
        </ul>
      </div>
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
