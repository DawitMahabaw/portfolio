import React, { useState } from 'react';
import { Terminal, Copy, Check, CornerDownLeft } from 'lucide-react';
import { terminalData, personalData } from '../data';
import '../styles/DevTerminal.css';

export default function DevTerminal() {
  const [activeTab, setActiveTab] = useState('whoami');
  const [copied, setCopied] = useState(false);
  const [customInput, setCustomInput] = useState('');
  const [customHistory, setCustomHistory] = useState([]);

  const commands = {
    whoami: 'dawit — junior MERN developer, AAU Information Science undergrad (2nd year) & Evangadi graduate.',
    stack: 'Frontend: React, JavaScript (ES6+), HTML5, CSS3\nBackend: Node.js, Express.js, REST APIs, JWT\nDatabase: MongoDB, Mongoose ODM\nTools: Git, GitHub, Postman, VS Code',
    projects: '1. TaskFlow Pro (MERN Kanban)\n2. ShopEase (E-Commerce Store)\n3. NoteNest (Smart Notes)\n4. Weatherly (Real-Time Weather)',
    education: '• Addis Ababa University — B.Sc. Information Science (2023–Present)\n• Evangadi Networks — AI-Powered Full-Stack Development (2024–2025)',
    contact: `Email: ${personalData.socials.email}\nGitHub: ${personalData.socials.github}\nLinkedIn: ${personalData.socials.linkedin}\nStatus: Open to junior roles & internships.`,
  };

  const handleCommandClick = (cmd) => {
    setActiveTab(cmd);
  };

  const handleCopySnippet = () => {
    navigator.clipboard.writeText(`npx @dawit/portfolio-cli || curl -sL https://github.com/dawitmahabaw`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const trimmed = customInput.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setCustomHistory([]);
      setCustomInput('');
      return;
    }

    let response = commands[trimmed] || `Command not found: "${trimmed}". Try: whoami, stack, projects, education, contact, or clear.`;
    setCustomHistory((prev) => [...prev, { cmd: trimmed, output: response }]);
    setCustomInput('');
  };

  return (
    <div className="dev-terminal-card" aria-label="Interactive Developer Console">
      {/* Terminal Window Chrome */}
      <div className="dev-terminal-header">
        <div className="terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <div className="terminal-title">
          <Terminal size={13} className="terminal-icon" />
          <span>{terminalData.user}@{terminalData.host}:{terminalData.path}</span>
        </div>
        <button
          type="button"
          className="terminal-copy-btn"
          onClick={handleCopySnippet}
          title="Copy dev command"
          aria-label="Copy terminal command"
        >
          {copied ? <Check size={13} className="text-emerald" /> : <Copy size={13} />}
        </button>
      </div>

      {/* Terminal Body */}
      <div className="dev-terminal-body">
        <div className="terminal-log">
          <div className="terminal-line">
            <span className="prompt-symbol">&gt;</span>
            <span className="prompt-cmd">whoami</span>
          </div>
          <div className="terminal-output">{commands.whoami}</div>

          <div className="terminal-line">
            <span className="prompt-symbol">&gt;</span>
            <span className="prompt-cmd">stack</span>
          </div>
          <div className="terminal-output">{commands.stack}</div>

          <div className="terminal-line">
            <span className="prompt-symbol">&gt;</span>
            <span className="prompt-cmd">status</span>
          </div>
          <div className="terminal-output status-highlight">
            <span className="terminal-badge-pulse" />
            <span>Open to junior developer roles &amp; internships. Let's build something great.</span>
          </div>

          {/* Any user typed commands */}
          {customHistory.map((item, index) => (
            <div key={index} className="terminal-dynamic-block">
              <div className="terminal-line">
                <span className="prompt-symbol">&gt;</span>
                <span className="prompt-cmd">{item.cmd}</span>
              </div>
              <div className="terminal-output">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Quick Command Chips */}
        <div className="terminal-quick-chips" aria-label="Quick terminal commands">
          <span className="chips-label">Quick Run:</span>
          {Object.keys(commands).map((cmd) => (
            <button
              key={cmd}
              type="button"
              className={`chip-btn ${activeTab === cmd ? 'active' : ''}`}
              onClick={() => handleCommandClick(cmd)}
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Active Command Output Drawer (if clicked from chips) */}
        {activeTab && activeTab !== 'whoami' && activeTab !== 'stack' && (
          <div className="terminal-tab-result">
            <div className="terminal-line">
              <span className="prompt-symbol">&gt;</span>
              <span className="prompt-cmd">{activeTab}</span>
            </div>
            <pre className="terminal-output-pre">{commands[activeTab]}</pre>
          </div>
        )}

        {/* Interactive Prompt Input */}
        <form onSubmit={handleFormSubmit} className="terminal-input-row">
          <span className="prompt-symbol">&gt;</span>
          <input
            type="text"
            className="terminal-input"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Type 'help', 'contact', 'stack'..."
            aria-label="Terminal command input"
          />
          <button type="submit" className="terminal-send-btn" aria-label="Submit command">
            <CornerDownLeft size={13} />
          </button>
        </form>

        <div className="terminal-footer-hint">
          <span># developer lab interactive console</span>
          <span># Addis Ababa, Ethiopia</span>
        </div>
      </div>
    </div>
  );
}
