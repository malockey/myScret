# Lab Project MyScret

## Requirements

### API Features

 - [ ] The user should create an account with email and password.
 - [ ] The user should update their profile, only their name and picture.
 - [ ] The user should authenticate in the account.
 - [ ] The user should create a question.
 - [ ] The user should list question created.
 - [ ] The user should remove create a question.
 - [ ] The user should answer questions anonymously.
 - [ ] Optionally, the user can answer the question with your information.


 ### Database

 - A User can be the author of multiple Questions.
 - A User can be the author of multiple Answers.
 - A Question has a single User as its author.
 - A Question can have multiple Answers.
 - An Answers has a single User as its author.
 - An Answer belongs to a single Question.

 Entities

```text
    Users
    - userId [uuid, PK]
    - name [varchar(255), not null]
    - email [varchar(255, not null)]
    - password [text, not null]
    - createdAt [timestamp, default now()]
    - updateAt [timestamp, null]

    Questions
    - questionId [uuid, PK]
    - userId [uuid, FK]
    - question [varchar(255), not null]
    - createdAt [timestamp, default now()]
    - updateAt [timestamp, null]

    Answers
    - answersId [uuid, PK]
    - questionId [uuid, FK]
    - userId [uuid, FK, null]
    - answer [varchar(255), not null]
    - createdAt [timestamp, default now()]
    - updateAt [timestamp, null]
```

Entity relationships:

```text
User (ID, ...)
|--< Questions (UserID [FK], ...)
    |--< Answers (UserID [FK], QuestionID [FK], ...)
```