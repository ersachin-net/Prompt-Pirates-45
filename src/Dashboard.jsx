import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <main className="page dashboard">

      <p className="eyebrow">GOOD EVENING 👋</p>

      <h1>Your challenge dashboard</h1>

      {/* Streak Card */}
      <div className="streak-card">
        <div>
          <small>Current streak</small>

          <strong>
            11 🔥
          </strong>

          <p>11 days of showing up.</p>
        </div>

        <div className="streak-ring">
          18%
        </div>
      </div>

      {/* Progress */}
      <section className="section">

        <div className="section-title">
          <h2>Day 12</h2>
          <span>12 / 60</span>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "20%" }}
          ></div>
        </div>

        <p className="muted">
          48 days remaining
        </p>

      </section>

      {/* Today's Build */}
      <section className="task-card">

        <span className="tag">
          TODAY'S BUILD
        </span>

        <h2>
          Build a Student Profile Card
        </h2>

        <p>
          Create a responsive profile card using React with
          name, skills, GitHub link and social information.
        </p>

        <Link
          to="/day/12"
          className="primary-btn full"
        >
          Open today's task →
        </Link>

      </section>

      {/* Achievement */}
      <section className="achievement">

        <span>🏆</span>

        <div>
          <strong>
            Consistency unlocked
          </strong>

          <p>
            You've completed 11 consecutive days.
          </p>
        </div>

      </section>

      {/* Progress */}
      <section className="section">

        <div className="progress-row">
          <span>Completed</span>
          <strong>11 / 60</strong>
        </div>

        <div className="progress">
          <div
            className="progress-fill"
            style={{ width: "18%" }}
          ></div>
        </div>

      </section>

    </main>
  );
}

export default Dashboard;