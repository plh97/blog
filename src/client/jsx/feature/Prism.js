import React from 'react';

class PrismCode extends React.Component {
  render() {
    const { children, lang, lineHighlight } = this.props;
    let render = children.split('\n');
    render[0].length == 0 && render.shift();
    render[render.length - 1].split(' ').join('').length == 0 && render.pop();
    const PrSpace = render[0].match(/\S/).index;
    render = render.map((col, i) => col.slice(PrSpace));
    render = render.join('\n');
    return (
      <pre className="line-numbers" data-line={lineHighlight}>
        <code className={`language-${lang}`}>
          {render}
        </code>
      </pre>
    );
  }
}

export default PrismCode;
