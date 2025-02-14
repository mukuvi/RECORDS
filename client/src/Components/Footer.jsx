export default function Footer() {
  return (
    <>
      <div className="footer-section">
        <ul className="socils">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Whatsapp</li>
          <li>Linkedin</li>
          <li>Gmail</li>
        </ul>
        <h3>
          Copyright &copy; {new Date().getFullYear()} JTthree Globally - All
          rights reserved
        </h3>
        <div className="footer-more">
          <ul>
            <li>About Us</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}
