
db mongo ds127928.mlab.com:27928/heroku_zkhp7d78 -u heroku_test_z78 -p REDHAUS22adm
-u heroku_test_z78
-p REDHAUS22adm





// -h - Live host and port
// -d - Live database name
// -u - Username for the live database
// -p - Password for the live database

// using mongorestore provide port, db name, user, password, db in temp directory to be copied
$ ./mongorestore -h ds127928.mlab.com:27928 -d heroku_zkhp7d78 -u redhausadmin -p REDHAUS22adm ~/tmp/mongodump/TodoApp

mongo ds127928.mlab.com:27928/heroku_zkhp7d78 -u heroku_test_z78 -p REDHAUS22adm