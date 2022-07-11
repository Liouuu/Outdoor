import React, { Suspense, lazy } from 'react';
import Loading from './pages/loading.jsx';

function createMathParams(path) {
	if(path === '*') {
		return {
			isMatched: path === '*',
			params: {},
		};
	}
	try {
		let reText = path.replace(/:(.*)/g, (g, i) => `(?<${i}>(.*))`);
		let re = new RegExp(`^${reText}$`);
		let reResult = re.exec(window.location.pathname);
		let isMatched = !!reResult;
		return {
			isMatched: !!reResult,
			params: isMatched ? reResult.groups : {},
		};
	} catch(err) {
		console.log(err);
		return {
			isMatched: path === '*',
			params: {},
		};
	}
}

class AppRouter extends React.Component {

	constructor(props) {
		super(props);
		this.hasMatched = false;
	}

	renderMatched() {
		const Tag = this.matchedTag;
		return <Tag key={this.matchedKey} match={{params: this.matchedParams}} ref={node=>this.page=node}>
		</Tag>
	}

	loadRoute(route, index, params) {
		this.matchedKey = index;
		this.hasMatched = true;
		let isRoutingChanged = this.matchedRoute !== route;
		this.matchedRoute = route;
		this.matchedParams = params;
		if(isRoutingChanged) {
			this.matchedTag = lazy(this.props.loaders[this.matchedRoute.componentKey]);
		} else {
			if(this.page) {
				this.page.reload && this.page.reload();
			}
		}
	}

	render() {
		return (<React.Fragment>
			<Suspense fallback={<Loading/>}>
				{
					this.props.entries.map((route, index) => {
						if(this.hasMatched) {
							return <React.Fragment key={index}/>
						}
						let reResult = createMathParams(route.path);
						if(reResult.isMatched) {
							this.loadRoute(route, index, reResult.params);
							return this.renderMatched();
						} else {
							return <React.Fragment key={index}>
							</React.Fragment>
						}
						
					})
				}
			</Suspense>
		</React.Fragment>);
	}
}

export default AppRouter;
