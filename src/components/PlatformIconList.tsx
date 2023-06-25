import { BsGlobe } from 'react-icons/bs';
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import { HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { IconType } from 'react-icons';

interface Props {
  platfroms: Platform[];
}
const PlatformIvonList = ({ platfroms }: Props) => {
  const icomMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack marginY={1}>
      {platfroms.map((platform) => (
        <Icon as={icomMap[platform.slug]} color='gray.500' />
      ))}
    </HStack>
  );
};

export default PlatformIvonList;
