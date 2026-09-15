import React, { useEffect, useState } from "react";
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
  const [pressedKeys, setPressedKeys] = useState({});
  const [pressCounts, setPressCounts] = useState({});
  const [testedKeys, setTestedKeys] = useState({});

  useEffect(() => {
    const handleKeyDown = (event) => {
      const code = event.code;

      // Zapobiega wielokrotnemu zliczaniu przy przytrzymaniu klawisza
      if (event.repeat) return;

      setPressedKeys((prev) => ({
        ...prev,
        [code]: true,
      }));

      setPressCounts((prev) => {
        const newCount = (prev[code] || 0) + 1;

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
      setPressedKeys((prev) => ({
        ...prev,
        [event.code]: false,
      }));
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const testedCount = Object.keys(testedKeys).length;
  const totalKeys = allKeys.length;
  const progress = Math.round((testedCount / totalKeys) * 100);

  const resetTest = () => {
    setPressedKeys({});
    setPressCounts({});
    setTestedKeys({});
  };

  return (
    <div className="keyboard-tester">
      <div className="tester-header">
        <div>
          <span className="status-dot" />
          <span className="eyebrow">HARDWARE DIAGNOSTICS</span>

          <h1>Keyboard Tester</h1>

          <p>
            Naciśnij każdy klawisz <strong>4 razy</strong>, aby potwierdzić jego
            poprawne działanie.
          </p>
        </div>

        <button className="reset-button" onClick={resetTest}>
          Reset testu
        </button>
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
