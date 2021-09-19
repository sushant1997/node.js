CREATE DATABASE company_database;

CREATE TABLE company_category(
    id SERIAL NOT NULL,
    title VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE compnay(
    id  SERIAL NOT NULL ,
    category_id INT,
    title VARCHAR(255) NOT NULL,
    image VARCHAR(255),
    description TEXT,
    status BOOLEAN NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    FOREIGN KEY (category_id) REFERENCES company_category (id)
    );


