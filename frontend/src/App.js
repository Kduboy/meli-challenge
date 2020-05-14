import React from 'react';

import AlertFinder from './containers/AlertFinder/AlertFinder';
import Layout from './hoc/Layout/Layout';

const App = () => (
	<Layout data-test='component-layout'>
		<AlertFinder data-test='component-alert-finder' />
	</Layout>
);

export default App;
