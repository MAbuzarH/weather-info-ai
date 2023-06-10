"use client";

import { Card, Title, AreaChart } from "@tremor/react";

type Props = {
  result: Root;
};

function HumadityChart({ result }: Props) {
  const hourly = result?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(0, 24);

  const data =
    hourly && result.hourly
      ? hourly.map((hour, i) => ({
          time: Number(hour),
          "Humadity (%)": result.hourly.relativehumidity_2m?.[i] || 0,
        }))
      : [];

  const dataFormater = (number: number) => `${number} `;
  return (
    <Card>
      <Title>Humadity</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Humadity (%)"]}
        colors={["teal"]}
        minValue={0}
        maxValue={100}
        valueFormatter={dataFormater}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default HumadityChart;
