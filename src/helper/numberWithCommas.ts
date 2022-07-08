function numberWithCommas(num: string | number) {
  return num ? num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
}

export { numberWithCommas };
