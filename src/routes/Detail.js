import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return <span>{"영화제목:   " + location.state.title + " 입니다."}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
