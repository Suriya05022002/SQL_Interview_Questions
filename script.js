document.addEventListener('DOMContentLoaded', function() {
    // SQL Interview Questions Data
   // SQL Interview Questions Data
const questions = [

  {
    id: 1,
    category: "basic",
    question: "What is SQL?",
    code: null,
    answer:
      "SQL (Structured Query Language) is a standard programming language used for managing and manipulating relational databases.",
  },
  {
    id: 2,
    category: "basic",
    question: "What is a primary key?",
    code: null,
    answer:
      "A primary key is a field (or combination of fields) that uniquely identifies each record in a table. It cannot contain NULL values and must have unique entries.",
  },
  {
    id: 3,
    category: "basic",
    question: "What is a foreign key?",
    code: null,
    answer:
      "A foreign key is a field (or combination of fields) in one table that refers to the primary key in another table, establishing a relationship between the two tables.",
  },
  {
    id: 4,
    category: "basic",
    question: "What are constraints in SQL?",
    code: null,
    answer:
      "<ul>" +
      "<li><strong>PRIMARY KEY</strong>: Uniquely identifies each record.</li>" +
      "<li><strong>FOREIGN KEY</strong>: Enforces referential integrity.</li>" +
      "<li><strong>UNIQUE</strong>: Ensures all values in a column are distinct.</li>" +
      "<li><strong>CHECK</strong>: Ensures that values in a column satisfy a specific condition.</li>" +
      "<li><strong>NOT NULL</strong>: Ensures a column cannot have NULL values.</li>" +
      "<li><strong>DEFAULT</strong>: Specifies a default value for a column.</li>" +
      "</ul>",
  },
  {
    id: 5,
    category: "basic",
    question: "Write a query to retrieve all records from a table named employees.",
    code: "SELECT * FROM employees;",
    answer:
      "This query selects and displays all columns and rows from the employees table.",
  },

  {
    id: 6,
    category: "basic",
    question: "What is the difference between DELETE and TRUNCATE?",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>DELETE</span>: Removes rows from a table based on a condition. It can be rolled back (transaction-safe) and triggers can be invoked.</li><li><span class='sql-keyword'>TRUNCATE</span>: Removes all rows from a table, resetting the identity column. It is faster but cannot be rolled back and does not invoke triggers.</li></ul>",
  },
  {
    id: 7,
    category: "basic",
    question: "How do you find the maximum salary from an employees table?",
    code: "SELECT MAX(salary) FROM employees;",
    answer: "This query returns the highest salary from the employees table.",
  },
  {
    id: 8,
    category: "basic",
    question: "Write a query to fetch the second-highest salary from the employees table.",
    code: "SELECT MAX(salary) FROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);",
    answer: "The subquery finds the maximum salary, and the outer query finds the highest salary that is less than that value (i.e., the second-highest salary).",
  },
  {
    id: 9,
    category: "basic",
    question: "What is a JOIN? Explain its types.",
    code: null,
    answer:
      "A JOIN clause is used to combine rows from two or more tables based on a related column. Types of joins:<ul><li><span class='sql-keyword'>INNER JOIN</span>: Returns rows with matching values in both tables.</li><li><span class='sql-keyword'>LEFT JOIN</span>: Returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for the right table's columns.</li><li><span class='sql-keyword'>RIGHT JOIN</span>: Returns all rows from the right table and the matched rows from the left.</li><li><span class='sql-keyword'>FULL JOIN</span>: Returns rows when there is a match in either table.</li><li><span class='sql-keyword'>CROSS JOIN</span>: Returns the Cartesian product of both tables.</li></ul>",
  },
  {
    id: 10,
    category: "joins",
    question: "Write a query to fetch employee names and department names using JOIN.",
    code: "SELECT e.name, d.department_name\nFROM employees e\nJOIN departments d\nON e.department_id = d.id;",
    answer: "This query joins the employees table with the departments table based on the department_id, displaying employee names and their corresponding department names.",
  },
  {
    id: 11,
    category: "basic",
    question: "What is a GROUP BY clause in SQL?",
    code: null,
    answer: "The GROUP BY clause groups rows with the same values into summary rows. It is commonly used with aggregate functions like COUNT(), SUM(), AVG(), etc.",
  },
  {
    id: 12,
    category: "basic",
    question: "Write a query to count employees in each department.",
    code: "SELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id;",
    answer: "This query groups employees by department_id and counts the number of employees in each department.",
  },
  {
    id: 13,
    category: "basic",
    question: "What is the difference between WHERE and HAVING clauses?",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>WHERE</span>: Filters rows before grouping (applies to individual rows).</li><li><span class='sql-keyword'>HAVING</span>: Filters groups after the GROUP BY clause (applies to aggregate functions).</li></ul>",
  },
  {
    id: 14,
    category: "basic",
    question: "Write a query to fetch departments with more than 5 employees.",
    code: "SELECT department_id, COUNT(*)\nFROM employees\nGROUP BY department_id\nHAVING COUNT(*) > 5;",
    answer: "The query counts employees in each department and returns departments with more than 5 employees.",
  },
  {
    id: 15,
    category: "basic",
    question: "Explain UNION and UNION ALL.",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>UNION</span>: Combines results of two or more SELECT statements and removes duplicates.</li><li><span class='sql-keyword'>UNION ALL</span>: Combines results and keeps all duplicates.</li></ul>",
  },
  {
    id: 16,
    category: "basic",
    question: "What is a subquery in SQL?",
    code: null,
    answer: "A subquery is a query nested within another query. It is used to retrieve data that will be passed into the outer query.",
  },
  {
    id: 17,
    category: "basic",
    question: "Write a query to find all employees whose salary is greater than the average salary.",
    code: "SELECT *\nFROM employees\nWHERE salary > (SELECT AVG(salary) FROM employees);",
    answer: "This query selects all employees with a salary higher than the average salary of all employees.",
  },
  {
    id: 18,
    category: "joins",
    question: "What is the difference between INNER JOIN and OUTER JOIN?",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>INNER JOIN</span>: Returns rows with matching values in both tables.</li><li><span class='sql-keyword'>OUTER JOIN</span> (Left/Right/Full): Returns matching rows plus non-matching rows from one or both tables.</li></ul>",
  },
  {
    id: 19,
    category: "basic",
    question: "Write a query to fetch the current date in SQL.",
    code: "SELECT CURRENT_DATE;",
    answer: "This query retrieves the current date from the database.",
  },
  {
    id: 20,
    category: "basic",
    question: "What is indexing in SQL?",
    code: null,
    answer: "Indexing improves the speed of data retrieval by creating a data structure (index) on one or more columns of a table.",
  },
  {
    id: 21,
    category: "basic",
    question: "What is normalization? Explain its types (1NF, 2NF, 3NF, BCNF).",
    code: null,
    answer: "Normalization is the process of organizing data to reduce redundancy and improve data integrity. Forms:<ul><li><span class='sql-keyword'>1NF</span>: Eliminate duplicate columns and create tables for related data.</li><li><span class='sql-keyword'>2NF</span>: Remove partial dependencies (columns depend on a part of a composite key).</li><li><span class='sql-keyword'>3NF</span>: Remove transitive dependencies (non-key columns depend on other non-key columns).</li><li><span class='sql-keyword'>BCNF</span>: A stricter version of 3NF where every determinant must be a candidate key.</li></ul>",
  },
  {
    id: 22,
    category: "basic",
    question: "What is denormalization?",
    code: null,
    answer: "Denormalization is the process of combining normalized tables to improve performance at the cost of introducing redundancy.",
  },
  {
    id: 23,
    category: "basic",
    question: "Write a query to add a new column email to the employees table.",
    code: "ALTER TABLE employees ADD COLUMN email VARCHAR(255);",
    answer: "This query adds a new email column to the employees table.",
  },
  {
    id: 24,
    category: "basic",
    question: "What is a stored procedure in SQL?",
    code: null,
    answer: "A stored procedure is a set of SQL statements that can be stored in the database and executed as a program to perform a specific task.",
  },
  {
    id: 25,
    category: "basic",
    question: "Write a basic stored procedure to fetch all employees.",
    code: "CREATE PROCEDURE GetAllEmployees()\nBEGIN\n  SELECT * FROM employees;\nEND;",
    answer: "This procedure retrieves all records from the employees table when executed.",
  },
  {
    id: 26,
    category: "basic",
    question: "What are triggers in SQL?",
    code: null,
    answer: "Triggers are special procedures that are automatically executed (or \"triggered\") in response to certain events (INSERT, UPDATE, DELETE) on a table.",
  },
  {
    id: 27,
    category: "advanced",
    question: "Write a query to create a trigger that logs any delete action on the employees table.",
    code: "CREATE TRIGGER log_delete\nAFTER DELETE ON employees\nFOR EACH ROW\nBEGIN\n  INSERT INTO log_table(action, emp_id, log_time)\n  VALUES('DELETE', OLD.id, NOW());\nEND;",
    answer: "This trigger logs the deletion of any employee by recording the action and employee ID in the log_table.",
  },
  {
    id: 28,
    category: "basic",
    question: "What is a VIEW in SQL?",
    code: null,
    answer: "A VIEW is a virtual table based on the result set of an SQL query. It does not store the data itself but provides a way to simplify complex queries.",
  },
  {
    id: 29,
    category: "basic",
    question: "Write a query to create a view for employees with salary greater than 50,000.",
    code: "CREATE VIEW HighSalaryEmployees AS\nSELECT * FROM employees WHERE salary > 50000;",
    answer: "This query creates a view that shows only employees with salaries above $50,000.",
  },
  {
    id: 30,
    category: "basic",
    question: "What is the difference between VIEW and TABLE?",
    code: null,
    answer: "A TABLE stores data physically, while a VIEW is a virtual representation that dynamically pulls data from one or more tables without storing it.",
  },
  {
    id: 31,
    category: "aggregation",
    question: "What is an aggregate function? Provide examples.",
    code: null,
    answer: "Aggregate functions perform calculations on a set of values and return a single value. Examples include:<ul><li><span class='sql-keyword'>COUNT()</span>: Counts the number of rows.</li><li><span class='sql-keyword'>SUM()</span>: Sums up a numeric column.</li><li><span class='sql-keyword'>AVG()</span>: Calculates the average of a numeric column.</li><li><span class='sql-keyword'>MAX()</span>: Returns the maximum value.</li><li><span class='sql-keyword'>MIN()</span>: Returns the minimum value.</li></ul>",
  },
  {
    id: 32,
    category: "aggregation",
    question: "Write a query to calculate the total salary for each department.",
    code: "SELECT department_id, SUM(salary)\nFROM employees\nGROUP BY department_id;",
    answer: "This query sums the salaries for each department, grouping by department_id.",
  },
  {
    id: 33,
    category: "basic",
    question: "Explain the DISTINCT keyword in SQL.",
    code: null,
    answer: "The DISTINCT keyword is used to return unique values from a column, eliminating duplicate entries from the result set.",
  },
  {
    id: 34,
    category: "basic",
    question: "Write a query to find distinct job titles from the employees table.",
    code: "SELECT DISTINCT job_title FROM employees;",
    answer: "This query retrieves unique job titles from the employees table.",
  },
  {
    id: 35,
    category: "advanced",
    question: "What are the ACID properties in SQL?",
    code: null,
    answer: "ACID properties ensure reliable processing of database transactions:<ul><li><span class='sql-keyword'>Atomicity</span>: Ensures that all parts of a transaction are completed successfully or none at all.</li><li><span class='sql-keyword'>Consistency</span>: Ensures the database remains in a valid state before and after the transaction.</li><li><span class='sql-keyword'>Isolation</span>: Ensures transactions do not affect each other's execution.</li><li><span class='sql-keyword'>Durability</span>: Ensures that once a transaction is committed, it remains permanent, even in the event of a failure.</li></ul>",
  },
  {
    id: 36,
    category: "advanced",
    question: "What is a transaction in SQL?",
    code: null,
    answer: "A transaction is a sequence of one or more SQL operations treated as a single unit of work, ensuring data integrity.",
  },
  {
    id: 37,
    category: "advanced",
    question: "Explain COMMIT, ROLLBACK, and SAVEPOINT.",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>COMMIT</span>: Saves all changes made during the current transaction.</li><li><span class='sql-keyword'>ROLLBACK</span>: Undoes changes made during the current transaction, restoring the database to its previous state.</li><li><span class='sql-keyword'>SAVEPOINT</span>: Sets a point within a transaction to which you can later roll back.</li></ul>",
  },
  {
    id: 38,
    category: "advanced",
    question: "Write a query to start a transaction, update a record, and commit it.",
    code: "START TRANSACTION;\nUPDATE employees SET salary = 60000 WHERE id = 1;\nCOMMIT;",
    answer: "This sequence starts a transaction, updates an employee's salary, and commits the change.",
  },
  {
    id: 39,
    category: "advanced",
    question: "What is a CASE statement in SQL?",
    code: null,
    answer: "A CASE statement is used to perform conditional logic in SQL queries, allowing different outputs based on specified conditions.",
  },
  {
    id: 40,
    category: "advanced",
    question: "Write a query using CASE to categorize employees by salary.",
    code: "SELECT name,\n    CASE\n        WHEN salary > 50000 THEN 'High'\n        WHEN salary BETWEEN 30000 AND 50000 THEN 'Medium'\n        ELSE 'Low'\n    END AS salary_category\nFROM employees;",
    answer: "This query categorizes employees based on their salary levels.",
  },
  {
    id: 41,
    category: "basic",
    question: "Explain NULL values in SQL.",
    code: null,
    answer: "NULL represents the absence of a value in a database. It is not equivalent to zero or an empty string and is treated differently in comparisons.",
  },
  {
    id: 42,
    category: "basic",
    question: "Write a query to fetch records where email is NULL.",
    code: "SELECT * FROM employees WHERE email IS NULL;",
    answer: "This query retrieves all employees whose email address is not provided (i.e., is NULL).",
  },
  {
    id: 43,
    category: "advanced",
    question: "What is the COALESCE function in SQL?",
    code: null,
    answer: "The COALESCE function returns the first non-NULL value in a list of expressions.",
  },
  {
    id: 44,
    category: "advanced",
    question: "Write a query using COALESCE to handle NULL values in a column.",
    code: "SELECT name, COALESCE(email, 'No Email') AS email_address\nFROM employees;",
    answer: "This query replaces NULL email values with the string 'No Email'.",
  },
  {
    id: 45,
    category: "aggregation",
    question: "What is the difference between COUNT(*) and COUNT(column_name)?",
    code: null,
    answer: "COUNT(*) counts all rows in a table, including NULL values, while COUNT(column_name) counts only non-NULL values in the specified column.",
  },
  {
    id: 46,
    category: "basic",
    question: "What is the difference between CHAR and VARCHAR in SQL?",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>CHAR</span>: Fixed-length string data type. If the string is shorter than the specified length, it is padded with spaces.</li><li><span class='sql-keyword'>VARCHAR</span>: Variable-length string data type. It uses only the necessary space for the string's length, plus one or two bytes for length information.</li></ul>",
  },
  {
    id: 47,
    category: "basic",
    question: "Write a query to update an employee's salary by 10% where the salary is below 30,000.",
    code: "UPDATE employees\nSET salary = salary * 1.10\nWHERE salary < 30000;",
    answer: "This query increases the salary of employees earning less than 30,000 by 10%.",
  },
  {
    id: 48,
    category: "advanced",
    question: "What is a recursive query?",
    code: null,
    answer: "A recursive query is a query that references itself. It is often used to handle hierarchical data, such as organizational structures.",
  },
  {
    id: 49,
    category: "advanced",
    question: "Write a recursive query to get a hierarchical structure of employees and their managers.",
    code: "WITH RECURSIVE EmployeeHierarchy AS (\n    SELECT id, name, manager_id\n    FROM employees\n    WHERE manager_id IS NULL\n    UNION ALL\n    SELECT e.id, e.name, e.manager_id\n    FROM employees e\n    INNER JOIN EmployeeHierarchy eh\n    ON e.manager_id = eh.id\n)\nSELECT * FROM EmployeeHierarchy;",
    answer: "This recursive query generates a hierarchy of employees based on their managers.",
  },
  {
    id: 50,
    category: "advanced",
    question: "Explain the EXISTS clause in SQL.",
    code: null,
    answer: "The EXISTS clause is used to check for the existence of rows returned by a subquery. It returns TRUE if the subquery returns one or more rows.",
  },
  {
    id: 51,
    category: "basic",
    question: "What is the purpose of the LIMIT clause in SQL?",
    code: null,
    answer: "The LIMIT clause is used to specify the maximum number of records to return in the result set. It helps in pagination and controlling output size.",
  },
  {
    id: 52,
    category: "basic",
    question: "Write a query to retrieve the top 5 highest salaries from the employees table.",
    code: "SELECT DISTINCT salary\nFROM employees\nORDER BY salary DESC\nLIMIT 5;",
    answer: "This query selects the top 5 unique highest salaries from the employees table.",
  },
  {
    id: 53,
    category: "basic",
    question: "What is a composite key?",
    code: null,
    answer: "A composite key is a combination of two or more columns in a table that together uniquely identify a record. It is used when a single column is not sufficient to uniquely identify rows.",
  },
  {
    id: 54,
    category: "basic",
    question: "Explain the ALTER TABLE command.",
    code: null,
    answer: "The ALTER TABLE command is used to modify an existing table structure, allowing changes such as adding, dropping, or modifying columns and constraints.",
  },
  {
    id: 55,
    category: "basic",
    question: "Write a query to drop a column named address from the employees table.",
    code: "ALTER TABLE employees DROP COLUMN address;",
    answer: "This query removes the address column from the employees table.",
  },
  {
    id: 56,
    category: "basic",
    question: "What is data integrity?",
    code: null,
    answer: "Data integrity refers to the accuracy, consistency, and reliability of data over its lifecycle. It is maintained through various means, including constraints, data validation, and database rules.",
  },
  {
    id: 57,
    category: "joins",
    question: "Explain the difference between INNER JOIN and LEFT JOIN.",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>INNER JOIN</span>: Returns only the rows with matching values in both tables.</li><li><span class='sql-keyword'>LEFT JOIN</span>: Returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for the right table's columns.</li></ul>",
  },
  {
    id: 58,
    category: "advanced",
    question: "What are the advantages of using indexes?",
    code: null,
    answer: "Indexes improve query performance by reducing the amount of data the database must scan. They can speed up searches, sorts, and joins, but may slow down insertions, updates, and deletions due to the overhead of maintaining the index.",
  },
  {
    id: 59,
    category: "aggregation",
    question: "Write a query to find the average salary of employees in each department.",
    code: "SELECT department_id, AVG(salary)\nFROM employees\nGROUP BY department_id;",
    answer: "This query calculates the average salary for each department by grouping records based on department_id.",
  },
  {
    id: 60,
    category: "joins",
    question: "What is a CROSS JOIN?",
    code: null,
    answer: "A CROSS JOIN produces the Cartesian product of two tables, meaning every row from the first table is combined with every row from the second table.",
  },
  {
    id: 61,
    category: "joins",
    question: "Write a query to perform a CROSS JOIN between employees and departments.",
    code: "SELECT * FROM employees CROSS JOIN departments;",
    answer: "This query returns all combinations of rows from the employees and departments tables.",
  },
  {
    id: 62,
    category: "advanced",
    question: "What is a SQL injection?",
    code: null,
    answer: "SQL injection is a security vulnerability that occurs when an attacker can manipulate a SQL query by injecting malicious input through user input fields, potentially allowing unauthorized access to the database.",
  },
  {
    id: 63,
    category: "advanced",
    question: "How can you prevent SQL injection?",
    code: null,
    answer: "To prevent SQL injection:<ul><li>Use prepared statements or parameterized queries.</li><li>Validate and sanitize user inputs.</li><li>Limit database user permissions.</li><li>Use ORM frameworks that handle data safely.</li></ul>",
  },
  {
    id: 64,
    category: "advanced",
    question: "What is a database view? Can it be updated?",
    code: null,
    answer: "A database view is a virtual table based on a SQL query that can simplify complex queries. While some views are updatable, updates depend on the complexity of the underlying query. Simple views that directly map to a single table can usually be updated.",
  },
  {
    id: 65,
    category: "advanced",
    question: "What is the difference between RANK() and DENSE_RANK()?",
    code: null,
    answer: "<ul><li><span class='sql-keyword'>RANK()</span>: Assigns a rank to each row within a partition, with gaps in the ranking for ties.</li><li><span class='sql-keyword'>DENSE_RANK()</span>: Similar to RANK(), but without gaps in the ranking for ties.</li></ul>",
  },
  {
    id: 66,
    category: "advanced",
    question: "Write a query to use RANK() to rank employees by salary.",
    code: "SELECT name, salary, RANK() OVER (ORDER BY salary DESC) AS salary_rank\nFROM employees;",
    answer: "This query ranks employees based on their salaries in descending order.",
  },
  {
    id: 67,
    category: "basic",
    question: "What are the common data types in SQL?",
    code: null,
    answer: "Common SQL data types include:<ul><li><span class='sql-keyword'>INTEGER</span>: Whole numbers.</li><li><span class='sql-keyword'>VARCHAR</span>: Variable-length character strings.</li><li><span class='sql-keyword'>CHAR</span>: Fixed-length character strings.</li><li><span class='sql-keyword'>DATE</span>: Date values.</li><li><span class='sql-keyword'>FLOAT</span>: Floating-point numbers.</li><li><span class='sql-keyword'>BOOLEAN</span>: True/false values.</li></ul>",
  },

  {
    id: 68,
    category: "intermediate",
    question: "Explain the WITH clause (Common Table Expression).",
    code: null,
    answer:
      "The WITH clause defines a temporary result set (a Common Table Expression) that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement, often simplifying complex queries.",
  },
  {
    id: 69,
    category: "intermediate",
    question: "Write a query using a CTE to find employees with salaries greater than the average.",
    code:
      `WITH AvgSalary AS (
  SELECT AVG(salary) AS avg_salary
  FROM employees
)
SELECT *
FROM employees
WHERE salary > (SELECT avg_salary FROM AvgSalary);`,
    answer:
      "This query uses a CTE to calculate the average salary and then selects employees earning more than that average.",
  },

  {
    id: 70,
    category: "basic",
    question: "What are SQL data types? Give examples.",
    code: null,
    answer: "SQL data types specify the kind of data that can be stored in a column. Examples include:<ul><li><span class='sql-keyword'>INT</span>: Integer values.</li><li><span class='sql-keyword'>VARCHAR(n)</span>: Variable-length string.</li><li><span class='sql-keyword'>DATE</span>: Date values.</li><li><span class='sql-keyword'>FLOAT</span>: Floating-point numbers.</li><li><span class='sql-keyword'>BOOLEAN</span>: True/false values.</li></ul>",
  },
  {
    id: 71,
    category: "basic",
    question: "What is the purpose of the GROUP BY clause?",
    code: null,
    answer: "The GROUP BY clause groups rows that have the same values in specified columns into aggregated data, often used with aggregate functions.",
  },
  {
    id: 72,
    category: "aggregation",
    question: "Write a query to find the number of employees in each department and order by the count.",
    code: "SELECT department_id, COUNT(*) AS employee_count\nFROM employees\nGROUP BY department_id\nORDER BY employee_count DESC;",
    answer: "This query counts employees in each department and orders the results by the count in descending order.",
  },
  {
    id: 73,
    category: "joins",
    question: "What is a SELF JOIN?",
    code: null,
    answer: "A SELF JOIN is a regular join that joins a table with itself. It is used when you need to compare rows within the same table.",
  },
  {
    id: 74,
    category: "joins",
    question: "Write a query to perform a SELF JOIN to find employees and their managers.",
    code: "SELECT e1.name AS Employee, e2.name AS Manager\nFROM employees e1\nLEFT JOIN employees e2 ON e1.manager_id = e2.id;",
    answer: "This query retrieves a list of employees along with their corresponding managers.",
  },
  {
    id: 75,
    category: "basic",
    question: "What is the difference between WHERE and AND?",
    code: null,
    answer: "WHERE is used to specify conditions for filtering rows in a query, while AND is a logical operator used within the WHERE clause to combine multiple conditions.",
  },
  {
    id: 76,
    category: "basic",
    question: "Write a query to find employees with a salary between 30,000 and 50,000.",
    code: "SELECT * FROM employees\nWHERE salary BETWEEN 30000 AND 50000;",
    answer: "This query retrieves employees whose salaries fall within the specified range.",
  },
  {
    id: 77,
    category: "advanced",
    question: "What are stored functions in SQL?",
    code: null,
    answer: "Stored functions are similar to stored procedures but return a single value. They can be used in SQL statements just like built-in functions.",
  },
  {
    id: 78,
    category: "advanced",
    question: "Write a simple stored function to calculate the annual salary.",
    code: "CREATE FUNCTION CalculateAnnualSalary(monthly_salary DECIMAL(10,2))\nRETURNS DECIMAL(10,2)\nBEGIN\n  RETURN monthly_salary * 12;\nEND;",
    answer: "This function takes a monthly salary and returns the annual salary.",
  },
  {
    id: 79,
    category: "advanced",
    question: "What is the EXPLAIN statement used for?",
    code: null,
    answer: "The EXPLAIN statement provides information about how a SQL query will be executed, including details on the chosen indexes, join types, and estimated rows. It helps optimize queries for better performance.",
  },
  {
    id: 80,
    category: "advanced",
    question: "Write a query to use EXPLAIN to analyze a SELECT statement.",
    code: "EXPLAIN SELECT * FROM employees WHERE department_id = 1;",
    answer: "This query analyzes the execution plan for selecting employees from department 1.",
  }
];

    // DOM Elements
    const questionCard = document.getElementById('question-card');
    const questionList = document.getElementById('question-list');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const showAnswerBtn = document.getElementById('show-answer-btn');
    const progressBar = document.getElementById('progress-bar'); // Fixed: Select the actual element, not the pseudo-element
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const themeSwitch = document.getElementById('theme-switch');
    const filterCheckboxes = document.querySelectorAll('.filter-options input');

    // State
    let currentQuestionIndex = 0;
    let filteredQuestions = [...questions];

    // Initialize
    totalQuestionsSpan.textContent = questions.length;
    updateQuestionList();
    displayQuestion(currentQuestionIndex);

    // Event Listeners
    prevBtn.addEventListener('click', showPreviousQuestion);
    nextBtn.addEventListener('click', showNextQuestion);
    showAnswerBtn.addEventListener('click', toggleAnswer);
    
    themeSwitch.addEventListener('change', function() {
        document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
    });

    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterQuestions);
    });

    // Functions
    function displayQuestion(index) {
        const question = filteredQuestions[index];
        
        if (!question) {
            questionCard.innerHTML = `<div class="no-questions">No questions match your filter criteria.</div>`;
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            showAnswerBtn.disabled = true;
            return;
        }
        
        let html = `
            <div class="question-number">Question ${question.id}</div>
            <h2 class="question-title">${question.question}</h2>
        `;
        
        if (question.code) {
            html += `
                <div class="code-block">
                    <code>${formatSQLCode(question.code)}</code>
                </div>
            `;
        }
        
        html += `
            <div class="answer-container" id="answer-container">
                <h3>Answer:</h3>
                <div class="answer-content">${question.answer}</div>
            </div>
        `;
        
        questionCard.innerHTML = html;
        
        // Update UI state
        currentQuestionSpan.textContent = index + 1;
        
        // Fixed: Update progress bar width directly
        progressBar.style.width = `${((index + 1) / filteredQuestions.length) * 100}%`;
        
        prevBtn.disabled = index === 0;
        nextBtn.disabled = index === filteredQuestions.length - 1;
        
        // Update active question in list
        const questionItems = document.querySelectorAll('.question-item');
        questionItems.forEach(item => item.classList.remove('active'));
        
        const activeItem = document.querySelector(`.question-item[data-id="${question.id}"]`);
        if (activeItem) {
            activeItem.classList.add('active');
            // Scroll to active item
            activeItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
    }

    function formatSQLCode(code) {
        // Simple SQL syntax highlighting
        return code
            .replace(/\b(SELECT|FROM|WHERE|GROUP BY|HAVING|ORDER BY|JOIN|ON|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|TRUNCATE|UNION|ALL|AS|INTO|VALUES|TABLE|VIEW|PROCEDURE|TRIGGER|BEGIN|END)\b/gi, 
                match => `<span class="sql-keyword">${match}</span>`)
            .replace(/\n/g, '<br>');
    }

    function showPreviousQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion(currentQuestionIndex);
        }
    }

    function showNextQuestion() {
        if (currentQuestionIndex < filteredQuestions.length - 1) {
            currentQuestionIndex++;
            displayQuestion(currentQuestionIndex);
        }
    }

    function toggleAnswer() {
        const answerContainer = document.getElementById('answer-container');
        if (answerContainer) {
            answerContainer.classList.toggle('visible');
            
            // Fixed: Update both text and icon
            if (answerContainer.classList.contains('visible')) {
                showAnswerBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Answer';
            } else {
                showAnswerBtn.innerHTML = '<i class="fas fa-eye"></i> Show Answer';
            }
        }
    }

    function updateQuestionList() {
        questionList.innerHTML = '';
        
        filteredQuestions.forEach((question, index) => {
            const listItem = document.createElement('div');
            listItem.className = 'question-item';
            listItem.dataset.id = question.id;
            listItem.textContent = `Q${question.id}: ${question.question.substring(0, 30)}${question.question.length > 30 ? '...' : ''}`;
            
            if (index === currentQuestionIndex) {
                listItem.classList.add('active');
            }
            
            listItem.addEventListener('click', () => {
                currentQuestionIndex = index;
                displayQuestion(currentQuestionIndex);
            });
            
            questionList.appendChild(listItem);
        });
    }

    function filterQuestions() {
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
        
        if (selectedCategories.length === 0) {
            filteredQuestions = [...questions];
        } else {
            filteredQuestions = questions.filter(question => 
                selectedCategories.includes(question.category)
            );
        }
        
        // Reset to first question if current is out of bounds
        currentQuestionIndex = 0;
        
        updateQuestionList();
        displayQuestion(currentQuestionIndex);
        totalQuestionsSpan.textContent = filteredQuestions.length;
    }
});
