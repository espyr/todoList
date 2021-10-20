DROP TABLE IF EXISTS todos;

CREATE TABLE todos (
                       id INT AUTO_INCREMENT  PRIMARY KEY,
                       task VARCHAR(250) NOT NULL,
                       priority ENUM('1', '2', '3') NOT NULL
);

INSERT INTO todo (id, task, priority) VALUES (1, 'Implement loading - frontend only', 1);
INSERT INTO todo (id, task, priority) VALUES (2, 'Implement search - frontend only', 2);
INSERT INTO todo (id, task, priority) VALUES (3, 'Implement delete on click - frontend only', 1);
INSERT INTO todo (id, task, priority) VALUES (4, 'Replace mock service by integrating backend', 3);
