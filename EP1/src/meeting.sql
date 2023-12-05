create table client {
    client_id int primary key auto_increment,
    first_name varchar(250),
    last_name varchar(250),
    email varchar(500),
    meeting_topic varchar(1024),
    date date,
    time time,
    location varchar(1024)
}