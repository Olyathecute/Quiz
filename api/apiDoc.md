# Basic local Quiz Api
Edit quizData to create your own quizzes

## how to run
1. npm i 
2. node index.js

## Base local url: http://localhost:7777
<br>

# API description

**All Quizzes**
----
  Returns json data about all available quizzes.

* **URL**

  /all

* **Method:**

  `GET`


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```js
    [
        {
            "id": 1,
            "name": "Квиз пример",
            "description": "какое-то описание квиза",
            "picture": "ссылка куда-нибудь",
            "questionsCount": 3
        },
        ...
    ]
    ```
 
 **Start quiz**
----
  Returns first quiz question.

* **URL**

  /start/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]` - quiz id want you want to start

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```js
    {
        "type": "chooseOne", // also chooseMany and match are available
        "text": "Пример вопроса с 1 вариантом ответа",
        "choices": [
            "1",
            "false",
            "fdsa",
            "right choice"
        ],
        "value": 1,
        "id": 0
        "strict": false // available only for chooseMany and match
                        // if true one mistake will result in 0 score
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />


**Answer a question**
----
  return a score of an answer and the next question if such exists

* **URL**

  /answer

* **Method:**

  `POST`

* **Body Params**

  **Required:**
    * quizId
    * questionId
    * answer - string for chooseOne, array of srtings for chooseMany, object for match

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```js
    {
        "score": 0, // calculated score for sent answer
        "next": {   // next question, null if there is none
            "type": "match",
            "text": "Пример вопроса сопоставления",
            "choiceLeft": [ // this should be key in answer object
                "1",
                "2",
                "3"
            ],
            "choiceRight": [ // this should be value in answer object
                "r1",
                "r2",
                "r3"
            ],
            "strict": true,
            "value": 3,
            "id": 2
        }
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
  * **Message:** some message with error description