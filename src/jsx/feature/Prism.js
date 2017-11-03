import React from "react";

// TODO: match all of space of first && last line
// TODO: match first line's space before first words and reduce it the same numbers of space as the follow line

import { PropTypes } from "prop-types"

class PrismCode extends React.Component {
  static propTypes = {
    lang: PropTypes.string,
    lineHighlight: PropTypes.string,
    children: PropTypes.array
  }

  render() {
    const {children, lang, lineHighlight} = this.props
    let render = children.split('\n')
    render[0].length == 0 && render.shift()
    render[render.length - 1].split(' ').join("").length == 0 && render.pop()
    let PrSpace = render[0].match(/\S/).index
    render = render.map((col, i) => {
      return col.slice(PrSpace)
    })
    render = render.join("\n")
    return (
      <pre className='line-numberss' data-line={lineHighlight}>
        <code className={`language-${lang}`}>
          {render}
        </code>
      </pre>
    )
  }
}

export default PrismCode;
