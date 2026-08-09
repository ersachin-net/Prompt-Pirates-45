import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="logo">AB Talks</Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="profile-image">
        S
      </div>

      <h2>Sachin</h2>
      <p className="role">CSE AIML Student</p>

      <p className="bio">
        Passionate about coding, AI/ML and building useful projects.
      </p>

      <div className="skills">
        <span>React</span>
        <span>C++</span>
        <span>Python</span>
        <span>AI/ML</span>
      </div>

      <div className="social-links">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>

        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn →
        </a>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <>
      <Navbar />

      <main className="landing">
        <p className="eyebrow">BUILT FOR INDIAN COLLEGE STUDENTS</p>

        <h1>
          Build for <span>60 days.</span>
        </h1>

        <p className="hero-text">
          Pick a coding track, build something every day, and turn your
          learning into proof that recruiters can see.
        </p>

        <Link to="/dashboard" className="primary-btn">
          Start the 60-Day Challenge →
        </Link>

        <div className="stats">
          <div>
            <strong>60</strong>
            <small>Days</small>
          </div>

          <div>
            <strong>1</strong>
            <small>Build / day</small>
          </div>

          <div>
            <strong>2</strong>
            <small>Proofs / day</small>
          </div>
        </div>

        <div className="feature">
          <span>🔥</span>
          <div>
            <h3>Build your streak</h3>
            <p>
              Show up every day and make consistency your superpower.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="page">
        <p className="eyebrow">GOOD EVENING 👋</p>

        <h1>Your challenge dashboard</h1>

        <div className="streak-card">
          <div>
            <small>Current streak</small>
            <strong>11 🔥</strong>
            <p>11 days of showing up.</p>
          </div>

          <div className="streak-ring">18%</div>
        </div>

        <section className="section">
          <div className="section-title">
            <h2>Day 12</h2>
            <span>12 / 60</span>
          </div>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>

          <p className="muted">48 days remaining</p>
        </section>

        <section className="task-card">
          <span className="tag">TODAY'S BUILD</span>

          <h2>Build a Student Profile Card</h2>

          <p>
            Create a responsive profile card using React with name,
            skills, GitHub link and social information.
          </p>

          <Link to="/day/12" className="primary-btn full">
            Open today's task →
          </Link>
        </section>

        <section className="achievement">
          <span>🏆</span>

          <div>
            <strong>Consistency unlocked</strong>
            <p>You've completed 11 consecutive days.</p>
          </div>
        </section>

        <section className="section">
          <div className="progress-row">
            <span>Completed</span>
            <strong>11 / 60</strong>
          </div>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>
        </section>
      </main>
    </>
  );
}

function ChallengeDay() {
  return (
    <>
      <Navbar />

      <main className="page">
        <Link to="/dashboard" className="back">
          ← Dashboard
        </Link>

        <div className="day-header">
          <span className="tag">DAY 12 OF 60</span>

          <h1>Build a Student Profile Card</h1>

          <p>
            Turn today's idea into a small project you can proudly
            share publicly.
          </p>
        </div>

        <section className="task-card">
          <h2>🎯 Your mission</h2>

          <p>
            Build a responsive student profile card using React.
            It should clearly show a student's name, profile image,
            skills and social links.
          </p>

          <h3>Must include</h3>

          <ul className="check-list">
            <li>✅ Student name and profile</li>
            <li>✅ At least 3 skills</li>
            <li>✅ GitHub profile link</li>
            <li>✅ Responsive mobile design</li>
          </ul>
        </section>

        {/* Actual Student Profile Card */}
        <section className="profile-section">
          <h2>Today's Build</h2>
          <ProfileCard />
        </section>

        <section className="proof-card">
          <div className="proof-heading">
            <span>1</span>

            <div>
              <h2>GitHub proof</h2>
              <p>Share your repository or today's commit.</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Paste GitHub repository URL"
          />

          <button className="secondary-btn">
            Verify GitHub →
          </button>
        </section>

        <section className="proof-card">
          <div className="proof-heading">
            <span>2</span>

            <div>
              <h2>LinkedIn proof</h2>
              <p>Share your learning publicly.</p>
            </div>
          </div>

          <input
            type="text"
            placeholder="Paste LinkedIn post URL"
          />

          <button className="secondary-btn">
            Save LinkedIn post →
          </button>
        </section>

        <div className="tip">
          💡 <strong>Small win:</strong> Don't wait for perfect.
          Ship your version today and improve it tomorrow.
        </div>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/day/12" element={<ChallengeDay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;