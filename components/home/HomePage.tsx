.container {
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 24px;
  position: relative;
  width: 100%;
}

.bgFixed {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: -1;
}

.bgBlob {
  animation: pulseBg 10s infinite alternate;
  background: radial-gradient(circle, rgba(30, 79, 255, 0.15) 0%, transparent 70%);
  height: 80vw;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80vw;
  z-index: -2;
}

.nav {
  left: 0;
  padding: 0 20px;
  pointer-events: none;
  position: fixed;
  top: 20px;
  width: 100%;
  z-index: 1000;
}

.navInner {
  align-items: center;
  backdrop-filter: blur(10px);
  background: rgba(10, 18, 42, 0.95);
  border: 2px solid #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 600px;
  padding: 10px 20px;
  pointer-events: auto;
}

.logo {
  align-items: center;
  display: flex;
  font-family: var(--font-head), sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  gap: 10px;
}

.logoBox {
  background: #3edbff;
  border: 2px solid #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 0 #1e4fff;
  height: 20px;
  width: 20px;
}

.btn {
  align-items: center;
  background: #1e4fff;
  border: 2px solid #fff;
  border-radius: 8px;
  box-shadow: 6px 6px 0 #fff;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-head), sans-serif;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  letter-spacing: 0.05em;
  padding: 14px 32px;
  text-transform: uppercase;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.btn:hover {
  background: #3edbff;
  border-color: #0a122a;
  box-shadow: 2px 2px 0 #fff;
  color: #0a122a;
  transform: translate(2px, 2px);
}

.btn:active {
  box-shadow: none;
  transform: translate(6px, 6px);
}

.joinBtn {
  font-size: 0.85rem;
  padding: 8px 20px;
}

.heroSection {
  display: block;
  overflow: visible;
  padding-bottom: 40px;
  padding-top: 140px;
}

.heroStage {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  min-height: 82vh;
  padding-top: 2rem;
  position: relative;
  text-align: center;
}

.heroSplit {
  display: block;
  width: 100%;
  z-index: 5;
}

.heroMega {
  --mx: 50%;
  --rw: 180px;
  color: #fff;
  font-family: var(--font-display), Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2.5rem, 6.8vw, 6.6rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 0.9;
  position: relative;
  text-align: center;
  text-transform: uppercase;
}

.heroMegaText span,
.heroMegaMask span {
  display: block;
}

.heroMegaText {
  display: block;
  position: relative;
  z-index: 1;
}

.heroMegaMask {
  color: transparent;
  display: block;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  transition: opacity 0.2s ease;
  z-index: 2;
}

.heroMega:hover .heroMegaMask {
  opacity: 1;
}

.heroMegaMask {
  background-image: linear-gradient(rgba(144, 232, 255, 0.9), rgba(144, 232, 255, 0.9));
  background-position: calc(var(--mx) - (var(--rw) / 2)) 50%;
  background-repeat: no-repeat;
  background-size: var(--rw) 100%;
  -webkit-background-clip: text;
  background-clip: text;
}

.heroSub {
  margin-top: 1rem;
  max-width: 540px;
  opacity: 0.82;
}

.heroBottomCopy {
  bottom: 42px;
  left: 0;
  max-width: 560px;
  opacity: 0.84;
  position: absolute;
  text-align: left;
  z-index: 6;
}

.phoneFloatWrap {
  left: 50%;
  position: absolute;
  top: 62vh;
  transform: translateX(-50%);
  will-change: transform;
  width: 280px;
  z-index: 20;
}

.floatCoin {
  align-items: center;
  animation: float 6s ease-in-out infinite;
  background: #22e584;
  border: 3px solid #0a122a;
  border-radius: 50%;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
  color: #0a122a;
  display: flex;
  font-family: var(--font-head), sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  height: 60px;
  justify-content: center;
  position: absolute;
  width: 60px;
  z-index: 10;
}

.coinOne {
  left: -40px;
  top: 0;
  transform: rotate(-10deg);
}

.coinTwo {
  animation-delay: 1s;
  background: #3edbff;
  bottom: 80px;
  right: -40px;
  transform: rotate(10deg);
}

.phoneMockup {
  background: #0a122a;
  border: 3px solid #fff;
  border-radius: 36px;
  box-shadow: 16px 16px 0 #1e4fff;
  display: flex;
  flex-direction: column;
  height: 540px;
  overflow: hidden;
  transform-style: preserve-3d;
  transition: transform 0.2s ease;
  width: 280px;
}

.phoneHeader {
  align-items: center;
  background: #0f1a36;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 10px;
  padding: 16px;
}

.avatar {
  background: #3edbff;
  border: 2px solid #0a122a;
  border-radius: 50%;
  height: 32px;
  width: 32px;
}

.headerCopy {
  line-height: 1.1;
}

.headerName {
  font-size: 0.9rem;
  font-weight: 700;
}

.headerStatus {
  color: #22e584;
  font-size: 0.75rem;
}

.chatArea {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-end;
  padding: 16px 16px 60px;
}

.msg {
  animation: fadeUp 0.3s ease forwards;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  font-size: 0.85rem;
  max-width: 85%;
  opacity: 0;
  padding: 10px 14px;
  transform: translateY(10px);
}

.msg-l {
  align-self: flex-start;
  background: #151e36;
  border-bottom-left-radius: 2px;
}

.msg-r {
  align-self: flex-end;
  background: #1e4fff;
  border-bottom-right-radius: 2px;
  border-color: #fff;
}

.inputBar {
  align-items: center;
  background: #151e36;
  border-top: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  gap: 8px;
  padding: 12px;
}

.fakeType {
  align-items: center;
  background: #0a122a;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 18px;
  display: flex;
  flex: 1;
  font-size: 0.75rem;
  height: 36px;
  opacity: 0.6;
  padding: 0 12px;
}

.sendBtn {
  align-items: center;
  background: #1e4fff;
  border-radius: 50%;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
}

.startBtn {
  max-width: 280px;
  position: relative;
  width: 100%;
  z-index: 6;
}

.highlight {
  display: inline-block;
  position: relative;
  z-index: 1;
}

.highlight::after {
  background: #1e4fff;
  bottom: 5px;
  content: "";
  height: 12px;
  left: -5px;
  opacity: 0.8;
  position: absolute;
  right: -5px;
  transform: skew(-10deg);
  z-index: -1;
}

.featuresSection,
.stepsSection {
  padding-bottom: 8rem;
}

.sectionHead {
  margin-bottom: 4rem;
  text-align: center;
}

.sectionHead h2 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.grid3 {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
}

.featureCard {
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 2.5rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

.cardDefault {
  background: #0a122a;
  border: 2px solid #fff;
  box-shadow: 8px 8px 0 #fff;
}

.cardDefault:hover {
  box-shadow: 12px 12px 0 #fff;
  transform: translateY(-8px);
}

.cardCyan {
  background: #3edbff;
  border: 2px solid #0a122a;
  box-shadow: 8px 8px 0 #1e4fff;
  color: #0a122a;
}

.cardCyan p {
  font-weight: 500;
  opacity: 1;
}

.cardCyan:hover {
  box-shadow: 12px 12px 0 #1e4fff;
  transform: translateY(-8px);
}

.cardWhite {
  background: #fff;
  border: 2px solid #0a122a;
  box-shadow: 8px 8px 0 #22e584;
  color: #0a122a;
}

.cardWhite p {
  font-weight: 500;
  opacity: 1;
}

.cardWhite:hover {
  box-shadow: 12px 12px 0 #22e584;
  transform: translateY(-8px);
}

.iconTile {
  align-items: center;
  background: #1e4fff;
  border: 2px solid #fff;
  border-radius: 8px;
  color: #fff;
  display: flex;
  height: 48px;
  justify-content: center;
  margin-bottom: 1.5rem;
  width: 48px;
}

.iconTileDark {
  background: #0a122a;
  border-color: #0a122a;
}

.stepsGrid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr;
}

.stepItem {
  background: transparent;
  border-left: 2px solid #3edbff;
  cursor: default;
  opacity: 1;
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.stepItem:hover {
  transform: translateX(5px);
}

.stepNumber {
  -webkit-text-stroke: 1px #3edbff;
  color: transparent;
  font-family: var(--font-head), sans-serif;
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1rem;
  opacity: 0.5;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
}

.stepItem:hover .stepNumber {
  -webkit-text-stroke: 0;
  color: #3edbff;
  opacity: 1;
  text-shadow: 0 0 20px rgba(62, 219, 255, 0.5);
}

.stepItem h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.faqSection {
  padding-bottom: 8rem;
}

.faqLayout {
  align-items: stretch;
  display: grid;
  gap: 1.2rem;
  grid-template-columns: 2fr 1fr;
}

.faqList {
  background: rgba(10, 18, 42, 0.38);
  border-radius: 10px;
  overflow: hidden;
}

.faqRow {
  align-items: center;
  background: rgba(255, 255, 255, 0.02);
  border: 0;
  border-bottom: 1px solid rgba(62, 219, 255, 0.32);
  color: #fff;
  cursor: pointer;
  display: grid;
  gap: 1.4rem;
  grid-template-columns: 54px 1fr auto;
  padding: 1rem 1.2rem;
  text-align: left;
  transition: all 0.2s ease;
  width: 100%;
}

.faqRow:last-child {
  border-bottom: 0;
}

.faqRow:hover {
  background: rgba(30, 79, 255, 0.2);
}

.faqRowActive {
  background: linear-gradient(90deg, rgba(30, 79, 255, 0.42), rgba(62, 219, 255, 0.2));
}

.faqIndex {
  font-family: var(--font-head), sans-serif;
  font-size: 1.35rem;
  opacity: 0.95;
}

.faqQuestion {
  font-size: 1.15rem;
  line-height: 1.35;
}

.faqArrow {
  font-size: 1.25rem;
  opacity: 0.9;
}

.faqPanel {
  background: linear-gradient(180deg, rgba(30, 79, 255, 0.35) 0%, rgba(10, 18, 42, 0.88) 100%);
  border-radius: 14px;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
  min-height: 420px;
  padding: 1.2rem;
}

.faqPanelIndex {
  font-family: var(--font-display), Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  font-size: clamp(2.4rem, 4vw, 4.2rem);
  line-height: 1;
  margin-bottom: 1.2rem;
}

.faqPanelBody {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 10px;
  min-height: 78%;
  padding: 1rem 1.1rem;
}

.faqPanelBody h3 {
  font-size: 1.35rem;
  margin-bottom: 0.8rem;
}

.faqPanelBody p {
  line-height: 1.65;
  opacity: 0.9;
}

.footerSection {
  background: #050a16;
  border-top: 3px solid #fff;
  padding: 6rem 0 4rem;
  position: relative;
  text-align: center;
}

.ctaContent {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;
  max-width: 600px;
  padding: 0 20px;
  position: relative;
  width: 100%;
  z-index: 2;
}

.ctaContent h2 {
  font-size: 2.5rem;
  font-weight: 800;
}

.bgText {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.05);
  color: transparent;
  font-family: var(--font-head), sans-serif;
  font-size: 15vw;
  font-weight: 800;
  left: 50%;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.footerForm {
  display: flex;
  gap: 10px;
  max-width: 450px;
  width: 100%;
}

.inputBrutal {
  background: #0a122a;
  border: 2px solid #fff;
  border-radius: 8px;
  box-shadow: 4px 4px 0 rgba(255, 255, 255, 0.2);
  color: #fff;
  font-family: var(--font-body), sans-serif;
  font-weight: 500;
  outline: none;
  padding: 16px;
  transition: 0.2s;
  width: 100%;
}

.inputBrutal:focus {
  border-color: #3edbff;
  box-shadow: 4px 4px 0 #3edbff;
}

.socials {
  display: flex;
  gap: 20px;
}

.socialBtn {
  align-items: center;
  background: #fff;
  border: 2px solid #fff;
  border-radius: 8px;
  color: #0a122a;
  display: flex;
  height: 48px;
  justify-content: center;
  transition: 0.2s;
  width: 48px;
}

.socialBtn:hover {
  background: #3edbff;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.5);
  transform: translateY(-4px);
}

.copy {
  font-size: 0.8rem;
  margin-top: 40px;
  opacity: 0.5;
}

.textGreen {
  color: #22e584;
}

.textCyan {
  color: #3edbff;
}

@keyframes pulseBg {
  0% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(0.8);
  }

  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) rotate(-10deg);
  }

  50% {
    transform: translateY(-15px) rotate(-10deg);
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .heroStage {
    min-height: 84vh;
  }

  .heroMega {
    font-size: clamp(3.2rem, 13vw, 7rem);
  }

  .heroBottomCopy {
    bottom: 16px;
    left: 50%;
    max-width: 620px;
    text-align: center;
    transform: translateX(-50%);
  }

  .phoneFloatWrap {
    top: 58vh;
  }

  .grid3,
  .stepsGrid,
  .faqLayout {
    grid-template-columns: 1fr;
  }

  .faqPanel {
    min-height: 300px;
  }

  .bgText {
    font-size: 20vw;
  }
}

@media (max-width: 600px) {
  .heroSection {
    padding-top: 120px;
  }

  .heroStage {
    min-height: 90vh;
  }

  .phoneFloatWrap {
    top: 52vh;
    width: 250px;
  }

  .heroBottomCopy {
    bottom: 20px;
    font-size: 0.92rem;
    left: 50%;
    max-width: 95%;
    text-align: center;
    transform: translateX(-50%);
  }

  .phoneMockup {
    height: 500px;
    width: 250px;
  }

  .faqRow {
    grid-template-columns: 42px 1fr auto;
    padding: 0.9rem 0.8rem;
  }

  .faqQuestion {
    font-size: 1rem;
  }

  .footerForm {
    flex-direction: column;
    width: 100%;
  }

  .footerForm .btn {
    width: 100%;
  }
}

