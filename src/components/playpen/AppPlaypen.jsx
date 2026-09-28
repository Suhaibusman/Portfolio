import React, { useState, useEffect } from "react";
import "./AppPlaypen.css";
import { PERSONAL_INFO } from "../../data/portfolioData";
import {
  Smartphone,
  CreditCard,
  HeartPulse,
  Bot,
  TrendingUp,
  Send,
  Download,
  Calendar,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Search,
  User,
  Plus,
  RefreshCw,
} from "lucide-react";
import confetti from "canvas-confetti";

const AppPlaypen = () => {
  const [activeApp, setActiveApp] = useState("sadapay");
  const [phoneTheme, setPhoneTheme] = useState("midnight"); // midnight, titanium, violet

  // Current simulated time
  const [timeStr, setTimeStr] = useState("9:41");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      setTimeStr(`${hours % 12 || 12}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // ----------------------------------------------------
  // APP 1: SADAPAY FINTECH STATE
  // ----------------------------------------------------
  const [fintechBalance, setFintechBalance] = useState(12450.0);
  const [currency, setCurrency] = useState("USD");
  const [cardFlipped, setCardFlipped] = useState(false);
  const [fintechFilter, setFintechFilter] = useState("all");
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Apple Developer License", type: "expense", amount: 99.0, category: "Dev", time: "2h ago" },
    { id: 2, title: "Client Mobile Milestone", type: "income", amount: 1500.0, category: "Freelance", time: "Yesterday" },
    { id: 3, title: "AWS Cloud & Firebase", type: "expense", amount: 35.5, category: "Hosting", time: "3 days ago" },
  ]);

  const handleSendMoney = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#06b6d4", "#10b981"],
      });
    } catch {
      // ignore
    }

    const newTx = {
      id: Date.now(),
      title: "Instant P2P Transfer",
      type: "expense",
      amount: 120.0,
      category: "Transfer",
      time: "Just now",
    };
    setFintechBalance((prev) => Math.max(0, prev - 120.0));
    setTransactions((prev) => [newTx, ...prev]);
  };

  const handleReceiveMoney = () => {
    try {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#10b981", "#34d399", "#06b6d4"],
      });
    } catch {
      // ignore
    }

    const newTx = {
      id: Date.now(),
      title: "Upwork Payout Cleared",
      type: "income",
      amount: 450.0,
      category: "Income",
      time: "Just now",
    };
    setFintechBalance((prev) => prev + 450.0);
    setTransactions((prev) => [newTx, ...prev]);
  };

  // ----------------------------------------------------
  // APP 2: DOCTOR APPOINTMENT STATE
  // ----------------------------------------------------
  const [selectedDoctor, setSelectedDoctor] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState("10:30 AM");
  const [appointmentBooked, setAppointmentBooked] = useState(false);

  const doctorsList = [
    { id: 1, name: "Dr. Sarah Jenkins", spec: "Cardiologist", rating: "4.9", exp: "8 yrs", fee: "$60", available: "Today" },
    { id: 2, name: "Dr. Arsalan Khan", spec: "Neurologist", rating: "5.0", exp: "12 yrs", fee: "$85", available: "Tomorrow" },
    { id: 3, name: "Dr. Elena Rostova", spec: "Pediatrician", rating: "4.8", exp: "6 yrs", fee: "$50", available: "Today" },
  ];

  const handleBookAppointment = () => {
    setAppointmentBooked(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }
  };

  // ----------------------------------------------------
  // APP 3: GEMINI AI STREAMING CHAT STATE
  // ----------------------------------------------------
  const [aiInput, setAiInput] = useState("");
  const [isAiTyping, setIsAiTyping] = useState(false);
  const [aiMessages, setAiMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello! I'm Suhaib's Gemini Mobile Companion. Ask me about Flutter performance, BLoC architecture, or state management!",
    },
  ]);

  const handleSendAiPrompt = (presetText) => {
    const prompt = presetText || aiInput;
    if (!prompt.trim() || isAiTyping) return;

    const userMsg = { id: Date.now(), sender: "user", text: prompt };
    setAiMessages((prev) => [...prev, userMsg]);
    setAiInput("");
    setIsAiTyping(true);

    setTimeout(() => {
      let botResponse = "";
      if (prompt.toLowerCase().includes("bloc") || prompt.toLowerCase().includes("architecture")) {
        botResponse = "BLoC (Business Logic Component) decouples presentation from business logic using reactive Dart Streams. In Suhaib's architecture, events map into immutable states ensuring 0 UI rebuild regressions!";
      } else if (prompt.toLowerCase().includes("sqlite") || prompt.toLowerCase().includes("offline")) {
        botResponse = "Suhaib implements offline-first SQLite using local repository caching with background sync queues, guaranteeing sub-10ms UI reads even without internet!";
      } else if (prompt.toLowerCase().includes("flutter") || prompt.toLowerCase().includes("performance")) {
        botResponse = "Flutter compiles directly to native ARM64 machine code via the Skia/Impeller engine. By avoiding unnecessary widget tree rebuilds and using RepaintBoundaries, Suhaib locks 60FPS consistently.";
      } else {
        botResponse = `Thanks for asking about "${prompt}"! Suhaib applies Clean Architecture and SOLID design patterns across all mobile client builds.`;
      }

      setAiMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: botResponse },
      ]);
      setIsAiTyping(false);
    }, 700);
  };

  // ----------------------------------------------------
  // APP 4: CRYPTO & WEB3 TRACKER STATE
  // ----------------------------------------------------
  const [cryptoAssets, setCryptoAssets] = useState([
    { symbol: "BTC", name: "Bitcoin", price: "$64,280", change: "+3.4%", positive: true },
    { symbol: "ETH", name: "Ethereum", price: "$3,490", change: "+5.1%", positive: true },
    { symbol: "SOL", name: "Solana", price: "$148.50", change: "-1.2%", positive: false },
    { symbol: "FLTR", name: "Flutter Dev", price: "$100.00", change: "+60.0%", positive: true },
  ]);

  return (
    <section id="playpen" className="playpen-section section-spacing">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive Mobile Sandbox</span>
          </div>
          <h2 className="section-title">
            Test Drive <span className="gradient-text">In-Browser Mobile Apps</span>
          </h2>
          <p className="section-subtitle">
            Experience real Flutter UI interactions live in your browser. Tap buttons, execute simulated transactions, book appointments, or prompt the AI engine.
          </p>
        </div>

        {/* Sandbox Shell Container */}
        <div className="playpen-shell glass-card">
          {/* Top Control Header */}
          <div className="playpen-top-toolbar">
            {/* App Presets Switcher */}
            <div className="app-preset-tabs">
              <button
                onClick={() => setActiveApp("sadapay")}
                className={`preset-tab-btn ${activeApp === "sadapay" ? "active" : ""}`}
              >
                <CreditCard size={16} />
                <span>SadaPay Wallet</span>
              </button>

              <button
                onClick={() => setActiveApp("doctor")}
                className={`preset-tab-btn ${activeApp === "doctor" ? "active" : ""}`}
              >
                <HeartPulse size={16} />
                <span>Doctor Telehealth</span>
              </button>

              <button
                onClick={() => setActiveApp("gemini")}
                className={`preset-tab-btn ${activeApp === "gemini" ? "active" : ""}`}
              >
                <Bot size={16} />
                <span>Gemini AI Suite</span>
              </button>

              <button
                onClick={() => setActiveApp("crypto")}
                className={`preset-tab-btn ${activeApp === "crypto" ? "active" : ""}`}
              >
                <TrendingUp size={16} />
                <span>Crypto Pulse</span>
              </button>
            </div>

            {/* Phone Case Customizer */}
            <div className="phone-case-selector">
              <span className="case-label">Device Finish:</span>
              <div className="case-dots">
                <button
                  onClick={() => setPhoneTheme("midnight")}
                  className={`case-dot dot-midnight ${phoneTheme === "midnight" ? "active" : ""}`}
                  title="Midnight Black"
                />
                <button
                  onClick={() => setPhoneTheme("titanium")}
                  className={`case-dot dot-titanium ${phoneTheme === "titanium" ? "active" : ""}`}
                  title="Natural Titanium"
                />
                <button
                  onClick={() => setPhoneTheme("violet")}
                  className={`case-dot dot-violet ${phoneTheme === "violet" ? "active" : ""}`}
                  title="Cosmic Violet"
                />
              </div>
            </div>
          </div>

          {/* Sandbox Workspace: Phone Simulator + Live Code / Architecture Highlights */}
          <div className="playpen-workspace-grid">
            {/* Simulated Phone Device Frame */}
            <div className="playpen-phone-stage">
              <div className={`device-phone playpen-phone-device phone-theme-${phoneTheme}`}>
                {/* Dynamic Island */}
                <div className="device-island">
                  <div className="device-island-camera" />
                  <span className="island-indicator" />
                </div>

                {/* Status Bar */}
                <div className="simulated-status-bar">
                  <span className="sim-time">{timeStr}</span>
                  <div className="sim-status-icons">
                    <span>5G</span>
                    <span className="sim-battery">100%</span>
                  </div>
                </div>

                <div className="device-glare" />

                {/* ============================================================ */}
                {/* APP SCREEN 1: SADAPAY FINTECH */}
                {/* ============================================================ */}
                {activeApp === "sadapay" && (
                  <div className="device-screen playpen-screen sadapay-app-screen">
                    <div className="app-header-mini">
                      <div className="avatar-chip">
                        <User size={14} />
                        <span>Muhammad S.</span>
                      </div>
                      <span className="fintech-logo-text">SadaPay</span>
                    </div>

                    {/* Interactive Debit Card with 3D Flip */}
                    <div
                      className={`sandbox-card-3d ${cardFlipped ? "flipped" : ""}`}
                      onClick={() => setCardFlipped(!cardFlipped)}
                      title="Tap to flip card"
                    >
                      <div className="card-side card-front">
                        <div className="card-row-top">
                          <span className="card-brand-tag">SadaPay Debit</span>
                          <span className="tap-hint">Tap to flip ↺</span>
                        </div>
                        <div className="card-balance-display">
                          <span className="card-label">Available Balance</span>
                          <strong className="card-amount">
                            ${fintechBalance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                          </strong>
                        </div>
                        <div className="card-row-bottom">
                          <span>•••• 9104</span>
                          <span>08/29</span>
                        </div>
                      </div>

                      <div className="card-side card-back">
                        <div className="card-magstripe" />
                        <div className="card-cvv-box">
                          <span>CVV: 849</span>
                        </div>
                        <p className="card-disclaimer">Zero foreign transaction fees on international spend.</p>
                      </div>
                    </div>

                    {/* Quick Simulated Money Actions */}
                    <div className="fintech-action-buttons">
                      <button onClick={handleSendMoney} className="action-pill-btn send">
                        <Send size={14} />
                        <span>Send $120</span>
                      </button>

                      <button onClick={handleReceiveMoney} className="action-pill-btn receive">
                        <Plus size={14} />
                        <span>Add $450</span>
                      </button>
                    </div>

                    {/* Transactions Feed */}
                    <div className="fintech-ledger-box">
                      <div className="ledger-header">
                        <span>Transactions</span>
                        <div className="ledger-filters">
                          <button
                            onClick={() => setFintechFilter("all")}
                            className={`filter-btn ${fintechFilter === "all" ? "active" : ""}`}
                          >
                            All
                          </button>
                          <button
                            onClick={() => setFintechFilter("income")}
                            className={`filter-btn ${fintechFilter === "income" ? "active" : ""}`}
                          >
                            Income
                          </button>
                        </div>
                      </div>

                      <div className="ledger-items-list">
                        {transactions
                          .filter((t) => (fintechFilter === "all" ? true : t.type === fintechFilter))
                          .map((tx) => (
                            <div key={tx.id} className="ledger-row">
                              <div className="ledger-icon">
                                <TrendingUp size={13} />
                              </div>
                              <div className="ledger-details">
                                <span className="tx-title">{tx.title}</span>
                                <span className="tx-meta">{tx.time} • {tx.category}</span>
                              </div>
                              <span className={`tx-value ${tx.type}`}>
                                {tx.type === "income" ? "+" : "-"}${tx.amount.toFixed(2)}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================================================ */}
                {/* APP SCREEN 2: DOCTOR APPOINTMENT */}
                {/* ============================================================ */}
                {activeApp === "doctor" && (
                  <div className="device-screen playpen-screen doctor-app-screen">
                    <div className="app-header-mini">
                      <span className="doctor-brand">DoctorCare 🏥</span>
                      <span className="live-status-pill">Offline Sync Ready</span>
                    </div>

                    {!appointmentBooked ? (
                      <>
                        <div className="search-bar-mock">
                          <Search size={14} />
                          <span>Search top specialists...</span>
                        </div>

                        <div className="doctor-list-container">
                          <span className="doc-section-heading">Featured Physicians</span>
                          {doctorsList.map((doc) => (
                            <div
                              key={doc.id}
                              onClick={() => setSelectedDoctor(doc.id)}
                              className={`doc-card-item ${selectedDoctor === doc.id ? "selected" : ""}`}
                            >
                              <div className="doc-avatar">
                                <User size={16} />
                              </div>
                              <div className="doc-meta">
                                <strong>{doc.name}</strong>
                                <span>{doc.spec} • ⭐ {doc.rating}</span>
                              </div>
                              <span className="doc-fee">{doc.fee}</span>
                            </div>
                          ))}
                        </div>

                        <div className="slot-picker-box">
                          <span className="slot-title">Select Consultation Slot</span>
                          <div className="slot-buttons-row">
                            {["09:00 AM", "10:30 AM", "02:00 PM", "04:30 PM"].map((slot) => (
                              <button
                                key={slot}
                                onClick={() => setSelectedSlot(slot)}
                                className={`slot-btn ${selectedSlot === slot ? "selected" : ""}`}
                              >
                                {slot}
                              </button>
                            ))}
                          </div>
                        </div>

                        <button onClick={handleBookAppointment} className="btn-book-primary">
                          <span>Confirm Booking ({selectedSlot})</span>
                          <ArrowRight size={14} />
                        </button>
                      </>
                    ) : (
                      <div className="appointment-confirmed-state">
                        <div className="success-icon-box">
                          <CheckCircle size={36} className="text-emerald" />
                        </div>
                        <h3>Appointment Confirmed!</h3>
                        <p>Your teleconsultation pass is saved in local SQLite cache.</p>

                        <div className="ticket-pass-box">
                          <div className="ticket-row">
                            <span>Doctor:</span>
                            <strong>{doctorsList.find((d) => d.id === selectedDoctor)?.name}</strong>
                          </div>
                          <div className="ticket-row">
                            <span>Time Slot:</span>
                            <strong>{selectedSlot} (Today)</strong>
                          </div>
                          <div className="ticket-row">
                            <span>Sync Status:</span>
                            <span className="text-emerald font-mono">Synchronized ✓</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setAppointmentBooked(false)}
                          className="btn-secondary btn-sm w-full"
                        >
                          Book Another
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* ============================================================ */}
                {/* APP SCREEN 3: GEMINI AI CHAT */}
                {/* ============================================================ */}
                {activeApp === "gemini" && (
                  <div className="device-screen playpen-screen gemini-app-screen">
                    <div className="app-header-mini">
                      <div className="gemini-header-tag">
                        <Bot size={15} className="text-cyan" />
                        <span>Gemini Pro Mobile</span>
                      </div>
                      <span className="live-status-pill">SSE Stream</span>
                    </div>

                    <div className="gemini-chat-history">
                      {aiMessages.map((msg) => (
                        <div key={msg.id} className={`chat-bubble-row ${msg.sender}`}>
                          <div className={`chat-bubble ${msg.sender}`}>
                            <p>{msg.text}</p>
                          </div>
                        </div>
                      ))}
                      {isAiTyping && (
                        <div className="chat-bubble-row bot">
                          <div className="chat-bubble bot typing-bubble">
                            <span className="dot-typing" />
                            <span className="dot-typing" />
                            <span className="dot-typing" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Quick Prompts */}
                    <div className="gemini-quick-prompts">
                      <button onClick={() => handleSendAiPrompt("Explain BLoC pattern")}>
                        ⚡ BLoC Architecture
                      </button>
                      <button onClick={() => handleSendAiPrompt("How to optimize offline SQLite?")}>
                        🔒 SQLite Sync
                      </button>
                      <button onClick={() => handleSendAiPrompt("Why Flutter for 60FPS?")}>
                        ✨ 60FPS Rendering
                      </button>
                    </div>

                    {/* Chat Input */}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        handleSendAiPrompt();
                      }}
                      className="gemini-input-form"
                    >
                      <input
                        type="text"
                        value={aiInput}
                        onChange={(e) => setAiInput(e.target.value)}
                        placeholder="Ask Gemini mobile anything..."
                        className="gemini-text-input"
                      />
                      <button type="submit" className="gemini-send-btn">
                        <Send size={13} />
                      </button>
                    </form>
                  </div>
                )}

                {/* ============================================================ */}
                {/* APP SCREEN 4: CRYPTO TRACKER */}
                {/* ============================================================ */}
                {activeApp === "crypto" && (
                  <div className="device-screen playpen-screen crypto-app-screen">
                    <div className="app-header-mini">
                      <span className="crypto-brand">CryptoPulse ⚡</span>
                      <span className="live-status-pill">WebSockets</span>
                    </div>

                    <div className="crypto-portfolio-banner">
                      <span className="banner-sub">Total Portfolio</span>
                      <strong className="banner-val">$48,920.40</strong>
                      <span className="banner-pnl text-emerald">+14.2% this week</span>
                    </div>

                    <div className="crypto-list-box">
                      {cryptoAssets.map((asset) => (
                        <div key={asset.symbol} className="crypto-row-item">
                          <div className="crypto-icon-box">
                            <span>{asset.symbol.slice(0, 1)}</span>
                          </div>
                          <div className="crypto-meta">
                            <strong>{asset.name}</strong>
                            <span>{asset.symbol}</span>
                          </div>
                          <div className="crypto-price-col">
                            <strong>{asset.price}</strong>
                            <span className={asset.positive ? "text-emerald" : "text-rose"}>
                              {asset.change}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        try {
                          confetti({ particleCount: 40, spread: 60 });
                        } catch {}
                      }}
                      className="btn-book-primary"
                    >
                      <span>Simulate Order Execution</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Right Side: Architecture Deep Dive & Blueprint */}
            <div className="playpen-blueprint-col">
              <div className="blueprint-card glass-panel">
                <div className="blueprint-header">
                  <div className="blueprint-tag">
                    <ShieldCheck size={14} className="text-cyan" />
                    <span>Architecture Inspect</span>
                  </div>
                  <h3>
                    {activeApp === "sadapay" && "SadaPay Fintech Client Architecture"}
                    {activeApp === "doctor" && "Offline-First Healthcare Engine"}
                    {activeApp === "gemini" && "Multimodal SSE AI Pipeline"}
                    {activeApp === "crypto" && "Real-Time WebSocket State Stream"}
                  </h3>
                </div>

                <div className="blueprint-body">
                  <p className="blueprint-desc">
                    {activeApp === "sadapay" &&
                      "Engineered with predictable BLoC state streams. 3D card flips utilize custom Matrix4 transforms with hardware-accelerated RenderObjects, preventing frame-drops during concurrent ledger calculations."}
                    {activeApp === "doctor" &&
                      "Built with a Repository Pattern wrapping local SQLite database and remote Firebase endpoints. Appointment slots lock optimistically with zero network delay."}
                    {activeApp === "gemini" &&
                      "Integrated with Google Gemini Pro API via streaming Server-Sent Events (SSE). Chunk parsing happens off the UI thread inside Dart Isolates to maintain a silky smooth 60FPS scroll."}
                    {activeApp === "crypto" &&
                      "Architected with persistent WebSocket channels and Riverpod state caching. Ticker updates throttle gracefully using RxDart debounce algorithms."}
                  </p>

                  <div className="blueprint-features-list">
                    <div className="feature-bullet">
                      <CheckCircle size={15} className="text-emerald shrink-0" />
                      <span>Zero UI Jitter with 60FPS hardware acceleration</span>
                    </div>
                    <div className="feature-bullet">
                      <CheckCircle size={15} className="text-emerald shrink-0" />
                      <span>Isolated state stores with clean unit test coverage</span>
                    </div>
                    <div className="feature-bullet">
                      <CheckCircle size={15} className="text-emerald shrink-0" />
                      <span>Adaptive layout scaling for compact phones & tablets</span>
                    </div>
                  </div>

                  <div className="blueprint-actions">
                    <a href="#contact" className="btn-primary">
                      <span>Build a Similar Mobile App</span>
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPlaypen;
