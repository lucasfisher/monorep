use app;
create table securityScans(ID int(6), 
status varchar(30),
repositoryName varchar(40),
findings JSON,
queuedAt timestamp,
scanningAt timestamp,
finishedAt timestamp
);

grant all on *.* to root@'%';