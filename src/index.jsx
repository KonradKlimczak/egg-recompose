const { Component } = React;

const neverUpdate = (BaseComponent) =>
  class extends Component {
    shouldComponentUpdate() {
      return false;
    }
    render() {
      return <BaseComponent {...this.props} />;
    }
  }

const User = ({ name }) =>
  <div className="User">{ name }</div>;

const User2 = neverUpdate(User);

const App = () =>
  <div>
    <User name="Tim" />
    <User2 name="joe" />
  </div>;

ReactDOM.render(
  <App />,
  document.getElementById('main')
);