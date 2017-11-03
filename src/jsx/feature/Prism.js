import React from "react";

// TODO: match all of space of first && last line
// TODO: match first line's space before first words and reduce it the same numbers of space as the follow line

// import "prismjs/themes/prism-coy.css"
import "prismjs/themes/prism-okaidia.css"
import Prismjs from "prismjs"
import { PropTypes } from "prop-types"



class PrismCode extends React.Component {

  // static propTypes = {
  //   async: PropTypes.bool,
  //   lang: PropTypes.string,
  //   children: PropTypes.any,
  //   component: PropTypes.node,
  // }
  //
  // static defaultProps = {
  //   component: `code`,
  // }
  //
  componentDidMount() {
    // console.log('componentDidMount');
    Prismjs.highlightAll()
    // this._hightlight()
  }
  //
  // componentDidUpdate() {
  //   this._hightlight()
  // }
  // componentDidUpdate(){
  //   Prismjs.highlightAll()
  // }

  // _hightlight() {
  //   Prism.highlightElement(this._domNode, this.props.async)
  // }

  // _handleRefMount = domNode => {
  //   this._domNode = domNode
  // }

  render() {
    const {children, lang ,lineHighlight, component: Wrapper} = this.props
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
