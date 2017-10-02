const { Component } = React;

const User = ({ name }) =>
  <div className="User">{ name }</div>;


const App = () =>
  <div>
    <User name="Tim" />
  </div>;

ReactDOM.render(
  <App />,
  document.getElementById('main')
);