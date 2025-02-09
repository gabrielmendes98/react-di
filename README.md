# React Dependency Injection

This project was created as a POC to the new architecture of a real project that
I was working on. The project was already created, but the architecture was not
good enough, so we decided to create a new one. Our requirements was:

1. Our project was a web component inside a legacy project, so we couldn't use
   real routing, like changing the full page url, so we needed to create a
   router that could be used inside the web component.
2. We should be able to use both TS and JS in the same project. Because the
   legacy project was using JS and the new one will be using TS, we needed to
   find a way to use both in the same project.
3. We needed to create a new architecture that could be easily integrated with
   the legacy project.
4. We should have feature toggles to easily enable/disable new features.
5. We needed to decouple the code as much as possible to make it easier to
   maintain and extend.

## Architecture Layers

The project is organized into four distinct layers:

### Domain Layer

The Domain Layer is responsible for defining the application's domain objects.
Here you can find the central entities, repository interfaces and fundamental
business logic that reflects the system's rules.

### Application Layer

The Application layer takes responsibility for implementing the business logic
of the application. It uses the domain objects defined in the Domain layer to
create the use cases and interactions that represent the core functionality of
the application.

### Infrastructure Layer

The Infrastructure layer plays a crucial role in application orchestration.
Here, the business logic of the Application layer is combined with real-world
services such as APIs and storage. In addition, the Infrastructure layer
converts domain objects into understandable objects for data sources and vice
versa.

### Routing Layer

The Routing layer handles user navigation and routing. It is responsible for
forwarding user requests to the appropriate controllers in the other layers,
thus initiating the flow of application functionality.

## Folder Structure

The folder structure adopted in the project is designed to reflect the
organization of different layers of the architecture. This promotes clarity and
facilitates the location of different parts of the code.

- **Domain**: In this folder, the domain objects are defined, such as entities
  and repository interfaces.

- **Hooks**: This folder is where the business logic is implemented. It uses the
  Data layer to search for data from external sources, such as APIs or storages,
  and creates the necessary use cases for the Application layer.

- **Data**: This layer is responsible for integrating with external services,
  such as APIs and storages. It also performs the conversion between the domain
  objects and the formats of data required by the external sources.

- **Container**: This folder is responsible for orchestrating the business rules
  and the logic of presenters. It uses the Hooks from the Application layer and
  provides the necessary dependencies for the controllers.

- **Presenters**: This folder contains the UI components. They are focused
  exclusively on visual presentation and do not contain business logic.

- **Routes**: This folder acts as the entry point of the application. It calls
  the appropriate containers for the defined routes, starting the flow of
  functionalities.

<pre>
├── src
│   ├── api
│   ├── components
│   ├── commons
│   ├── features
│   │   ├── feat1
│   │   │   ├── container
│   │   │   ├── data
│   │   │   ├── domain
│   │   │   ├── hooks
│   │   │   └── presenters
│   │   ├── feat2
│   │   ├── ...
│   ├── routes
├── public
│   ├── index.html
│   └── manifest, etc.
└── config.files
</pre>

## Architecture

<img src="./resources/layers.jpg" width="300" />
<img src="./resources/architecture.jpg" />

## Features

- Routing without changing routes
- Automatic breadcrumb
- Tslint and Eslint
- TS and JS in the same project
- TS Config + Imports organizer
- Skeleton Loader
- Feature Toggle
