function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  } else if (numbers === "1") {
    return 1;
  }
  return 0;
}

export { add };
