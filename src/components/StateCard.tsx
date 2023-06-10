"use clint";
import { Card,Metric,Text, Title ,Color} from "@tremor/react";
type Props = {
  title: string;
  matrics: string;
  color?: 
  |"gray"
  |"indigo"
  |"sky"
  |"red"
  |"green"
  |"rose"
  |"pink"
  |"purple"
  |"violet"
  |"cyan"
  |"orange"
  |"pink"
  |"lime"
  |"yellow"
  |undefined
};

function StateCard({title, matrics, color}:Props) {
  return <Card
  className="mt-4"
   decorationColor={color}
  decoration="top"
  >
    <Title>
        {title}
    </Title>
    <Metric>{matrics}</Metric>
  </Card>;
}

export default StateCard;
