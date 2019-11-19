use app;
insert into  securityScans(ID, status, repositoryName,findings,queuedAt,scanningAt,finishedAt ) values
(
'1',
"In Progress",
"Repo1",
'{ 
    "findings": [
    {
      "type": "sast",
      "ruleId": "G402",
      "location": {
        "path": "connectors/apigateway.go",
        "positions": {
          "begin": {
            "line": 60
          }
        }
      },
      "metadata": {
        "description": "TLS InsecureSkipVerify set true.",
        "severity": "HIGH"
      }
    },
    {
      "type": "sast",
      "ruleId": "G404",
      "location": {
        "path": "util/util.go",
        "positions": {
          "begin": {
            "line": 32
          }
        }
      },
      "metadata": {
        "description": "Use of weak random number generator (math/rand instead of crypto/rand)",
        "severity": "HIGH"
      }
    }
    ]
  }',
'1994-09-12 2:23:05',
'2009-08-12 4:25:06',
'2019-11-13 7:06:05'


);