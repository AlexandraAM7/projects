import { TooltipProps } from "recharts";
import styles from "./MonthlyChart.module.scss";

export const renderTooltip = ({
  active,
  payload,
}: TooltipProps<number, string>) => {
  if (active && payload && payload.length > 0) {
    const { totalSpent } = payload[0].payload;

    return (
      <div className={styles.tooltip}>
        <p>Spent: ${totalSpent}</p>
      </div>
    );
  }
  return null;
};
