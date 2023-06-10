"use client";

import { Card, Title, AreaChart } from "@tremor/react";

type Props = {
  result: Root;
};

function TempChart({ result }: Props) {
  const hourly = result?.hourly.time
    .map((time) =>
      new Date(time).toLocaleString("en-US", {
        hour: "numeric",
        hour12: false,
      })
    )
    .slice(1, 25);

  const data =
    hourly && result.hourly
      ? hourly.map((hour, i) => ({
          time: Number(hour),
          "UV Index": result.hourly.uv_index?.[i] || 0,
          "Temperature (C)": result.hourly.temperature_2m[i],
        }))
      : [];

  const dataFormater = (number: number) => `${number} `;
  return (
    <Card>
      <Title>Tempreature and VU index</Title>
      <AreaChart
        className="mt-6"
        data={data}
        showLegend
        index="time"
        categories={["Temperature (C)", "VU Index"]}
        colors={["yellow", "rose"]}
        minValue={0}
        valueFormatter={dataFormater}
        yAxisWidth={40}
      />
    </Card>
  );
}

export default TempChart;
