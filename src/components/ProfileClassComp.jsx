import React from "react";
import UserContext from "../utils/UserContext";

class ProfileClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "dunny",
        location: "xyz",
        company: "abc",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/rajcse1721");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("this is component uypsate ");
  }

  componentWillUnmount() {
    console.log("unmount");
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ user }) => (
            <h4>
              {user.name} --- {user.email}
            </h4>
          )}
        </UserContext.Consumer>
        <h1>Hello {this.state.userInfo.name} :</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Location:{this.state.userInfo.location}</h2>
        <h3>Company:{this.state.userInfo.company}</h3>
        <h3>Bio:{this.state.userInfo.bio}</h3>
        <h5>this is class component </h5>
        <h2>Count : {this.state.count}</h2>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          SetCount
        </button>
      </div>
    );
  }
}

export default ProfileClassComp;
