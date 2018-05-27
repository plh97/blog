const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class TypeWord {
  constructor({
    text,
    pauseTime,
    cycle,
    typeFunc,
  }) {
    this.cycle = cycle;
    this.text = text;
    this.typeFunc = typeFunc;
    this.pauseTime = pauseTime;

    this.init();
  }

  async init() {
    for (let i = 0; i < this.text.length; i += 1) {
      const { content, typeTime } = this.text[i];
      await this.typeWord({ content, typeTime });
      await sleep(this.pauseTime);
      if (i === 2 && this.cycle) {
        i = -1;
      }
    }
  }

  async typeWord({ content, typeTime }) {
    for (let i = 0; i < content.split('').length; i += 1) {
      this.typeLetter({
        content,
        i,
      });
      await sleep(typeTime);
    }
  }

  typeLetter({ content, i }) {
    this.typeFunc(content.slice(0, i + 1));
  }
}


export {
  TypeWord, // use with new
  sleep, // normal funciton
};
