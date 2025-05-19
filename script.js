document.addEventListener('DOMContentLoaded', function() {
    // SQL Interview Questions Data
    const questions = [
         {
    id: 1,
    category: "basic",
    question: "What is SQL?",
    code: null,
    answer:
      "SQL stands for Structured Query Language. It is a standard programming language for accessing and manipulating databases.",
  },
  {
    id: 2,
    category: "basic",
    question: "What is a database?",
    code: null,
    answer:
      "A database is an organized collection of structured information, or data, typically stored electronically in a computer system. Databases are usually controlled by a database management system (DBMS).",
  },
  {
    id: 3,
    category: "basic",
    question: "What is a DBMS?",
    code: null,
    answer:
      "DBMS stands for Database Management System. It is a software application that interacts with users, other applications, and the database itself to capture and analyze data. A DBMS provides a way to create, retrieve, update, and manage databases.",
  },
  {
    id: 4,
    category: "basic",
    question: "What are the different types of SQL commands?",
    code: null,
    answer:
      "SQL commands are divided into several categories:<ul><li><span class='sql-keyword'>DDL</span> - Data Definition Language</li><li><span class='sql-keyword'>DML</span> - Data Manipulation Language</li><li><span class='sql-keyword'>DCL</span> - Data Control Language</li><li><span class='sql-keyword'>TCL</span> - Transaction Control Language</li></ul>",
  },
  {
    id: 5,
    category: "basic",
    question: "Explain DDL commands.",
    code: null,
    answer:
      "DDL stands for Data Definition Language. It includes SQL commands that define the database schema. Examples:<ul><li><span class='sql-keyword'>CREATE</span> - to create database objects</li><li><span class='sql-keyword'>ALTER</span> - to alter the structure of the database</li><li><span class='sql-keyword'>DROP</span> - to delete database objects</li><li><span class='sql-keyword'>TRUNCATE</span> - to remove all records from a table</li><li><span class='sql-keyword'>RENAME</span> - to rename a database object</li></ul>",
  },
  {
    id: 6,
    category: "basic",
    question: "Explain DML commands.",
    code: null,
    answer:
      "DML stands for Data Manipulation Language. It includes SQL commands that manipulate data within the database. Examples:<ul><li><span class='sql-keyword'>SELECT</span> - to retrieve data from the database</li><li><span class='sql-keyword'>INSERT</span> - to insert data into a table</li><li><span class='sql-keyword'>UPDATE</span> - to update existing data within a table</li><li><span class='sql-keyword'>DELETE</span> - to delete records from a table</li></ul>",
  },
  {
    id: 7,
    category: "basic",
    question: "Explain DCL commands.",
    code: null,
    answer:
      "DCL stands for Data Control Language. It includes SQL commands that control access to data within the database. Examples:<ul><li><span class='sql-keyword'>GRANT</span> - to grant user access privileges</li><li><span class='sql-keyword'>REVOKE</span> - to revoke user access privileges</li></ul>",
  },
  {
    id: 8,
    category: "basic",
    question: "Explain TCL commands.",
    code: null,
    answer:
      "TCL stands for Transaction Control Language. It includes SQL commands that manage transactions within the database. Examples:<ul><li><span class='sql-keyword'>COMMIT</span> - to save changes</li><li><span class='sql-keyword'>ROLLBACK</span> - to undo changes</li><li><span class='sql-keyword'>SAVEPOINT</span> - sets a point within a transaction to which you can later roll back</li></ul>",
  },
  {
    id: 9,
    category: "basic",
    question: "What is a primary key?",
    code: null,
    answer:
      "A primary key is a column or a set of columns that uniquely identifies each row in a table. It must contain unique values and cannot contain NULL values.",
  },
  {
    id: 10,
    category: "basic",
    question: "What is a foreign key?",
    code: null,
    answer:
      "A foreign key is a column or a set of columns in one table that refers to the primary key of another table. It establishes a link between the two tables.",
  },
  {
    id: 11,
    category: "basic",
    question: "What is a unique key?",
    code: null,
    answer:
      "A unique key is a column or a set of columns that uniquely identifies each row in a table. Unlike a primary key, a table can have multiple unique keys, and unique key columns can contain NULL values.",
  },
  {
    id: 12,
    category: "basic",
    question: "What is an index?",
    code: null,
    answer:
      "An index is a data structure that improves the speed of data retrieval operations on a database table. It is created on one or more columns of a table.",
  },
  {
    id: 13,
    category: "basic",
    question: "What is a view?",
    code: null,
    answer:
      "A view is a virtual table based on the result-set of a SQL statement. A view contains rows and columns, just like a real table. The fields in a view are fields from one or more real tables in the database.",
  },
  {
    id: 14,
    category: "basic",
    question: "What is a stored procedure?",
    code: null,
    answer:
      "A stored procedure is a set of SQL statements with an assigned name, which is stored in the database in compiled form so that it can be shared by a number of programs.",
  },
  {
    id: 15,
    category: "basic",
    question: "What is a trigger?",
    code: null,
    answer:
      "A trigger is a stored procedure that automatically executes in response to certain events on a particular table or view in a database.",
  },
  {
    id: 16,
    category: "basic",
    question: "What is normalization?",
    code: null,
    answer:
      "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. It usually involves dividing a database into two or more tables and defining relationships between the tables.",
  },
  {
    id: 17,
    category: "basic",
    question: "What are the normal forms?",
    code: null,
    answer:
      "The normal forms are a series of guidelines that help to ensure that a database is well-structured. The most common normal forms are:<ul><li><span class='sql-keyword'>1NF</span> - First Normal Form</li><li><span class='sql-keyword'>2NF</span> - Second Normal Form</li><li><span class='sql-keyword'>3NF</span> - Third Normal Form</li><li><span class='sql-keyword'>BCNF</span> - Boyce-Codd Normal Form</li></ul>",
  },
  {
    id: 18,
    category: "basic",
    question: "What is denormalization?",
    code: null,
    answer:
      "Denormalization is a database optimization technique in which redundant data is added to one or more tables to avoid costly joins. It is often used to improve read performance.",
  },
  {
    id: 19,
    category: "basic",
    question: "What is a subquery?",
    code: null,
    answer:
      "A subquery is a query nested inside another SQL query. A subquery is usually added within the WHERE clause of another SQL statement.",
  },
  {
    id: 20,
    category: "basic",
    question: "What are the different types of joins?",
    code: null,
    answer:
      "There are several types of joins:<ul><li><span class='sql-keyword'>INNER JOIN</span> - Returns rows when there is a match in both tables</li><li><span class='sql-keyword'>LEFT JOIN</span> - Returns all rows from the left table, and the matched rows from the right table</li><li><span class='sql-keyword'>RIGHT JOIN</span> - Returns all rows from the right table, and the matched rows from the left table</li><li><span class='sql-keyword'>FULL OUTER JOIN</span> - Returns all rows when there is a match in one of the tables</li><li><span class='sql-keyword'>CROSS JOIN</span> - Returns the Cartesian product of the sets of records from the two or more joined tables</li></ul>",
  },
  {
    id: 21,
    category: "basic",
    question: "What is the difference between WHERE and HAVING clauses?",
    code: null,
    answer:
      "The WHERE clause is used to filter records from a table based on a specified condition. The HAVING clause is used to filter records from a group based on a specified condition. The WHERE clause is applied before grouping, while the HAVING clause is applied after grouping.",
  },
  {
    id: 22,
    category: "basic",
    question: "What is the ORDER BY clause?",
    code: null,
    answer: "The ORDER BY clause is used to sort the result-set in ascending or descending order.",
  },
  {
    id: 23,
    category: "basic",
    question: "What is the GROUP BY clause?",
    code: null,
    answer:
      "The GROUP BY clause is used to group rows that have the same values in specified columns into summary rows, like finding the number of customers in each country.",
  },
  {
    id: 24,
    category: "basic",
    question: "What are aggregate functions?",
    code: null,
    answer:
      "Aggregate functions are functions that perform a calculation on a set of values and return a single value. Examples:<ul><li><span class='sql-keyword'>COUNT()</span></li><li><span class='sql-keyword'>SUM()</span></li><li><span class='sql-keyword'>AVG()</span></li><li><span class='sql-keyword'>MAX()</span></li><li><span class='sql-keyword'>MIN()</span></li></ul>",
  },
  {
    id: 25,
    category: "basic",
    question: "What is the UNION operator?",
    code: null,
    answer:
      "The UNION operator is used to combine the result-sets of two or more SELECT statements. It removes duplicate rows.",
  },
  {
    id: 26,
    category: "basic",
    question: "What is the UNION ALL operator?",
    code: null,
    answer:
      "The UNION ALL operator is used to combine the result-sets of two or more SELECT statements. It does not remove duplicate rows.",
  },
  {
    id: 27,
    category: "basic",
    question: "What is the INTERSECT operator?",
    code: null,
    answer: "The INTERSECT operator is used to return the common rows between two or more SELECT statements.",
  },
  {
    id: 28,
    category: "basic",
    question: "What is the EXCEPT operator?",
    code: null,
    answer:
      "The EXCEPT operator is used to return the rows from the first SELECT statement that are not present in the second SELECT statement.",
  },
  {
    id: 29,
    category: "basic",
    question: "What is a cursor?",
    code: null,
    answer: "A cursor is a database object used to retrieve data from a result set one row at a time.",
  },
  {
    id: 30,
    category: "basic",
    question: "What is dynamic SQL?",
    code: null,
    answer:
      "Dynamic SQL is a programming technique that enables you to construct SQL statements programmatically at runtime.",
  },

  {
    id: 31,
    category: "aggregation",
    question: "What is an aggregate function? Provide examples.",
    code: null,
    answer:
      "Aggregate functions perform calculations on a set of values and return a single value. Examples include:<ul><li><span class='sql-keyword'>COUNT()</span>: Counts the number of rows.</li><li><span class='sql-keyword'>SUM()</span>: Sums up a numeric column.</li><li><span class='sql-keyword'>AVG()</span>: Calculates the average of a numeric column.</li><li><span class='sql-keyword'>MAX()</span>: Returns the maximum value.</li><li><span class='sql-keyword'>MIN()</span>: Returns the minimum value.</li></ul>",
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
    answer:
      "The DISTINCT keyword is used to return unique values from a column, eliminating duplicate entries from the result set.",
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
    answer:
      "ACID properties ensure reliable processing of database transactions:<ul><li><span class='sql-keyword'>Atomicity</span>: Ensures that all parts of a transaction are completed successfully or none at all.</li><li><span class='sql-keyword'>Consistency</span>: Ensures the database remains in a valid state before and after the transaction.</li><li><span class='sql-keyword'>Isolation</span>: Ensures transactions do not affect each other's execution.</li><li><span class='sql-keyword'>Durability</span>: Ensures that once a transaction is committed, it remains permanent, even in the event of a failure.</li></ul>",
  },
  {
    id: 36,
    category: "advanced",
    question: "What is a transaction in SQL?",
    code: null,
    answer:
      "A transaction is a sequence of one or more SQL operations treated as a single unit of work, ensuring data integrity.",
  },
  {
    id: 37,
    category: "advanced",
    question: "Explain COMMIT, ROLLBACK, and SAVEPOINT.",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>COMMIT</span>: Saves all changes made during the current transaction.</li><li><span class='sql-keyword'>ROLLBACK</span>: Undoes changes made during the current transaction, restoring the database to its previous state.</li><li><span class='sql-keyword'>SAVEPOINT</span>: Sets a point within a transaction to which you can later roll back.</li></ul>",
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
    answer:
      "A CASE statement is used to perform conditional logic in SQL queries, allowing different outputs based on specified conditions.",
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
    answer:
      "NULL represents the absence of a value in a database. It is not equivalent to zero or an empty string and is treated differently in comparisons.",
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
    answer:
      "COUNT(*) counts all rows in a table, including NULL values, while COUNT(column_name) counts only non-NULL values in the specified column.",
  },
  {
    id: 46,
    category: "basic",
    question: "What is the difference between CHAR and VARCHAR in SQL?",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>CHAR</span>: Fixed-length string data type. If the string is shorter than the specified length, it is padded with spaces.</li><li><span class='sql-keyword'>VARCHAR</span>: Variable-length string data type. It uses only the necessary space for the string's length, plus one or two bytes for length information.</li></ul>",
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
    answer:
      "A recursive query is a query that references itself. It is often used to handle hierarchical data, such as organizational structures.",
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
    answer:
      "The EXISTS clause is used to check for the existence of rows returned by a subquery. It returns TRUE if the subquery returns one or more rows.",
  },
  {
    id: 51,
    category: "basic",
    question: "What is the purpose of the LIMIT clause in SQL?",
    code: null,
    answer:
      "The LIMIT clause is used to specify the maximum number of records to return in the result set. It helps in pagination and controlling output size.",
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
    answer:
      "A composite key is a combination of two or more columns in a table that together uniquely identify a record. It is used when a single column is not sufficient to uniquely identify rows.",
  },
  {
    id: 54,
    category: "basic",
    question: "Explain the ALTER TABLE command.",
    code: null,
    answer:
      "The ALTER TABLE command is used to modify an existing table structure, allowing changes such as adding, dropping, or modifying columns and constraints.",
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
    answer:
      "Data integrity refers to the accuracy, consistency, and reliability of data over its lifecycle. It is maintained through various means, including constraints, data validation, and database rules.",
  },
  {
    id: 57,
    category: "joins",
    question: "Explain the difference between INNER JOIN and LEFT JOIN.",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>INNER JOIN</span>: Returns only the rows with matching values in both tables.</li><li><span class='sql-keyword'>LEFT JOIN</span>: Returns all rows from the left table and the matched rows from the right table. If there is no match, NULL values are returned for the right table's columns.</li></ul>",
  },
  {
    id: 58,
    category: "advanced",
    question: "What are the advantages of using indexes?",
    code: null,
    answer:
      "Indexes improve query performance by reducing the amount of data the database must scan. They can speed up searches, sorts, and joins, but may slow down insertions, updates, and deletions due to the overhead of maintaining the index.",
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
    answer:
      "A CROSS JOIN produces the Cartesian product of two tables, meaning every row from the first table is combined with every row from the second table.",
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
    answer:
      "SQL injection is a security vulnerability that occurs when an attacker can manipulate a SQL query by injecting malicious input through user input fields, potentially allowing unauthorized access to the database.",
  },
  {
    id: 63,
    category: "advanced",
    question: "How can you prevent SQL injection?",
    code: null,
    answer:
      "To prevent SQL injection:<ul><li>Use prepared statements or parameterized queries.</li><li>Validate and sanitize user inputs.</li><li>Limit database user permissions.</li><li>Use ORM frameworks that handle data safely.</li></ul>",
  },
  {
    id: 64,
    category: "advanced",
    question: "What is a database view? Can it be updated?",
    code: null,
    answer:
      "A database view is a virtual table based on a SQL query that can simplify complex queries. While some views are updatable, updates depend on the complexity of the underlying query. Simple views that directly map to a single table can usually be updated.",
  },
  {
    id: 65,
    category: "advanced",
    question: "What is the difference between RANK() and DENSE_RANK()?",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>RANK()</span>: Assigns a rank to each row within a partition, with gaps in the ranking for ties.</li><li><span class='sql-keyword'>DENSE_RANK()</span>: Similar to RANK(), but without gaps in the ranking for ties.</li></ul>",
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
    answer:
      "Common SQL data types include:<ul><li><span class='sql-keyword'>INTEGER</span>: Whole numbers.</li><li><span class='sql-keyword'>VARCHAR</span>: Variable-length character strings.</li><li><span class='sql-keyword'>CHAR</span>: Fixed-length character strings.</li><li><span class='sql-keyword'>DATE</span>: Date values.</li><li><span class='sql-keyword'>FLOAT</span>: Floating-point numbers.</li><li><span class='sql-keyword'>BOOLEAN</span>: True/false values.</li></ul>",
  },
  {
    id: 68,
    category: "basic",
    question: "What is the difference between DELETE and TRUNCATE?",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>DELETE</span>: Removes rows from a table based on a condition. It can be rolled back (transaction-safe) and triggers can be invoked.</li><li><span class='sql-keyword'>TRUNCATE</span>: Removes all rows from a table, resetting the identity column. It is faster but cannot be rolled back and does not invoke triggers.</li></ul>",
  },
  {
    id: 69,
    category: "basic",
    question: "What is the difference between a clustered and non-clustered index?",
    code: null,
    answer:
      "<ul><li><span class='sql-keyword'>Clustered Index</span>: Determines the physical order of data in a table. A table can have only one clustered index.</li><li><span class='sql-keyword'>Non-clustered Index</span>: Creates a separate structure that references the table. A table can have multiple non-clustered indexes.</li></ul>",
  },
  {
    id: 70,
    category: "basic",
    question: "What is a temporary table in SQL?",
    code: null,
    answer:
      "A temporary table is a table that exists temporarily on the database server. It is visible only to the current session and is automatically dropped when the session ends. Temporary tables are useful for storing intermediate results.",
  },
  {
    id: 71,
    category: "aggregation",
    question: "What is the purpose of the GROUP BY clause?",
    code: null,
    answer:
      "The GROUP BY clause groups rows that have the same values in specified columns into aggregated data, often used with aggregate functions.",
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
    answer:
      "A SELF JOIN is a regular join that joins a table with itself. It is used when you need to compare rows within the same table.",
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
    answer:
      "WHERE is used to specify conditions for filtering rows in a query, while AND is a logical operator used within the WHERE clause to combine multiple conditions.",
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
    answer:
      "Stored functions are similar to stored procedures but return a single value. They can be used in SQL statements just like built-in functions.",
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
    answer:
      "The EXPLAIN statement provides information about how a SQL query will be executed, including details on the chosen indexes, join types, and estimated rows. It helps optimize queries for better performance.",
  },
  {
    id: 80,
    category: "advanced",
    question: "Write a query to use EXPLAIN to analyze a SELECT statement.",
    code: "EXPLAIN SELECT * FROM employees WHERE department_id = 1;",
    answer: "This query analyzes the execution plan for selecting employees from department 1.",
  },

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