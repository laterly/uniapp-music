// const env = 'dev';  
const env = 'prod';
let mUrl = ({
	dev: '/m',
	prod: 'http://m.kugou.com'
})[env];
let aUrl = ({
	dev: '/aproxy',
	prod: 'http://mobilecdn.kugou.com'
})[env];
let wwwapiUrl = ({
	dev: '/wwwapi',
	prod: 'http://wwwapi.kugou.com'
})[env];

let msearchcdnUrl = ({
	dev: '/msearchcdn',
	prod: 'http://msearchcdn.kugou.com'
})[env];

let mobilecdnbjUrl = ({
	dev: '/mobilecdnbj',
	prod: 'http://mobilecdnbj.kugou.com'
})[env];

let mobileserviceUrl = ({
	dev: '/mobileservice',
	prod: 'http://mobileservice.kugou.com'
})[env];
export {
	mUrl,
	aUrl,
	wwwapiUrl,
	msearchcdnUrl,
	mobilecdnbjUrl,
	mobileserviceUrl
}
