function horizontal(x) {
  return {
    initial: { opacity: 0, x: -x },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: x },
  };
}

function vertical(y) {
  return {
    initial: { opacity: 0, y: y },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: y },
  };
}

function scale(scale) {
  return {
    initial: { opacity: 0, scale: scale },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: scale },
  };
}

export { horizontal, vertical, scale };
