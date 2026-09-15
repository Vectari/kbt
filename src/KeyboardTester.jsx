import React, { useEffect, useRef, useState } from "react";
import "./KeyboardTester.css";

const REQUIRED_PRESSES = 3;

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

    { code: "Insert", label: "Insert", className: "utility nav-key" },
    { code: "Home", label: "Home", className: "utility nav-key" },
    { code: "PageUp", label: "PgUp", className: "utility nav-key" },

    { code: "NumLock", label: "Num", className: "utility numpad-key" },
    { code: "NumpadDivide", label: "/", className: "numpad numpad-key" },
    { code: "NumpadMultiply", label: "*", className: "numpad numpad-key" },
    { code: "NumpadSubtract", label: "-", className: "numpad numpad-key" },
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

    { code: "Delete", label: "Delete", className: "utility nav-key" },
    { code: "End", label: "End", className: "utility nav-key" },
    { code: "PageDown", label: "PgDn", className: "utility nav-key" },

    { code: "Numpad7", label: "7", className: "numpad numpad-key" },
    { code: "Numpad8", label: "8", className: "numpad numpad-key" },
    { code: "Numpad9", label: "9", className: "numpad numpad-key" },
    { code: "NumpadAdd", label: "+", className: "numpad tall numpad-key" },
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

    { code: "Numpad4", label: "4", className: "numpad numpad-key" },
    { code: "Numpad5", label: "5", className: "numpad numpad-key" },
    { code: "Numpad6", label: "6", className: "numpad numpad-key" },
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

    { code: "ArrowUp", label: "↑", className: "arrow arrow-up" },

    { code: "Numpad1", label: "1", className: "numpad numpad-key" },
    { code: "Numpad2", label: "2", className: "numpad numpad-key" },
    { code: "Numpad3", label: "3", className: "numpad numpad-key" },
    {
      code: "NumpadEnter",
      label: "Enter",
      className: "numpad tall numpad-key",
    },
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

    { code: "Numpad0", label: "0", className: "numpad numpad-zero numpad-key" },
    { code: "NumpadDecimal", label: ".", className: "numpad numpad-key" },
  ],
];

const keyboardSizes = {
  60: {
    label: "60%",
    hidden: [
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "PrintScreen",
      "ScrollLock",
      "Pause",
      "Insert",
      "Home",
      "PageUp",
      "Delete",
      "End",
      "PageDown",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "NumLock",
      "NumpadDivide",
      "NumpadMultiply",
      "NumpadSubtract",
      "Numpad7",
      "Numpad8",
      "Numpad9",
      "NumpadAdd",
      "Numpad4",
      "Numpad5",
      "Numpad6",
      "Numpad1",
      "Numpad2",
      "Numpad3",
      "NumpadEnter",
      "Numpad0",
      "NumpadDecimal",
    ],
  },

  65: {
    label: "65%",
    hidden: [
      "F1",
      "F2",
      "F3",
      "F4",
      "F5",
      "F6",
      "F7",
      "F8",
      "F9",
      "F10",
      "F11",
      "F12",
      "PrintScreen",
      "ScrollLock",
      "Pause",
      "Insert",
      "Home",
      "PageUp",
      "Delete",
      "End",
      "PageDown",
      "NumLock",
      "NumpadDivide",
      "NumpadMultiply",
      "NumpadSubtract",
      "Numpad7",
      "Numpad8",
      "Numpad9",
      "NumpadAdd",
      "Numpad4",
      "Numpad5",
      "Numpad6",
      "Numpad1",
      "Numpad2",
      "Numpad3",
      "NumpadEnter",
      "Numpad0",
      "NumpadDecimal",
    ],
  },

  75: {
    label: "75%",
    hidden: [
      "PrintScreen",
      "ScrollLock",
      "Pause",
      "NumLock",
      "NumpadDivide",
      "NumpadMultiply",
      "NumpadSubtract",
      "Numpad7",
      "Numpad8",
      "Numpad9",
      "NumpadAdd",
      "Numpad4",
      "Numpad5",
      "Numpad6",
      "Numpad1",
      "Numpad2",
      "Numpad3",
      "NumpadEnter",
      "Numpad0",
      "NumpadDecimal",
    ],
  },

  80: {
    label: "80%",
    hidden: [
      "PrintScreen",
      "ScrollLock",
      "Pause",
      "NumLock",
      "NumpadDivide",
      "NumpadMultiply",
      "NumpadSubtract",
      "Numpad7",
      "Numpad8",
      "Numpad9",
      "NumpadAdd",
      "Numpad4",
      "Numpad5",
      "Numpad6",
      "Numpad1",
      "Numpad2",
      "Numpad3",
      "NumpadEnter",
      "Numpad0",
      "NumpadDecimal",
    ],
  },

  100: {
    label: "100%",
    hidden: [],
  },
};

