# Sprint 9 Pets App

This App mainly utilizes [MapBox Geocoding Places API](https://docs.mapbox.com/api/search/geocoding/), and [Mapbox's GL JS library](https://docs.mapbox.com/#maps) to allow users to retrieve sitters near your area. The Back-end is developed in Node and Express with MongoDB as the database. For Back-End Repo [click here](https://github.com/Juditsatu/sprint-9-server).

### [Deployed Link](https://pet-mimos.herokuapp.com/)
<br>

### [Presentation Link - Catalan ](https://www.canva.com/design/DAFQTgm_X6Y/8Bkh8PLT13pFbPGnbVBTGg/view?utm_content=DAFQTgm_X6Y&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu)
<br>

## **Preview**
## ![preview gif](src/assets/mimos-preview.gif)

---

## :wrench: **Tech used in this project**
Front-End: Angular with [Angular Material](https://material.angular.io/) is used for the front-end UI Components. Additional Frontend components include [Angular Flex Layout](https://github.com/angular/flex-layout) and [Keen-Slider](https://keen-slider.io/). I also extensively used Illustrator and Photoshop to create wireframe sketches for the web application's design.

Back-End: Node and Express comprise the backend, and the database is served with MongoDB. Other packages include [bcrypt.js](https://www.npmjs.com/package/bcryptjs), cors, [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken), [express-validator](https://express-validator.github.io/docs/), and [mongoose](https://www.npmjs.com/package/mongoose).

### Built With

![Angular](https://img.shields.io/badge/-Angular-C62828?style=flat-square&logo=angular)
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/-SCSS-black?style=flat-square&logo=sass)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-563D7C?style=flat-square&logo=bootstrap)
![TypeScript](https://img.shields.io/badge/-TypeScript-ffffff?style=flat-square&logo=typescript)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)
[![Express.JS][Express.js]][Expressjs-url]
[![Node.JS][Node.js]][Node-url]
[![MapBox][MapBox.com]][Mapbox-url]

### Tools used
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=postman&logoColor=white)
![Illustrator](https://img.shields.io/badge/Adobe%20Illustrator-FF9A00?style=flat-square&logo=adobe%20illustrator&logoColor=white)

### APIs Used: 
![TicketMaster](https://img.shields.io/badge/TicketMaster%20Discovery-0592CD?style=flat-square)
[![MapBox][MapBox-places]][Mapbox-url]

---

## :mortar_board: **What did I learn from this project**

In this project I learned how to obtain the user's location upon initialization and then allow for asynchronous calls to Mapbox's Geocoding Places API. Extensively, I learned how to develop within Mapbox's extensive library and thus implement custom map functions, overall map styling, and navigation controls.

Functional and aesthetic bootstrap template and the combination to [NG Bootstrap](https://ng-bootstrap.github.io/#/home) to add a responsive navbar and a calendar component.

Synchronize backend validations with the front-end.

---

<!-- ROADMAP -->
## Roadmap

- [ ] Add synchronous response with mapbox and sitters coords database.
- [ ] Favorites section in your account profile.
- [ ] Add CRUD for user.
- [ ] Add front-end validations in login and signup to avoid unnecessary back-end calls.
- [ ] Implement working calendar feature.
- [ ] Implement advanced filtering for the user's based on dates, location, and sitter options.
- [ ] Additional styling to Account.
- [ ] Implement more helpful UI features.
- [ ] Add more pets in filtering options: fishes, rodents and reptiles
- [ ] Refactor the code.


See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## :seedling: **Getting Started with this project**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Installation

Clone or fork the Repo, and ensure that you have the [Angular CLI](https://github.com/angular/angular-cli) installed.

In the project directory.

```bash
npm install
```

In the project directory.

```bash
ng serve --open
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)

[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=flat-square&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en//
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=flat-square&logo=svelte&logoColor=FF3E00

[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=flat-square
[Expressjs-url]: https://expressjs.com/en/guide/routing.html

[MapBox-places]: https://img.shields.io/badge/MapBox%20Places-000000?style=flat-square&logo=mapbox&logoColor=white
[MapBox.com]: https://img.shields.io/badge/MapBox-000000?style=flat-square&logo=mapbox&logoColor=white
[Mapbox-url]: https://www.mapbox.com/