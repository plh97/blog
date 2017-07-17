import { AppContainer } from 'react-hot-loader'
import Layout from "./jsx/Layout.jsx"

ReactDOM.render(
  <AppContainer>
    <Layout/>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./jsx/Layout.jsx', () => {
    const NextApp = require('./jsx/Layout.jsx').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}