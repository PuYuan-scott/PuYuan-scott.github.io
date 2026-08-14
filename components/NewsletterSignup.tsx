const BREVO_FORM_URL =
  "https://afb7ac5d.sibforms.com/v2/serve/MUIFAAY4bMWPl6seI7x5TTdR4wrIXkvhLRydyEA3BXbQVtDQ0h6i6qfzHei8SmCEXZFnSNvss9Ng2b_pOQcwTlAl3eWwvO52gF-YRrE9fF_mXOwF_0Shl4bfav2Z0aT6DDZym31SlUKcnaVnF8MdG77GWy15KpyIOhqXHgYlZvehYLl3kDfG6twiSYoMCaUYoQLAqWQ-Zk2Ms8dxHQ==";

export default function NewsletterSignup() {
  return (
    <section
      className="newsletter-signup"
      aria-label="Subscribe to Scott Yuan Research updates"
    >
      <div className="page-shell newsletter-signup-inner">
        <div className="newsletter-signup-frame-shell">
          <iframe
            className="newsletter-signup-frame"
            src={BREVO_FORM_URL}
            title="Subscribe to Scott Yuan Research updates"
            width="540"
            height="620"
            frameBorder="0"
            scrolling="no"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
