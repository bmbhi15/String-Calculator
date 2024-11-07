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
    return nums.reduce((sum, num) => sum + num, 0);
  }
  return parseInt(numbers);
}

export { add };
