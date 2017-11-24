var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h4>It's {temp}&#8451; in {location}</h4>
  );
}

module.exports = WeatherMessage;