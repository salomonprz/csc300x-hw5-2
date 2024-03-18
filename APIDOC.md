# jokebook API Documentation

## Endpoint 1 - Jokebook Categories

**Request Format:** 
None

**Request Type:** 
GET

**Returned Data Format:**
JSON Array

**Description:** 
This endpoint returns a list of possible categories in the jokebook.

**Example Request:**
GET /jokebook/categories

**Example Response:**
["funnyJoke", "lameJoke"]

**Error Handling:** 
N/A

---

## Endpoint 2 - Jokes in a Category

**Request Format:** 
Query Parameters: 
- category: string (required) - The category of jokes ('funnyJoke' or 'lameJoke')
- limit: number (optional) - Limit the number of jokes returned

**Request Type:** 
GET

**Returned Data Format:** 
JSON Array

**Description:** 
This endpoint returns jokes from the specified category. Optionally, it can limit the number of jokes returned.

**Example Request:** 
GET /jokebook/joke/funnyJoke?limit=2

markdown
Copy code

**Example Response:** 
[
{
"joke": "Why did the student eat his homework?",
"response": "Because the teacher told him it was a piece of cake!"
},
{
"joke": "What kind of tree fits in your hand?",
"response": "A palm tree"
}
]

**Error Handling:** 
If the specified category is not valid, it responds with:

{
"error": "no category listed for [category]"
}

---

## Endpoint 3 - Add a New Joke

**Request Format:** 
JSON Object with the following properties:
- category: string (required) - The category of the joke ('funnyJoke' or 'lameJoke')
- joke: string (required) - The joke text
- response: string (required) - The response to the joke

**Request Type:** 
POST

**Returned Data Format:** 
JSON Array (updated joke array)

**Description:** 
This endpoint adds a new joke to the specified category.

**Example Request:** 
POST /jokebook/joke/new
{
"category": "funnyJoke",
"joke": "Why don't scientists trust atoms?",
"response": "Because they make up everything!"
}
**Example Response:** 

Below is the APIDOC.md file with documentation for each endpoint of the jokebook API:

markdown
Copy code
# jokebook API Documentation

## Endpoint 1 - Jokebook Categories

**Request Format:** 
None

**Request Type:** 
GET

**Returned Data Format:**
JSON Array

**Description:** 
This endpoint returns a list of possible categories in the jokebook.

**Example Request:** 
GET /jokebook/categories

markdown
Copy code

**Example Response:**
["funnyJoke", "lameJoke"]

yaml
Copy code

**Error Handling:** 
N/A

---

## Endpoint 2 - Jokes in a Category

**Request Format:** 
Query Parameters: 
- category: string (required) - The category of jokes ('funnyJoke' or 'lameJoke')
- limit: number (optional) - Limit the number of jokes returned

**Request Type:** 
GET

**Returned Data Format:** 
JSON Array

**Description:** 
This endpoint returns jokes from the specified category. Optionally, it can limit the number of jokes returned.

**Example Request:** 
GET /jokebook/joke/funnyJoke?limit=2

markdown
Copy code

**Example Response:** 
[
{
"joke": "Why did the student eat his homework?",
"response": "Because the teacher told him it was a piece of cake!"
},
{
"joke": "What kind of tree fits in your hand?",
"response": "A palm tree"
}
]

vbnet
Copy code

**Error Handling:** 
If the specified category is not valid, it responds with:
{
"error": "no category listed for [category]"
}

yaml
Copy code

---

## Endpoint 3 - Add a New Joke

**Request Format:** 
JSON Object with the following properties:
- category: string (required) - The category of the joke ('funnyJoke' or 'lameJoke')
- joke: string (required) - The joke text
- response: string (required) - The response to the joke

**Request Type:** 
POST

**Returned Data Format:** 
JSON Array (updated joke array)

**Description:** 
This endpoint adds a new joke to the specified category.

**Example Request:** 
POST /jokebook/joke/new
{
"category": "funnyJoke",
"joke": "Why don't scientists trust atoms?",
"response": "Because they make up everything!"
}

markdown
Copy code

**Example Response:** 
[
{
"joke": "Why did the student eat his homework?",
"response": "Because the teacher told him it was a piece of cake!"
},
{
"joke": "What kind of tree fits in your hand?",
"response": "A palm tree"
},
{
"joke": "Why don't scientists trust atoms?",
"response": "Because they make up everything!"
}
]

**Error Handling:** 
If any of the required parameters are missing or the category is not one of 'funnyJoke' or 'lameJoke', it responds with:

{
"error": "invalid or insufficient user input"
}

