import "./StaticPage.css";

function About() {
  return (
    <main className="static-page">
      {" "}
      <div className="static-page-inner">
        {" "}
        <span className="static-eyebrow">ABOUT KBOARDTESTER</span>
        <h1>About KBoardTester</h1>
        <p className="static-lead">
          KBoardTester is a browser-based tool for checking whether the keys on
          a physical keyboard are being detected correctly by your computer.
        </p>
        <section>
          <h2>Why we built KBoardTester</h2>

          <p>
            A keyboard problem is often difficult to diagnose because the
            physical keyboard does not provide much feedback when a key stops
            working. A visual keyboard tester makes the process easier by
            showing which key events are reaching the browser.
          </p>

          <p>
            KBoardTester was created as a simple diagnostic tool that does not
            require a separate application or installation. The goal is to make
            a basic keyboard check quick enough to use when troubleshooting a
            computer, checking a new keyboard or inspecting a used one.
          </p>
        </section>
        <section>
          <h2>What KBoardTester can do</h2>

          <ul>
            <li>Detect supported keyboard input in the browser.</li>
            <li>Show detected keys on a visual keyboard.</li>
            <li>Track repeated presses during a test.</li>
            <li>Support several common keyboard sizes.</li>
            <li>Show test progress as keys are confirmed.</li>
            <li>
              Work with keyboards connected to supported desktop browsers.
            </li>
          </ul>
        </section>
        <section>
          <h2>What it cannot do</h2>

          <p>
            KBoardTester detects keyboard events available to the browser. It
            cannot inspect the internal electronics of a keyboard, measure
            switch quality or determine the exact physical component responsible
            for a hardware failure.
          </p>

          <p>
            For this reason, a failed key test should be treated as a useful
            diagnostic indication rather than a complete hardware diagnosis.
          </p>
        </section>
        {/* <section>
          <h2>Contact</h2>

          <p>
            If you find a problem with the tester or have a suggestion, you can
            contact us through the contact page.
          </p>
        </section> */}
      </div>
    </main>
  );
}

export default About;
