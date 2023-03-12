export interface MenuItem {
  name: string;
  linkTo: string;
}

export interface ProductItem {
  // figure: object | string;
  id: string;
  figure: string | undefined | any;
  capacity: number;
  animation: string;
  puissance: number,
  tension: {
    AC: number,
    DC: number,
  },
  poid: number,
  guaranty:number,
  taux: number[],
  price: number[],
  power: number,
  battery: {
    voltage: number,
    current: number,
  },
  fadeAnim: string,
}