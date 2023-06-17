declare module 'react-burger-menu' {
    import { Component } from 'react';
  
    export type MenuStyles = {
      bmBurgerButton?: React.CSSProperties;
      bmBurgerBars?: React.CSSProperties;
      bmCrossButton?: React.CSSProperties;
      bmCross?: React.CSSProperties;
      bmMenuWrap?: React.CSSProperties;
      bmMenu?: React.CSSProperties;
      bmMorphShape?: React.CSSProperties;
      bmItemList?: React.CSSProperties;
      bmItem?: React.CSSProperties;
      bmOverlay?: React.CSSProperties;
    };
  
    export interface MenuProps {
      isOpen?: boolean;
      onStateChange?: (state: { isOpen: boolean }) => void;
      width?: number | string;
      styles?: MenuStyles;
      customBurgerIcon?: React.ReactNode;
      customCrossIcon?: React.ReactNode;
      pageWrapId?: string;
      outerContainerId?: string;
      disableAutoFocus?: boolean;
      noOverlay?: boolean;
      id?: string;
    }
  
    export default class Menu extends Component<MenuProps> {}
  }
  
  