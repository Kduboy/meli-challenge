# Meli-challenge

-   Get all alerts
-   Filter by server name or description
-   Create new alerts
-   Get the server with the most ocurrency of alerts on the current month

### Endpoints

-   GET /alerts
-   GET /alerts/statistics
-   POST /alerts

### Request

### GET /alerts

| Name        | Type    | Description       | Mandatory | Type        |
| ----------- | ------- | ----------------- | --------- | ----------- |
| server      | string  | server name       | no        | query param |
| description | string  | description issue | no        | query param |
| offset      | numeric | skip alerts       | no        | query param |
| limit       | numeric | limit of alerts   | no        | query param |

Request example:

```sh
GET http://localhost:5000/alerts
Content-Type: application/json
```

```sh
GET http://localhost:5000/alerts?offset=0&limit=4
Content-Type: application/json
```

```sh
GET http://localhost:5000/alerts?server=Server1
Content-Type: application/json
```

```sh
GET http://localhost:5000/alerts?description=no-pingeable
Content-Type: application/json
```

```sh
GET http://localhost:5000/alerts?server=Server2&description=downtime
Content-Type: application/json
```

### GET /alerts/statistics

Request example:

```sh
GET http://localhost:5000/alerts/statistics
Content-Type: application/json
```

### POST /alerts

| Name        | Type   | Description           | Mandatory | Format                | Type       |
| ----------- | ------ | --------------------- | --------- | --------------------- | ---------- |
| server      | string | server name           | yes       | 'xxxx'                | body param |
| description | string | description issue     | yes       | 'ddddd'               | body param |
| created_at  | string | date of created alarm | yes       | 'hh-mm-ss-dd-mm-yyyy' | body param |
| server_type | string | type of server        | yes       | 'onprem/virtual'      | body param |

Request example:

```sh
POST http://localhost:5000/alerts
Content-Type: application/json
{
    "server": "Server4",
    "description": "S.O kernel warning",
    "created_at": "23-00-01-17-03-2020",
    "server_type": "onprem"
}
```

### Response

### GET /alerts

```sh
Status code: 200 OK
{
  "count": 19,
  "rows": [
    {
      "id": 10,
      "server": 7,
      "description": "S.O kernel warning",
      "createdAt": "2020-06-13T03:00:00.000Z",
      "updatedAt": "2020-05-15T12:16:10.000Z",
      "Server": {
        "name": "Server7"
      }
    },
    {
      "id": 9,
      "server": 7,
      "description": "borken cooler fan",
      "createdAt": "2020-06-12T03:00:00.000Z",
      "updatedAt": "2020-05-15T12:16:10.000Z",
      "Server": {
        "name": "Server7"
      }
    },
    {
      "id": 1,
      "server": 1,
      "description": "no-pingeable",
      "createdAt": "2020-06-05T03:00:00.000Z",
      "updatedAt": "2020-05-15T12:16:10.000Z",
      "Server": {
        "name": "Server1"
      }
    },
    {
      "id": 17,
      "server": 5,
      "description": "broken cooler fan",
      "createdAt": "2020-06-01T03:00:00.000Z",
      "updatedAt": "2020-05-15T12:16:10.000Z",
      "Server": {
        "name": "Server5"
      }
    }
  ]
}
```

### GET /alerts/statistics

```sh
Status Code: 200 OK
[
  {
    "total": 1,
    "Server": {
      "name": "Server2"
    }
  },
  {
    "total": 1,
    "Server": {
      "name": "Server3"
    }
  },
  {
    "total": 1,
    "Server": {
      "name": "Server6"
    }
  }
]
```

### POST /alerts

```sh
Status Code: 201 Created
{
  "id": 20,
  "server": 4,
  "description": "S.O kernel warning",
  "createdAt": "2020-03-18T02:00:01.000Z",
  "updatedAt": "2020-05-15T13:08:18.264Z"
}
```

### Before get started

-   Create .env file on backend directory with the following content

```sh
MYSQL_USER=root
MYSQL_ROOT_PASSWORD=secret
MYSQL_DATABASE=meli_challenge
MYSQL_DATABASE_TEST=meli_challenge_test
DB_HOST=meli_mysql
```

### Build the app

Open your terminal and run the following commands

```sh
$ cd meli-challenge/
$ docker-compose up --build
```

### Run tests

Open your terminal and run the following commands

```sh
$ docker ps
```

Backend

```sh
$ docker exec -it <containerId-meli_challenge_backend> /bin/bash
$ npm run test
```

Frontend

```sh
$ docker exec -it <containerId-meli_challenge_frontend> /bin/bash
$ npm run test
```

### Start the App

Open your browser on [http://localhost:3000/] and have fun!!!

[//]: #
[http://localhost:3000/]: http://localhost:3000/
