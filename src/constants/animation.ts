type fade = {
  hidden: {},
  visible: {},
}


export const fadeLeft: fade = {
  hidden: { opacity: 0.5, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export const fadeRight: fade = {
  hidden: { opacity: 0.5, x: 100 },
  visible: { opacity: 1, x: 0 },
};






