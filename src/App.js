import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homepage/homepage.component";
import Details from "./pages/details/details.component.jsx";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      searchField: "",
      sortBy: "name",
    };
  }

  handleSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  handleSortByChange = (e) => {
    this.setState({ sortBy: e.target.value });
  };

  compareForSorting = (a, b) => {
    let criteria = this.state.sortBy;

    let userA = a[criteria].toLowerCase();
    let userB = b[criteria].toLowerCase();

    let comparison = 0;
    if (userA > userB) {
      comparison = 1;
    } else if (userA < userB) {
      comparison = -1;
    }
    return comparison;
  };

  retrieveData = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((users) => this.setState({ users: users }))
    );
  };

  componentDidMount() {
    this.retrieveData();
  }

  render() {
    const { users, searchField, sortBy } = this.state;

    const filteredUsers = users.filter((user) =>
      user[sortBy].toLowerCase().includes(searchField.toLowerCase())
    );

    filteredUsers.sort(this.compareForSorting);

    return (
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
                filteredUsers={filteredUsers}
                handleSearchChange={this.handleSearchChange}
                handleSortByChange={this.handleSortByChange}
              />
            )}
          />
          <Route path="/:id" component={Details} />
        </Switch>
      </div>
    );
  }
}
export default App;
