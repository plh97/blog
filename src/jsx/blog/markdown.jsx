import React from "react";
import { Grid, Row, Col, FormGroup, FormControl } from "react-bootstrap";
export default class MarkDown extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let val = e.target.value.split("\n");
    for (let i in val) {
      if (val[i].match(/={3}/) && i > 0) {
        val.splice(i, 1);
        val[i - 1] = <h1>{val[i - 1]}</h1>
      }else if (val[i].match(/-{3}/) && i > 0 ) {
        val.splice(i, 1);
        val[i - 1] = <h2>{val[i - 1]}</h2>
      }else if( val[i].match(/#{5}\s/) ) {
        val[i] = <h5>{val[i].replace(/#{5}\s/, "")}</h5>
      }else if( val[i].match(/#{4}\s/) ){
        val[i] = <h4>{val[i].replace(/#{4}\s/, "")}</h4>
      }else if( val[i].match(/#{3}\s/) ){
        val[i] = <h3>{val[i].replace(/#{3}\s/, "")}</h3>
      }else if( val[i].match(/##\s/) ){
        val[i] = <h2>{val[i].replace(/#{2}\s/, "")}</h2>
      }else if( val[i].match(/#\s/) ){
        val[i] = <h1>{val[i].replace(/#\s/, "")}</h1>
      }
    }
    val = val.map((num, i) =>
      <div key={i}>{num}</div>
    );
    this.setState({ value: val });
  }
  render() {
    return (
      <Grid className="container-context">
        <Row>
          <h1>&nbsp;</h1>
          <Col xs={6}>
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                rows="20"
                onChange={this.handleChange}
                componentClass="textarea"
                placeholder={"to write something...\n## such as\n#### Hello\ngreedisgood 999999\n-----\nwhosyourdaddy\n====="}/>
            </FormGroup>
          </Col>
          <Col xs={6}>
            {this.state.value}
          </Col>
        </Row>
      </Grid>
    );
  }
}

