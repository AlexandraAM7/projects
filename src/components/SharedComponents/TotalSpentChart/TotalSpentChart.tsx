import React, { useState } from "react";
import {
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Rectangle,
  ReferenceLine,
} from "recharts";
import { useProfileData } from "../../../hooks";
import { CustomTooltip } from "./CustomTooltip";
import chartIcon from "../../../images/Square_chart.svg";
import styles from "./TotalSpentChart.module.scss";
import { IYearlyChart } from "../../../interfaces";

const TotalSpentChart: React.FC = () => {
  const { data } = useProfileData();

  const { yearlySpent, totalSpentAmount, currency } = data;
  const [hoveredData, setHoveredData] = useState<IYearlyChart | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>
          <h2>Total Spent</h2>
          <h3>
            {currency}
            {totalSpentAmount}
          </h3>
        </div>
        <div className={styles.right}>
          <img src={chartIcon} alt="chartIcon" className={styles.chartIcon} />
        </div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={yearlySpent}>
            <XAxis
              tick={{ fontSize: 12, fill: "#a3aed0" }}
              axisLine={false}
              tickLine={false}
              dataKey="mon"
            />
            <Tooltip
              wrapperStyle={{ right: "40", left: "unset" }}
              cursor={{ fill: "transparent" }}
              content={CustomTooltip}
            />

            <Bar
              radius={8}
              dataKey="totalSpent"
              fill="#E9EDF7"
              barSize={34}
              activeBar={<Rectangle fill="#4318ff" />}
              onMouseEnter={(data) => setHoveredData(data as IYearlyChart)}
              onMouseLeave={() => setHoveredData(null)}
            />
            {hoveredData && (
              <ReferenceLine
                label={{
                  position: "insideRight",
                  value: `${currency}${hoveredData.totalSpent}`,
                  fill: "#4318ff",
                  fontSize: " 12px",
                }}
                y={hoveredData.totalSpent}
                strokeDasharray="7 7"
                stroke="#4318ff"
                isFront
              />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSpentChart;
