import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class ProfilePage extends Component {
  constructor() {
    super();
    this.state = {
      skill: null,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeHandler = (e) => {
    e.preventDefault();
    this.setState({
      skill: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("skill", this.state.skill);

    console.log(data);

    fetch("/api/predict/skills", {
      method: "POST",
      body: data,
    })
      .then((res) => {
        // console.log();
        const ret = res.json();
        // console.log(ret);
        return ret;
      })
      .then((data) => {
        this.setState({
          skill: data,
        });
      });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mb-5" style={{ marginTop: 30 }}>
          <Col className="mb-5">
            <form onSubmit={this.onSubmit}>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <div className="form-group col-md-4">
                    <label for="inputState">Skill</label>
                    <select
                      className="form-control"
                      onChange={this.onChangeHandler}
                    >
                      <option selected>Choose...</option>
                      <option>SQL</option>
                    </select>
                  </div>
                  <div>
                    <Button type="submit" size="sm" variant="success">
                      Find out more!
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ProfilePage;
