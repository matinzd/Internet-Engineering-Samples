import json

receivedData = '{"name":"Reza","lastName":"Heidari","birthdate":"1370/09/10","isActive":true,"post":300, newKey: 10}'

jsonData = json.loads(receivedData)

print(jsonData['birthdate'])