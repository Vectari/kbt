import React from "react";
import "./StaticPage.css";

function Contact() {
  return (
    <main className="static-page">
      {" "}
      <div className="static-page-inner">
        {" "}
        <span className="static-eyebrow">CONTACT</span>
        <h1>Contact KBoardTester</h1>
        <p className="static-lead">
          Have you found a problem with the keyboard tester or have a suggestion
          for improving the site?
        </p>
        <section>
          <h2>Get in touch</h2>

          <p>
            For questions, bug reports, feedback or suggestions, send us an
            email at:
          </p>

          <p>
            <a href="mailto:EMAIL@email.com">EMAIL@email.com</a>
          </p>

          <p>
            When reporting a problem with the tester, it is helpful to include
            your operating system, browser, keyboard type and a short
            description of the problem.
          </p>
        </section>
        <section>
          <h2>Bug reports</h2>

          <p>
            If a particular key is not detected, please mention which physical
            key you tested and whether other keys are working normally. This
            information can make browser and keyboard compatibility problems
            easier to reproduce.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Contact;
