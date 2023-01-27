# Cheers by Beast Code

Cheersy is an app to help the evening enthusiast better find a watering-hole.  The main aim of the app is to help the user find bars of their specifications in a chosen location or area.  The main functionality is the user puts a location into the search input and receives a list back of bars from this area, they then can refine this search to their more specific requirements on the results page based on interests and tastes.

## Authors

- [Faseeh Ahmed](https://github.com/faseehahmed1)
- [Remi Akinfoyeku](https://github.com/remiyeku)
- [Suzi Clark](https://github.com/Suzi-Clark)
- [Rhona Mackay](https://github.com/rhonamackay)
- [Greg Rutnam](https://github.com/gregrutnam)
- [Keira Stanley](https://github.com/keirastanley)
## Feedback

If you have any feedback, please reach out to us at socmonth@gmail.com


## Tech Stack

**Client:** React, Typescript, CSS, Vercel, Next.js, React.js

**Server:** Node, Express, MongoDB, Leaflet


## API Reference

#### Get by coordinates

```http
  GET /api/router/:coords
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `coords` | `string` | Get all items within user's  location |

#### Get item by id

```http
  GET /api/router/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Get all

```http
  GET /api/router/
```

#### Get by coordinates and filter queries

```http
  POST /api/router/:coords
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `coords` | `string` | Queries entered in the body.  For example see object below: | 
 
 ```
 {
    "queryFilters": [
        {
            "category": "Rating",
            "options": [
                4
            ]
        },
        {
            "category": "Venue_type",
            "options": [
                "Cafe Bar",
                "Pub"
            ]
        }
    ]
}
```