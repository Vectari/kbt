import React, { useEffect, useRef, useState } from "react";
import "./KeyboardTester.css";

const keyboardRows = [
  [
    { code: "Escape", label: "Esc", className: "esc" },
    { code: "F1", label: "F1", className: "function" },
    { code: "F2", label: "F2", className: "function" },
    { code: "F3", label: "F3", className: "function" },
    { code: "F4", label: "F4", className: "function" },
    { code: "F5", label: "F5", className: "function" },
    { code: "F6", label: "F6", className: "function" },
    { code: "F7", label: "F7", className: "function" },
    { code: "F8", label: "F8", className: "function" },
    { code: "F9", label: "F9", className: "function" },
    { code: "F10", label: "F10", className: "function" },
    { code: "F11", label: "F11", className: "function" },
    { code: "F12", label: "F12", className: "function" },
    { code: "PrintScreen", label: "PrtSc", className: "utility" },
    { code: "ScrollLock", label: "ScrLk", className: "utility" },
    { code: "Pause", label: "Pause", className: "utility" },
  ],

  [
    { code: "Backquote", label: "` ~" },
    { code: "Digit1", label: "1 !" },
    { code: "Digit2", label: "2 @" },
    { code: "Digit3", label: "3 #" },
    { code: "Digit4", label: "4 $" },
    { code: "Digit5", label: "5 %" },
    { code: "Digit6", label: "6 ^" },
    { code: "Digit7", label: "7 &" },
    { code: "Digit8", label: "8 *" },
    { code: "Digit9", label: "9 (" },
    { code: "Digit0", label: "0 )" },
    { code: "Minus", label: "- _" },
    { code: "Equal", label: "= +" },
    { code: "Backspace", label: "Backspace", className: "backspace" },
    { code: "Insert", label: "Insert", className: "utility" },
    { code: "Home", label: "Home", className: "utility" },
    { code: "PageUp", label: "PgUp", className: "utility" },
    { code: "NumLock", label: "Num", className: "utility" },
    { code: "NumpadDivide", label: "/", className: "numpad" },
    { code: "NumpadMultiply", label: "*", className: "numpad" },
    { code: "NumpadSubtract", label: "-", className: "numpad" },
  ],

  [
    { code: "Tab", label: "Tab", className: "tab" },
    { code: "KeyQ", label: "Q" },
    { code: "KeyW", label: "W" },
    { code: "KeyE", label: "E" },
    { code: "KeyR", label: "R" },
    { code: "KeyT", label: "T" },
    { code: "KeyY", label: "Y" },
    { code: "KeyU", label: "U" },
    { code: "KeyI", label: "I" },
    { code: "KeyO", label: "O" },
    { code: "KeyP", label: "P" },
    { code: "BracketLeft", label: "[ {" },
    { code: "BracketRight", label: "] }" },
    { code: "Backslash", label: "\\ |", className: "backslash" },
    { code: "Delete", label: "Delete", className: "utility" },
    { code: "End", label: "End", className: "utility" },
    { code: "PageDown", label: "PgDn", className: "utility" },
    { code: "Numpad7", label: "7", className: "numpad" },
    { code: "Numpad8", label: "8", className: "numpad" },
    { code: "Numpad9", label: "9", className: "numpad" },
    { code: "NumpadAdd", label: "+", className: "numpad tall" },
  ],

  [
    { code: "CapsLock", label: "Caps Lock", className: "caps" },
    { code: "KeyA", label: "A" },
    { code: "KeyS", label: "S" },
    { code: "KeyD", label: "D" },
    { code: "KeyF", label: "F" },
    { code: "KeyG", label: "G" },
    { code: "KeyH", label: "H" },
    { code: "KeyJ", label: "J" },
    { code: "KeyK", label: "K" },
    { code: "KeyL", label: "L" },
    { code: "Semicolon", label: "; :" },
    { code: "Quote", label: "' \"" },
    { code: "Enter", label: "Enter", className: "enter" },
    { code: "Numpad4", label: "4", className: "numpad" },
    { code: "Numpad5", label: "5", className: "numpad" },
    { code: "Numpad6", label: "6", className: "numpad" },
  ],

  [
    { code: "ShiftLeft", label: "Shift", className: "shift-left" },
    { code: "KeyZ", label: "Z" },
    { code: "KeyX", label: "X" },
    { code: "KeyC", label: "C" },
    { code: "KeyV", label: "V" },
    { code: "KeyB", label: "B" },
    { code: "KeyN", label: "N" },
    { code: "KeyM", label: "M" },
    { code: "Comma", label: ", <" },
    { code: "Period", label: ". >" },
    { code: "Slash", label: "/ ?" },
    { code: "ShiftRight", label: "Shift", className: "shift-right" },
    { code: "ArrowUp", label: "↑", className: "arrow" },
    { code: "Numpad1", label: "1", className: "numpad" },
    { code: "Numpad2", label: "2", className: "numpad" },
    { code: "Numpad3", label: "3", className: "numpad" },
    { code: "NumpadEnter", label: "Enter", className: "numpad tall" },
  ],

  [
    { code: "ControlLeft", label: "Ctrl", className: "modifier" },
    { code: "MetaLeft", label: "Win", className: "modifier" },
    { code: "AltLeft", label: "Alt", className: "modifier" },
    { code: "Space", label: "", className: "space" },
    { code: "AltRight", label: "Alt", className: "modifier" },
    { code: "MetaRight", label: "Win", className: "modifier" },
    { code: "ContextMenu", label: "Menu", className: "modifier" },
    { code: "ControlRight", label: "Ctrl", className: "modifier" },
    { code: "ArrowLeft", label: "←", className: "arrow" },
    { code: "ArrowDown", label: "↓", className: "arrow" },
    { code: "ArrowRight", label: "→", className: "arrow" },
    { code: "Numpad0", label: "0", className: "numpad numpad-zero" },
    { code: "NumpadDecimal", label: ".", className: "numpad" },
  ],
];

