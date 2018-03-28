import $ from '@pengliheng/jquery';
import './index.less';
import 'babel-polyfill';

const div = document.createElement('img');
div.src = 'https://user-images.githubusercontent.com/14355994/38042341-b39cb6dc-32e6-11e8-8a28-a184ab9dd8eb.png';

div.style.left = '10%';
div.style.top = '73.5%';
document.body.appendChild(div);

class Tiao {
  constructor(dom) {
    this.dom = dom;
    this.step = 0;
    this.map = [
      {
        x: '12', y: '91', to: 'right', func: x => (0.02 * x * (66 - x)) - 86,
      },
      {
        x: '43', y: '80', to: 'right', func: x => (0.02 * x * (136 - x)) - 150,
      },
      {
        x: '74', y: '70', to: 'left', func: x => (0.02 * x * (96 - x)) - 92,
      },
      {
        x: '42', y: '60', to: 'left', func: x => (0.02 * x * (46 - x)) - 46,
      },
      {
        x: '10', y: '53', to: 'right', func: x => (0.02 * x * (66 - x)) - 48,
      },
      {
        x: '42', y: '43', to: 'right', func: x => (0.02 * x * (136 - x)) - 110,
      },
      {
        x: '74', y: '35', to: 'left', func: x => (0.02 * x * (96 - x)) - 56,
      },
      {
        x: '42', y: '25', to: 'left', func: x => (0.02 * x * (46 - x)) - 10,
      },
    ];
  }
  moveRight() {
    this.dom.style.left = `${Number(this.dom.style.left.replace(/%/, '')) + 2}%`;
    const x = this.dom.style.left.replace(/%/, '');
    const y = this.map[this.step - 1].func(x);
    this.dom.style.top = `${-y}%`;
    setTimeout(() => {
      if (this.dom.style.left.replace(/%/, '') < this.map[this.step].x) {
        this.moveRight();
      }
    }, 20);
  }
  // 写的不错，只需要调整末尾数
  moveLeft() {
    this.dom.style.left = `${Number(this.dom.style.left.replace(/%/, '')) - 2}%`;
    const x = this.dom.style.left.replace(/%/, '');
    let y;
    if (this.step === 0) {
      y = this.map[this.map.length - 1].func(x);
    } else {
      y = this.map[this.step - 1].func(x);
    }
    this.dom.style.top = `${-y}%`;
    setTimeout(() => {
      if (this.dom.style.left.replace(/%/, '') > this.map[this.step].x) {
        this.moveLeft();
      }
    }, 20);
  }

  go({ step }) {
    const { to } = this.map[this.step];
    // 必须先将步数放在前面
    if (this.step >= this.map.length - 1) {
      this.step = 0;
    } else {
      this.step += step;
    }
    if (to === 'right') {
      this.moveRight();
    } else if (to === 'left') {
      this.moveLeft();
    }
  }
}
const tiao = new Tiao(div);
const action = ({ step, time }) => new Promise((resolve) => {
  setTimeout(() => {
    tiao.go({ step });
    resolve('');
  }, time);
});


$(document).ready(() => {
  const loop = async (time) => {
    await action({ step: 1, time });
    loop(time);
  };
  loop(800);
});

