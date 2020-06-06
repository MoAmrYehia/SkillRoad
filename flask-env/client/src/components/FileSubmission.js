import React, { Component } from "react";

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
      console.log(res.statusText);
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
      <div>
        <input type="file" name="file" onChange={this.onChangeHandler} />
        <button
          type="button"
          class="btn btn-success btn-block"
          onClick={this.onClickHandler}
        >
          Upload
        </button>
      </div>
    );
  }
}

export default FileSubmission;
