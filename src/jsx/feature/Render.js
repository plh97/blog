import React from "react";
import Prismjs from "prismjs"
import "prismjs/themes/prism-okaidia.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.js"
import "prismjs/plugins/line-highlight/prism-line-highlight.css"
import "prismjs/plugins/line-highlight/prism-line-highlight.js"
import "prismjs/components/prism-jsx.js"
import "prismjs/components/prism-json.js"
import "prismjs/components/prism-nginx.js"
import "prismjs/components/prism-go.js"
import "prismjs/components/prism-git.js"
import "prismjs/components/prism-vim.js"
class Render extends React.Component {
  componentDidUpdate(){
    Prismjs.highlightAll()
  }
  render() {
    const {children} = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}

export default Render;
