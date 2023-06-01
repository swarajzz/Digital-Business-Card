export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer__social-links">
        <li>
          <a
            href="https://www.instagram.com/mister_sudo007/"
            target="_blank"
            className="footer__social-link"
          >
            <ion-icon
              class="footer__social-logo"
              name="logo-instagram"
            ></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/swaraj-sharma-b4a8511b8/"
            target="_blank"
            className="footer__social-link"
          >
            <ion-icon
              class="footer__social-logo"
              name="logo-linkedin"
            ></ion-icon>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/Swarajzzz"
            target="_blank"
            className="footer__social-link"
          >
            <ion-icon
              class="footer__social-logo"
              name="logo-twitter"
            ></ion-icon>
          </a>
        </li>
      </ul>
    </footer>
  );
}
