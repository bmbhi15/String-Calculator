function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  if (numbers.includes(",")) {
    const nums = numbers.split(",").map((num) => parseInt(num));
    return nums.reduce((sum, num) => sum + num, 0);
  }
  return parseInt(numbers);
}

export { add };