const allKeys = keyboardRows.flat();

function KeyboardTester() {
  const [isTesting, setIsTesting] = useState(false);
  const [pressedKeys, setPressedKeys] = useState({});
  const [pressCounts, setPressCounts] = useState({});
  const [testedKeys, setTestedKeys] = useState({});

  const testerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Jeżeli test nie jest aktywny,
      // nie przejmujemy klawiatury.
      if (!isTesting) return;

      /*
       * Najważniejsze:
       * blokujemy standardowe działanie przeglądarki.
       *
       * Dzięki temu:
       * Tab       -> nie zmienia focusu
       * F1        -> nie otwiera pomocy
       * Space     -> nie przewija strony
       * Backspace -> nie wraca do poprzedniej strony
       * strzałki  -> nie przewijają strony
       * Enter     -> nie aktywuje przycisków
       */
      event.preventDefault();
      event.stopPropagation();

      // Nie zliczamy auto-repeat przy przytrzymaniu klawisza.
      if (event.repeat) return;

      const code = event.code;

      setPressedKeys((prev) => ({
        ...prev,
        [code]: true,
      }));

      setPressCounts((prev) => {
        const newCount = (prev[code] || 0) + 1;

        // 4. naciśnięcie = klawisz przetestowany
        if (newCount > 3) {
          setTestedKeys((tested) => ({
            ...tested,
            [code]: true,
          }));
        }

        return {
          ...prev,
          [code]: newCount,
        };
      });
    };

    const handleKeyUp = (event) => {
      if (!isTesting) return;

      event.preventDefault();
      event.stopPropagation();

      setPressedKeys((prev) => ({
        ...prev,
        [event.code]: false,
      }));
    };

    /*
     * capture = true
     *
     * Pozwala przechwycić zdarzenie bardzo wcześnie,
     * zanim większość elementów strony będzie mogła
     * zareagować na klawisz.
     */
    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("keyup", handleKeyUp, true);
    };
  }, [isTesting]);

  const testedCount = Object.keys(testedKeys).length;
  const totalKeys = allKeys.length;
  const progress = Math.round((testedCount / totalKeys) * 100);

  const startTest = () => {
    setIsTesting(true);

    // Natychmiast oddajemy focus testerowi.
    requestAnimationFrame(() => {
      testerRef.current?.focus();
    });
  };

  const stopTest = () => {
    setIsTesting(false);
    setPressedKeys({});
  };

  const resetTest = () => {
    setIsTesting(false);
    setPressedKeys({});
    setPressCounts({});
    setTestedKeys({});
  };

  return (
    <div
      className="keyboard-tester"
      ref={testerRef}
      tabIndex={0}
      onMouseDown={() => {
        if (isTesting) {
          testerRef.current?.focus();
        }
      }}
    >
      <div className="tester-header">
        <div>
          <div className="title-line">
            <span className={`status-dot ${isTesting ? "active" : ""}`} />

            <span className="eyebrow">HARDWARE DIAGNOSTICS</span>

            {isTesting && <span className="testing-badge">TEST AKTYWNY</span>}
          </div>

          <h1>Keyboard Tester</h1>

          <p>
            {isTesting
              ? "Naciśnij każdy klawisz 4 razy, aby potwierdzić jego poprawne działanie."
              : "Rozpocznij test, aby sprawdzić wszystkie klawisze swojej klawiatury."}
          </p>
        </div>

        <div className="header-actions">
          {!isTesting ? (
            <button className="start-button" onClick={startTest}>
              <span className="button-icon">▶</span>
              Rozpocznij test
            </button>
          ) : (
            <button className="stop-button" onClick={stopTest}>
              Zakończ test
            </button>
          )}

          <button className="reset-button" onClick={resetTest}>
            Reset testu
          </button>
        </div>
      </div>

      <div className="progress-panel">
        <div className="progress-info">
          <span>Postęp testu</span>

          <strong>
            {testedCount} / {totalKeys}
          </strong>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <span className="progress-percent">{progress}%</span>
      </div>

      {!isTesting && (
        <div className="start-info">
          <div className="start-info-icon">⌨</div>

          <div>
            <strong>Gotowy do testu?</strong>

            <p>
              Kliknij „Rozpocznij test”, a następnie naciskaj fizyczne klawisze
              na klawiaturze. Podczas testu skróty przeglądarki zostaną
              zablokowane.
            </p>
          </div>
        </div>
      )}

      <div className="keyboard-wrapper">
        <div className="keyboard">
          {keyboardRows.map((row, rowIndex) => (
            <div className={`keyboard-row row-${rowIndex}`} key={rowIndex}>
              {row.map((key) => {
                const count = pressCounts[key.code] || 0;
                const isPressed = pressedKeys[key.code];
                const isTested = testedKeys[key.code];

                return (
                  <div
                    key={key.code}
                    className={[
                      "key",
                      key.className || "",
                      isPressed ? "pressed" : "",
                      isTested ? "tested" : "",
                      !isTesting ? "disabled" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    <span className="key-label">{key.label}</span>

                    {count > 0 && !isTested && (
                      <span className="key-count">{count}/4</span>
                    )}

                    {isTested && <span className="check">✓</span>}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="legend">
        <div className="legend-item">
          <span className="legend-key active" />
          <span>Aktualnie naciśnięty</span>
        </div>

        <div className="legend-item">
          <span className="legend-key tested" />
          <span>Przetestowany</span>
        </div>

        <div className="legend-item">
          <span className="legend-key untouched" />
          <span>Nieprzetestowany</span>
        </div>
      </div>
    </div>
  );
}

export default KeyboardTester;
