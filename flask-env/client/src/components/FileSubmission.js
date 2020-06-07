import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class FileSubmission extends Component {
    //   constructor(props) {
    //     super(props);

    //     this.state = {
    //       file: "",
    //     };

    //     this.handleUpload = this.handleUpload.bind(this);
    //   }

    //   handleUpload(e) {
    //     e.preventDefault();

    //     const data = new FormData();
    //     data.append("file", this.uploadInput.files[0]);
    //     data.append("filename", this.fileName.value);

    //     fetch("/api/upload/", {
    //       method: "POST",
    //       body: data,
    //     }).then((response) => {
    //       //   response.json().then((body) => {
    //       //     this.setState({ file: `http:///${body.file}` });
    //       //   });
    //       console.log(response.json());
    //     });
    //   }
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
        };
    }

    onChangeHandler = (e) => {
        this.setState({
            selectedFile: e.target.files[0],
            loaded: 0,
        });
    };

    onClickHandler = () => {
        const data = new FormData();
        data.append("file", this.state.selectedFile);

        fetch("/api/upload/", {
            method: "POST",
            body: data,
        }).then((res) => {
            console.log(res.json());
        });
    };

    render() {
        return (
            //   <form onSubmit={this.handleUpload}>
            //     <div>
            //       <input
            //         ref={(ref) => {
            //           this.uploadInput = ref;
            //         }}
            //         type="file"
            //       />
            //     </div>
            //     {/* <div>
            //       <input
            //         ref={(ref) => {
            //           this.fileName = ref;
            //         }}
            //         type="text"
            //         placeholder="Enter the desired name of file"
            //       />
            //     </div> */}
            //     <br />
            //     <div>
            //       <button>Upload</button>
            //     </div>
            //     {/* <img src={this.state.imageURL} alt="img" /> */}
            //   </form>
            <Container>
                {/* Stack the columns on mobile by making one full-width and the other half-width */}
                <Row className="justify-content-md-center" style={{ marginTop: 100 }}>
                    <Col md="auto">
                            <input type="file" name="file" onChange={this.onChangeHandler}/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center" style={{ marginTop: 30 }}>
                    <Col md="auto">
                            <Button
                                size="lg"
                                variant="dark"
                                onClick={this.onClickHandler}
                            >
                                Complete upload
                            </Button>
                    </Col>
                </Row>

            </Container>

        );
    }
}

export default FileSubmission;
