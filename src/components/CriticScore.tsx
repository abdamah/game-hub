import { Badge } from '@chakra-ui/react';
import React from 'react';

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <Badge fontSize='14px' borderRadius='4px' paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
