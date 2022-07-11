import React from 'react';
import ErrorView from './pages/error_view.jsx';
import AppRouter from './app_router.jsx';
import Routes from './routes.js';

class Root extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  static getDerivedStateFromError(error) {
    return {
        hasError: true,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.error = error;
    this.errorInfo = errorInfo;
    this.forceUpdate();
  }

  renderErrorView() {
    const {
        error,
      } = this;
    return <ErrorView error={error}/>
  }

  renderView() {
    return <AppRouter
      history={this.props.browserHistory}
      entries={Routes.Entries}
      loaders={Routes.Loaders}
      ref={node=>this.router=node}
    />;
  }

  update() {
    if(this.router) {
      this.router.update();
    }
  }

  render () {
    return <React.Fragment>
    {
      this.state.hasError ?
      this.renderErrorView() :
      this.renderView()
    }
    </React.Fragment>;
  }

}

export default Root;