function KeyboardTester() {
  const [isTesting, setIsTesting] = useState(false);
  const [keyboardSize, setKeyboardSize] = useState("100");
  const [pressedKeys, setPressedKeys] = useState({});
  const [pressCounts, setPressCounts] = useState({});
  const [testedKeys, setTestedKeys] = useState({});

  const testerRef = useRef(null);

  const hiddenKeys = keyboardSizes[keyboardSize].hidden;

  const visibleRows = keyboardRows
    .map((row) => row.filter((key) => !hiddenKeys.includes(key.code)))
    .filter((row) => row.length > 0);

  const visibleKeys = visibleRows.flat();
  const totalKeys = visibleKeys.length;

  const testedCount = visibleKeys.filter((key) => testedKeys[key.code]).length;

  const remainingKeys = totalKeys - testedCount;

  const progress =
    totalKeys > 0 ? Math.round((testedCount / totalKeys) * 100) : 0;

  const testComplete = totalKeys > 0 && testedCount === totalKeys;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!isTesting) return;

      event.preventDefault();
      event.stopPropagation();

      if (event.repeat) return;

      const code = event.code;

      if (hiddenKeys.includes(code)) return;

      setPressedKeys((prev) => ({
        ...prev,
        [code]: true,
      }));

      setPressCounts((prev) => {
        const newCount = (prev[code] || 0) + 1;

        if (newCount >= REQUIRED_PRESSES) {
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

    window.addEventListener("keydown", handleKeyDown, true);
    window.addEventListener("keyup", handleKeyUp, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      window.removeEventListener("keyup", handleKeyUp, true);
    };
  }, [isTesting, hiddenKeys]);

  const handleKeyboardSizeChange = (size) => {
    setKeyboardSize(size);
    setIsTesting(false);
    setPressedKeys({});
    setPressCounts({});
    setTestedKeys({});

    requestAnimationFrame(() => {
      testerRef.current?.focus();
    });
  };

  const startTest = () => {
    setIsTesting(true);

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

            {isTesting ? (
              <span className="testing-badge active"> TEST ACTIVE </span>
            ) : (
              <span className="testing-badge inactive"> TEST INACTIVE </span>
            )}
          </div>

          <h1>KBoardTester.com - free keyboard tester</h1>

          <p>
            {isTesting
              ? `Press each key ${REQUIRED_PRESSES} times to confirm it is working correctly.`
              : "Start the test to check all keys on your keyboard."}
          </p>
        </div>

        <div className="header-actions">
          {!isTesting ? (
            <button className="start-button" onClick={startTest}>
              <span className="button-icon">▶</span>
              Start Test
            </button>
          ) : (
            <button className="stop-button" onClick={stopTest}>
              Stop Test
            </button>
          )}

          <button className="reset-button" onClick={resetTest}>
            Reset Test
          </button>
        </div>
      </div>

      <div className="progress-panel">
        <div className="progress-info">
          <span>Test Progress</span>

          <strong>
            {testedCount} / {totalKeys}
          </strong>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <span className="progress-percent">{progress}%</span>
      </div>

      <div className="start-info">
        <div className="start-info-icon">{testComplete ? "✓" : "⌨"}</div>

        <div className="start-info-content">
          {!isTesting ? (
            <>
              <strong>Ready to test?</strong>

              <p>
                Choose your keyboard size, then start the test. The keyboard
                layout and the number of required keys will automatically
                adjust.
              </p>
            </>
          ) : testComplete ? (
            <>
              <strong className="success-title">Keyboard test complete</strong>

              <p>
                All {totalKeys} keys have been successfully tested. Every key
                reached the required {REQUIRED_PRESSES}/{REQUIRED_PRESSES}
                presses.
              </p>
            </>
          ) : (
            <>
              <strong>Test in progress</strong>

              <p>
                Press each visible key {REQUIRED_PRESSES} times. Tested keys
                will turn green automatically.
              </p>
            </>
          )}

          <div className="keyboard-size-selector">
            <span className="selector-label">Keyboard Size</span>

            <div className="size-options">
              {Object.entries(keyboardSizes).map(([size, config]) => (
                <button
                  key={size}
                  type="button"
                  className={`size-button ${
                    keyboardSize === size ? "selected" : ""
                  }`}
                  onClick={() => handleKeyboardSizeChange(size)}
                >
                  {config.label}
                </button>
              ))}
            </div>
          </div>

          <div className="selected-layout-info">
            <span>Selected layout:</span>

            <strong>{keyboardSizes[keyboardSize].label}</strong>

            <span className="layout-divider">•</span>

            <span>Keys required:</span>

            <strong>{totalKeys}</strong>

            <span className="layout-divider">•</span>

            <span>Keys tested:</span>

            <strong>{testedCount}</strong>

            {isTesting && !testComplete && (
              <>
                <span className="layout-divider">•</span>

                <span>Remaining:</span>

                <strong>{remainingKeys}</strong>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="keyboard-wrapper">
        <div className={`keyboard keyboard-size-${keyboardSize}`}>
          {visibleRows.map((row, rowIndex) => (
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
                      <span className="key-count">
                        {count}/{REQUIRED_PRESSES}
                      </span>
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
          <span>Currently pressed</span>
        </div>

        <div className="legend-item">
          <span className="legend-key tested" />
          <span>Tested</span>
        </div>

        <div className="legend-item">
          <span className="legend-key untouched" />
          <span>Not tested</span>
        </div>
      </div>
    </div>
  );
}

export default KeyboardTester;
