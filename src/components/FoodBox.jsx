import React, { Component } from "react";
import "../styles/FoodBox.css";

class FoodBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      id: -1,
      totalCal: 0,
    };
  }

  handleChange = (e, id) => {
    this.setState({
      count: e,
      id: id,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      totalCal: this.props.food.cal * this.state.count,
    });
  };

  handleReset = (e) => {
    e.preventDefault();
    this.setState({
      count: 0,
      id: -1,
      totalCal: 0,
    });
  };

  render() {
    return (
      //   <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.food.img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.food.name}</strong> <br />
                <small>{this.props.food.cal} cal</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  placeholder="Enter a number here"
                  onChange={(e) =>
                    this.handleChange(e.target.value, this.props.food.id)
                  }
                  min={0}
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={this.handleSubmit}>
                  +
                </button>
              </div>
            </div>
          </div>
          <h3>{`${this.state.count}  ${this.props.food.name} = ${this.state.totalCal} calories`}</h3>
          <button className="button-reset" onClick={this.handleReset}>
            reset
          </button>
        </article>
      </div>
      //   </div>
    );
  }
}

export default FoodBox;
