import React from "react";
import Contact from "../../components/contact/contact.component.jsx";
import Address from "../../components/address/address.component.jsx";
import Company from "../../components/company/company.component.jsx";
import PostList from "../../components/post-list/post-list.component.jsx";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      userDetails: {},
      userAddress: {},
      userCompany: {},
      userPosts: [],
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) =>
      res.json().then((json) =>
        this.setState(
          {
            userDetails: json,
            userAddress: json.address,
            userCompany: json.company,
          },
          () => {
            fetch(
              `https://jsonplaceholder.typicode.com/posts?userId=${id}`
            ).then((res) =>
              res.json().then((json) =>
                this.setState({
                  userPosts: json,
                })
              )
            );
          }
        )
      )
    );
  }

  render() {
    return (
      <div className="details-page">
        <div className="details__nav">
          <a href="/">Users</a>
          <span> &#8250; </span>
          <h2 className="details__nav--title">{this.state.userDetails.name}</h2>
        </div>

        <div className="details__info row row-cols-1 row-cols-lg-3 g-2">
          <div className="col">
            <Contact contact={this.state.userDetails} />
          </div>
          <div className="col">
            <Address address={this.state.userAddress} />
          </div>
          <div className="col">
            <Company company={this.state.userCompany} />
          </div>
        </div>

        <h2 className="details__posts-title">
          Posts by {this.state.userDetails.name}
        </h2>
        <PostList
          user={this.state.userDetails.name}
          posts={this.state.userPosts}
        />
      </div>
    );
  }
}
export default Details;
