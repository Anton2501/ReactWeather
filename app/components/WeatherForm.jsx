var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function (event) {
    event.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0) {
      this.refs.location.value = '';
      this.props.onSearch(location);
    }

  },
  render: function () {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="search" placeholder="Search weather by city" ref="location"/>
        <button  className="button expanded hollow warning">Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;