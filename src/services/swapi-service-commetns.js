
export default class SwapiService {

	// Поле называется с нижнего подчеркивания говорит о том, что это приватная часть класса
	// ее не следует использовать или изменять снаружи
	_apiBase = `https://swapi.co/api`;

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`could not Fetch ${url}` + 
			`, received ${res.status}`);
		}
		return await res.json();
	}

	async getAllPeople() {
		const res = await this.getResource(`/people/`);
		return res.results;
	}
	getPerson(id) {
		return this.getResource(`/people/${id}/`)
	}

	async getAllPlanets() {
		const res = await this.getResource(`/planets/`);
		return res.results;
	}
	getPlanet(id) {
		return this.getResource(`/planets/${id}/`)
	}

	async getAllStarships() {
		const res = await this.getResource(`/starships/`);
		return res.results;
	}
	getStarships(id) {
		return this.getResource(`/starships/${id}/`)
	}

}

const swapi = new SwapiService();

swapi.getPerson(3).then((p) => {
	console.log(p.name);
});
