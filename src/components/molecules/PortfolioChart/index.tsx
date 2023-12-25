import usePortfolios from "@/context";
import { FC } from "react";
import Chart from "react-google-charts";

export const PortfolioChart: FC = () => {
  const { chartData } = usePortfolios();

  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      width={"100%"}
      height={"400px"}
    />
  );
};
