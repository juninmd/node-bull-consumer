```markdown
# AGENTS.md - AI Coding Agent Guidelines

These guidelines outline the principles and practices for development of AGENTS.md, a repository for AI coding agents.  Adherence to these principles is crucial for maintaining a sustainable, high-quality, and scalable codebase.

## 1. DRY (Don't Repeat Yourself)

*   **Single Responsibility Principle:** Each agent should have a single, clearly defined responsibility.  Avoid creating overly complex agents with multiple functions performing similar tasks.
*   **Common Code Patterns:** Identify and reuse common code patterns (e.g., data structuring, state management, communication protocols) across multiple agents.
*   **Abstraction:**  Implement abstractions where possible to reduce duplication of core logic.
*   **Templates:** Utilize templates for common agent components to promote consistency.

## 2. KISS (Keep It Simple, Stupid)

*   **Minimal Code:** Strive for the shortest possible code to achieve a given functionality.
*   **Readability:** Prioritize clear and understandable code; use meaningful variable and function names.
*   **Comments:** Provide concise and helpful comments explaining complex logic, assumptions, and potential pitfalls.  Don’t over-comment; focus on explaining *why* not *what*.
*   **Avoid Unnecessary Complexity:** Resist the temptation to implement overly sophisticated solutions when simpler ones suffice.

## 3. SOLID Principles

*   **Single Responsibility:**  Each class should have one primary responsibility.
*   **Open/Closed Principle:**  The system should be extensible through additions to its interfaces or methods, without modifying the core logic.
*   **Liskov Substitution Principle:**  Subclasses should be substitutable for their base classes without altering the correctness of the program.
*   **Interface Segregation Principle:**  Clients should not be forced to use an interface they do not need.
*   **Dependency Inversion Principle:**  High-level modules (classes) should not depend on low-level modules; they should depend on abstract classes or interfaces.

## 4. YAGNI (You Aren’t Gonna Need It)

*   **Future-Proofing:**  Only implement features and functionalities that are explicitly required in the current version or future development.  Refactor to remove unused code.
*   **Don't Implement Features:**  Avoid creating new functionality simply because it's possible or desired. Focus on solving the immediate problem.
*   **Prioritize Core Functionality:**  Maintain a clear focus on the essential requirements of the agents.

## 5. Development Practices

*   **Unit Testing:**  All agents must be thoroughly tested with unit tests covering all core logic.
*   **Test Coverage:**  Minimum 80% test coverage required. Test suite should be maintained and updated regularly.
*   **Code Reviews:**  All code changes must undergo review by at least one other developer.
*   **Static Analysis:**  Utilize static analysis tools to identify potential issues early in the development process.
*   **Version Control:**  Use Git for version control; commit changes frequently and with clear commit messages.
*   **Documentation:**  Include concise documentation explaining the purpose of each agent and its key components.
*   **Error Handling:** Implement robust error handling to prevent unexpected crashes and provide informative error messages.

## 6. File Size Constraints

*   **Maximum File Size:** Each file must be less than 180 lines of code.

## 7. Specific File Structure Guidelines

*   **Agent.py:**  Contains the core agent functionality.  Focuses on the critical path of the agent.
*   **DataStructures.py:**  Defines and implements data structures used by the agents.
*   **Communication.py:**  Handles agent communication protocols (e.g., message queues, APIs).
*   **StateManagement.py:** Manages agent state and persistent storage.
*   **Testing.py:**  Contains comprehensive unit tests for the agents.
*   **Configuration.py:** Defines agent configuration settings.

## 8.  Reporting

*   **Automated Reports:** Implement automated reporting on code quality, test coverage, and potential issues.

These guidelines are intended to provide a framework for developing AGENTS.md.  Continuous refinement and adaptation are encouraged.
```