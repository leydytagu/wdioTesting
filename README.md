# WDIO Testing - WebdriverIO Automation Framework

This project is a **test automation framework** based on **WebdriverIO** (WDIO) using the **Page Object Model (POM)** architecture. It is designed for efficient UI and API test execution.

## Features
- **POM Architecture** for structured and maintainable tests.
-  **UI Tests** with WebdriverIO and Selenium/WebDriver.
- **API Tests** using Axios and Chai.
- **HTML reports** for detailed test reporting.
- **Jenkins Integration** for CI/CD.

---

## Requirements
Before getting started, make sure you have the following installed:
- **Node.js** `>= 16.x`
- **npm** or **yarn`
- **ChromeDriver / Geckodriver** (depending on the browser)
- **Jenkins (Optional)** for CI/CD

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/leydytagu/wdioTesting.git
   cd wdioTesting
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

---

## Configuration
1. **Environment Variables:**  
   Create a `.env` file in the project root:
   ```plaintext
   BASE_URL=https://api.trello.com/1/
   TRELLO_API_KEY=your_api_key
   TRELLO_TOKEN=your_trello_token
   ```
2. **WebdriverIO Configuration:**  
   Customize `wdio.conf.js` to modify the browser, reporter, and other settings.

---

## Running Tests

### Run All Tests
```bash
npm run wdio
```

### Run API Tests Only
```bash
npm run wdio-api
```

### Run UI Tests Only
```bash
npm run wdio-ui
```

### Generate Allure Reports
```bash
npm run allure-report
```

---

## Jenkins Integration
To run tests in Jenkins:
1. Create a **Pipeline Job** in Jenkins.
2. Use the following `Jenkinsfile` configuration:
   ```groovy
   pipeline {
       agent any
       stages {
           stage('Install Dependencies') {
               steps {
                   sh 'npm install'
               }
           }
           stage('Run Tests') {
               parallel {
                   stage('UI Tests') {
                       steps {
                           sh 'npm run wdio-ui'
                       }
                   }
                   stage('API Tests') {
                       steps {
                           sh 'npm run wdio-api'
                       }
                   }
               }
           }
           stage('Generate Report') {
               steps {
                   sh 'npm run allure-report'
               }
           }
       }
   }
   ```
3. **Run the pipeline** and check the reports in Jenkins.

---

## Contributing

This project was created by Leydy Tarazona (leydy.tarazona@gmail.com). If you wish to contribute:
1. Fork the repository.
2. Create a feature branch (feature/new-feature).
3. Submit a Pull Request.

---


