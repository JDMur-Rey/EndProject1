create table meeting (
    client_id int auto_increment,
    first_name varchar(250),
    email varchar(500),
    meeting_topic varchar(1024),
    date date,
    time time,
    location varchar(1024),
    FOREIGN KEY (client_id) REFERENCES client(id)
)