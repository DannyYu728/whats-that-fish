# What's that Fish?

Have you ever been in a sushi restaurant and wonder what kind of fishes you were eating? Well now you don't have to! Using this API, you can search the name of the fish and it will give you a picture to compare it to as well as other information you need to know related to food.

---

### API GET Endpoints

#### Request with no parameters

```
localhost:3000/
or
localhost:3000/fishes
```

##### Response:

```
[
    {
        "_id": "6350a3749d270e2a723ef741",
        "speciesName": "Greater Amberjack",
        "altName": "Kanpachi",
       ...
    },
    {
        "_id": "6350a3749d270e2a723ef724",
        "speciesName": "Spanish Mackerel",
        "altName": "Sawara",
       ...
    },
    ...
]
```

#### Request with a species parameter either by id or the species name

<sub>If searching by name, add %20 for space if there is more than 1 word.</sub>

```
localhost:3000/fishes/id/6350a3749d270e2a723ef724
localhost:3000/fishes/name/Spanish%20Mackerel
```

##### Response:

```
    {
        "_id": "6350a3749d270e2a723ef724",
        "speciesName": "Spanish Mackerel",
        "altName": "Sawara",
       ...
    }
```

##### Object Content:

```
[
    {
        "_id": " ",
        "speciesName": " ",
        "altName": " ",
        "calories": " ",
        "color": " ",
        "totalFat": " ",
        "protein": " ",
        "servingWeight": " ",
        "taste": " ",
        "texture": " ",
        "imgUrl": " ",
        "__v": number,
    }
]
```

---

### The rest of the CRUD's function

#### To create:
 <sub>Use the end point below and an API platform such as Postman. Make sure to switch to the body, and select raw and JSON.</sub>

```
localhost:3000/fishes/
```

#### Update, or Delete,
 <sub>Use the ID endpoint and an API platform such as Postman. Make sure to add Content-type to the key field and application/json to value in the Header.</sub>

```
localhost:3000/fishes/id/6350a3749d270e2a723ef724
```

---
#### TO-DO-List
1. Replace all null with relavant information
2. Add more seafood related to sushi
3. Add more pictures

---
#### Credits and Acknowledgements:

- [Fish Watch API](https://www.fishwatch.gov/developers)
- [Filter method by Siva K V from Stack Overflow](https://stackoverflow.com/questions/71756525/remove-specific-words-from-a-string-in-an-efficient-way)
