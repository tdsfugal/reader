# Reader

The Reader system is a client/server pair that allows a user to read top stories from UK sites. It can potentially do more, but for now it is specialized to do only that.

#### Reader-app

The front-end server delivers a Gatsby react single-page app as static files for speed. The app contains an Apollo graphql client that gets content information by making queries to the back end server. The app is not particularly responsive, and may look a bit weird when rendered in odd sizes. Also, as development was a quick effort, the server is not production quality. As gatsby development is extremely interactive there was no need to generate an extensive set of tests for regression analysis, or a message queue to a back-end error log.

#### Reader-gql

The back-end server is an Apollo GraphQL Server that hits endpoints on the newsapi.com site to resolve queries from the front-end. Corners were cut here too, as there are few tests, and the logging is sub-par. However, it works and did not take too long to build.

#### Monorepo

Both servers were developed in a Lerna monorepo to keep the graphql interfaces synchronized.

## Setup

The target machine for setup should have [GIT](https://git-scm.com/), [Docker](https://www.docker.com/), [Node](https://nodejs.org/en/), and [Yarn](https://yarnpkg.com/) installed globally. Presumably, the reviewer's machines will be set up with these packages already. If not, then install them. Also, these instructions assume a linux/unix machine. The software will run on a Windows machine but the "use" instructions will be different and some of the scripts will have to be re-written.

## Use

Clone the repo to begin.

```bash
$ git clone https://github.com/tdsfugal/reader.git
$ cd reader
```

Install the dependencies with Lerna

```bash
$ lerna bootstrap
```

Start the back-end server first. Navigate into the reader-gql folder and use the start script with a newsApi AppKey (provided). This starts the service in a docker container that listens on port 4000. Once it is started you can make queries with GraphiQL by bringing up "localhost:4000" in a browser.

```bash
$ cd packages/reader-gql
$ source start.sh <newsapi AppKey>
```

Navigate up and over to the reader-app folder, then build and start the app server. Alternately, you can start it in develop mode with "yarn dev", however this is not quite as solid an experience.

```bash
$ cd ../reader-app
$ yarn build
$ yarn serve
```

Next, open "localhost:9000" (or "localhost:8000" if in dev mode) in a browser. Enjoy!
