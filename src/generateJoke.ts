class sum {
  #num1: number = 0;
  #num2: number = 0;

  constructor(num1: number, num2: number) {
    this.#num1 = num1;
    this.#num2 = num2;
  }

  total() {
    return this.#num1 + this.#num2;
  }

  kurang() {
    return this.#num1 - this.#num2;
  }

  kali() {
    return this.#num1 * this.#num2;
  }

  bagi() {
    return this.#num1 / this.#num2;
  }

  get num1() {
    return this.#num1;
  }

  set setNum1(newNum: number) {
    this.#num1 = newNum;
  }

  get num2() {
    return this.#num2;
  }
}

export default sum;
