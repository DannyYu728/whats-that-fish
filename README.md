# What's that Fish?

Have you ever been in a sushi restaurant and wonder what kind of fishes you were eating? Well now you don't have to! Using this API, you can search the name of the fish and it will give you a picture to compare it too as well as other information you need to know for your diet.

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

To create, update, or delete, use the ID endpoint and an API platform such as Postman

```
localhost:3000/fishes/id/6350a3749d270e2a723ef724
```

---
##### TO-DO-List
1. Replace all null with relavant information
2. Add more seafood related to sushi
3. Add more pictures

---
#### Credits and Acknowledgements:

- [Fish Watch API](https://www.fishwatch.gov/developers)
- [Filter method by Siva K V from Stack Overflow](https://stackoverflow.com/questions/71756525/remove-specific-words-from-a-string-in-an-efficient-way)
