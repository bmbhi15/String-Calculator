function add(numbers: string): number {
  if (numbers === "") {
    return 0;
  }
  let delimiter = ",";
  if (numbers.startsWith("//")) {
    const firstNewLine = numbers.indexOf("\n");
    delimiter = numbers.substring(2, firstNewLine);
    numbers = numbers.substring(firstNewLine + 1);
  }
  numbers = numbers.replace(/\s/g, "");
  if (numbers === "") {
    return 0;
  }
  if (numbers.includes(delimiter)) {
    const nums = numbers.split(delimiter).map((num) => parseInt(num));
    const negatives = nums.filter((num) => num < 0);
    if (negatives.length > 0) {
      throw new Error(
        `Negative numbers are not allowed: ${negatives.join(",")}`
      );
    }
    return nums.reduce((sum, num) => sum + num, 0);
  }
  const num = parseInt(numbers);
  if (num < 0) {
    throw new Error(`Negatives not allowed: ${num}`);
  }
  return num;
}

export { add };
