import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import "./githubstats.scss";

const GithubStats = () => {
  const [contributions, setContributions] = useState(true);

  const selectYearContributions = (contributions) => {
    const targetYear = 2023;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const year = date.getFullYear();

      return year === targetYear;
    });
  };

  return (
    <div className="githubstats">
      <div className="container">
        <div className="top">
          <h1>GitHub Stats</h1>
          <h2>
            {/* GitHub Stats: Where I flex my coding prowess, Gen Z style 💻📊 */}
            Unveiling My GitHub Stats! 🔥💻
          </h2>
        </div>

        <div className="bottom">
          {contributions ? (
            <GitHubCalendar
              fontSize={14}
              blockMargin={7}
              blockRadius={3}
              blockSize={20}
              colorScheme="light"
              username="Suhaibusman"
              transformData={selectYearContributions}
              showWeekdayLabels={true}
              hideColorLegend
              labels={{
                totalCount: "{{count}} contributions in the year 2023",
              }}
            />
          ) : (
            <span className="spanError">
              Sorry, there was an error loading the stats. Please try again
              later. 😔
            </span>
          )}
        </div>
      </div>
      <div className="lessmore">
        <span className="less">Less</span>
        <div className="boxes">
          <span className="box1" />
          <span className="box2" />
          <span className="box3" />
          <span className="box4" />
        </div>

        <span className="more">More</span>
      </div>
    </div>
  );
};

export default GithubStats;
