import React from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";
import { useProfileData } from "../../../hooks";
import styles from "./MonthlyChart.module.scss";
import { renderTooltip } from "./renderTooltip";

const MonthlyChart: React.FC<{
  barsToDisplay: number;
  tooltipEnabled?: boolean;
  height?: number;
  barSize: number;
}> = (props) => {
  const { data } = useProfileData();
  const { barsToDisplay, tooltipEnabled = true, height = 50, barSize } = props;

  if (!data || !data.monthlySpent) {
    return <p>Loading...</p>;
  }
  const { monthlySpent } = data;
  const displayedData = monthlySpent.slice(-barsToDisplay);

  return (
    <div className={styles.chartWrapper}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={displayedData}>
          {tooltipEnabled && (
            <Tooltip cursor={{ fill: "transparent" }} content={renderTooltip} />
          )}
          <Bar
            radius={60}
            dataKey="totalSpent"
            fill="#4318FF"
            background={{ fill: "#E9EDF7", radius: 60 }}
            barSize={barSize}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyChart;
