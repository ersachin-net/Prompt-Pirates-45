import { Link } from "react-router-dom";

function Day12() {
  return (
    <main className="page day-page">

      {/* Back */}
      <Link to="/dashboard" className="back">
        ← Dashboard
      </Link>

      {/* Header */}
      <div className="day-header">

        <span className="tag">
          DAY 12 OF 60
        </span>

        <h1>
          Build a Student Profile Card
        </h1>

        <p>
          Turn today's idea into a small project you can
          proudly share publicly.
        </p>

      </div>

      {/* Mission */}
      <section className="task-card mission">

        <div className="mission-icon">
          🎯
        </div>

        <p>
          Build a responsive student profile card using React.
          It should clearly show a student's name, profile image,
          skills and social links.
        </p>

        <h3>
          Must include
        </h3>

        <ul className="check-list">

          <li>
            ✅ Student name and profile
          </li>

          <li>
            ✅ At least 3 skills
          </li>

          <li>
            ✅ GitHub profile link
          </li>

          <li>
            ✅ Responsive mobile design
          </li>

        </ul>

      </section>

      {/* GitHub */}
      <section className="proof-card">

        <div className="proof-heading">

          <span>1</span>

          <div>
            <h2>GitHub proof</h2>

            <p>
              Share your repository or today's commit.
            </p>
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

      {/* LinkedIn */}
      <section className="proof-card">

        <div className="proof-heading">

          <span>2</span>

          <div>
            <h2>LinkedIn proof</h2>

            <p>
              Share your learning publicly.
            </p>
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

      {/* Tip */}
      <div className="tip">
        💡 <strong>Small win:</strong> Don't wait for perfect.
        Ship your version today and improve it tomorrow.
      </div>

    </main>
  );
}

export default Day12;