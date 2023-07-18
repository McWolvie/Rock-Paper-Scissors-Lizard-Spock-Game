import "./Footer.css";

const template = () => {
  return `
  <p>Fundación Once - 2023<span> Macwolvie</span></p>
  `;
};

const Footer = () => {
  document.querySelector("footer").innerHTML = template();
};

export default Footer;
