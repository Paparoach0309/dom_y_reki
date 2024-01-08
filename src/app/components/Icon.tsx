import IcoMoon from 'react-icomoon';
import iconSet from '../../selection.json';
import { JSXElementConstructor, SVGProps } from 'react';

export interface IconProps extends SVGProps<SVGElement> {
  icon: string;
  size?: string | number;
  title?: string;
  disableFill?: boolean;
  removeInlineStyle?: boolean;
  native?: boolean;
  SvgComponent?: JSXElementConstructor<any>;
  PathComponent?: JSXElementConstructor<any>;
}

export const Icon = (props: IconProps) => <IcoMoon iconSet={iconSet} {...props} />;
