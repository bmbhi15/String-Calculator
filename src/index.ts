function add(numbers: string): number {
  numbers = numbers.replace(/\s/g, "");
  console.log(numbers);
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
