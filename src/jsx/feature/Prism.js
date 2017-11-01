import React from "react";

// TODO: match all of space of first && last line
// TODO: match first line's space before first words and reduce it the same numbers of space as the follow line

import "prismjs/themes/prism-okaidia.css"
// import `prismjs/themes/prism-${innerWidth > 687 ? "okaidia.css" "coy.css"}` 

class Prism extends React.Component {
  render() {
    const {children, lang} = this.props
    let render = children.split('\n')
    render[0].length == 0 && render.shift()
    render[render.length - 1].split(' ').join("").length == 0 && render.pop()
    let PrSpace = render[0].match(/\S/).index
    render = render.map((col, i) => {
      return col.slice(PrSpace)
    })
    render = render.join("\n")
    return (
      <pre>
        <code className={`language-${lang}`}>
          {render}
        </code>
      </pre>
    )
  }
}

export default Prism;
