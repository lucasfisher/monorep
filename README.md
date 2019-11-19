# monorep
a coding challenge for Guardrails.io
Lucas Fisher

Considerable time was spent automating the population of the Mysql-dev container
However this should now launch the database and automatically populate the 
database with a test entry. This seemed necessary and is handled in the docker-compose.yml

A Note on adding Mock scans to the database via UI:
I didnt spend any real time on validating entries so you may have many errors on the backend popping up
the most common being:
Invalid JSON Text
DateTime out of range

Ensure that your entry to the Findings field is proper JSON  text of the form: {"findings":{"key":"value" }}
This is because of a decision to have the database field be JSON, this may have its uses but in practice proves 
to be very difficult to work with. 

I would like to add more validation to the addScan component.

