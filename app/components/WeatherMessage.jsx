var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h4>It's it {temp} C in {location}</h4>
  );
}

module.exports = WeatherMessage;