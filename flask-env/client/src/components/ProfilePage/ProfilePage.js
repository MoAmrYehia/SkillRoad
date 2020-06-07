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

  onSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("skill", e.target);

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
        console.log(data);
      });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mb-5" style={{ marginTop: 30 }}>
          <Col className="mb-5">
            <form onSubmit={this.onSubmit}>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <div class="form-group col-md-4">
                    <label for="inputState">Skill</label>
                    <select id="inputState" class="form-control">
                      <option selected>Choose...</option>
                      <option>SQL</option>
                    </select>
                  </div>
                  <Button size="sm" variant="success" href="/profile">
                    Find out more!
                  </Button>
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
