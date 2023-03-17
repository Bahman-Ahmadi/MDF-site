function loadComponent(name, args) {
	eval(`${name}(${args.split(",")});`);
}

const loader = async (args) => {
	for(var el of document.body.childNodes) {el.hidden = true;}
	document.body.innerHTML += `<iframe src="dist/components/loader.html" frameborder="0" id="loader"></iframe>`;
	await sleep(args);
	document.getElementById('loader').remove();
	for(var el of document.body.childNodes) {el.hidden = false;}
};
const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
};

export {loadComponent, sleep};