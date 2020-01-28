USE employee_db;

INSERT INTO department 
(name)
VALUES
("Sales"),
("Engineering"),
("Finance"),
("Legal")
;

INSERT INTO role
(title, salary, department_id)
VALUES
("Lead Engineer", 125000, 2),
("Software Engineer", 80000, 2), 
("Sales Lead", 110000, 1), 
("Salesperson", 75000, 1), 
("Legal Team Lead", 215000, 4),
("Lawyer", 180000, 4), 
("Accountant", 100000, 3)
;

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
("Cassidy", "Fortner", 1, NULL),
("Stephen", "Webb", 2, 1),
("Kogan", "Pack", 2, 1),
("Jamie", "Kook", 3, NULL),
("Dylan", "Coffee", 4, 4)
;