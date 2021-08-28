

- y.js
- https://github.com/automerge/automerge
- RxDB


Practicability of CRDTs in Application Development
https://nigel-schuster.de/uploads/crdt-paper.pdf
Raymond Xu and Nigel Schuster

- Here they convert a Postgres application to Riak


https://medium.com/@gordonguthrie/field-notes-on-modelling-relational-data-with-crdts-gies-a-job-remix-d1b3672a08c3


Sync with LevelUpDb
https://stackoverflow.com/questions/19953256/how-to-have-complete-offline-functionality-in-a-web-app-with-postgresql-database


Requirements
- If inserting on the client, use a lamport timestamp, then when it gets to the server use the server's timestamp
- Key a "distributed key" for every row in the database (lamport)