var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
      <p>Here are a few example locations:</p>
      <ol>
        <li>
          <Link to='/?location=St.Petersburg'>St. Petersburg, Russia</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio, Brasil</Link>
        </li>
      </ol>
    </div>    
  );
}

module.exports = Examples;