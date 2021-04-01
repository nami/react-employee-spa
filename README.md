# React Employee SPA

Deployed on Vercel here: https://react-employee-spa.vercel.app/

This project was part of a technical coding challenge for a front end position. There were three parts to the challenge. Using the proviced [EmployeeDataset](https://github.com/nami/react-employee-spa/blob/main/src/data/EmployeeDataset.json) the tasks were to display and filter the information in a bar chart and table.

### Project Structure

```
react-employee-spa
├── cypress
│   ├── fixtures
│   └── integration
│       ├── __image_snapshots__ (contains bar chart screenshots)
│       ├── Chart.spec.js
│       └── SalaryTable.spec.js
│   ├── plugins
│   ├── screenshots
│   └── supports
│       ├── commands.js
│       └── index.js
├── public
│   ├── index.html
│   ├── Image icons
│   ├── manifest.json
│   └── robots.txt
├── src
│   └── components
│       ├── Checkboxes
│           ├── index.jsx
│           └── LocationCheckbox.jsx
│       ├── Chart.jsx
│       ├── NavigationTabs.jsx
│       └── SalaryTable.jsx
│   └── data
│       ├── dummyData.json
│       └── EmployeeDataset.json
│   └── fonts
│       ├── Futura-Book.ttf
│       └── theme.js
│   └── utils
│       ├── index.js
│       └── index.test.js
│   ├── App.js 
│   ├── index.css
│   ├── index.js
│   ├── setupTests.js
│   └── reportWebVitals.js
├── .gitignore
├── eslintrc.json
├── babel.config.json
├── cypress.json
├── yarn.lock
├── package-lock.json
├── package.json
└── README.md
```

## Bar Chart Tab

The bar chart contains the following information:
- <b>x-axis</b>: Locations
- <b>y-axis</b>: Aggregated Salaries

<img src="https://i.ibb.co/n88V0gP/bar-chart.png">

#### Checkbox Functionality 

Users can also filter by location using the checkboxes

<img src="https://i.ibb.co/qp0z041/bar-chart-gif.gif">

## Table Tab

The table has the following columns
- <b>Location</b>: All data locations
- <b>Salary</b>: Total current salary per location
- <b>Delta</b>: Percentage change of current salary from previous salary per location
- Last row is the total of all the columns 

<img src="https://i.ibb.co/VJYf691/table.png">

#### Checkbox Functionality 

Like the bar chart, users can also filter by location using the checkboxes

<img src="https://i.ibb.co/p2hXqp6/table-gif.gif">

## Testing

- `Jest` unit tests for `utils.js` to check salary data calculation functions using dummy data
- `Cypress` e2e tests to check data and checkbox functionality for `Chart` and `SalaryTable`
   - <b>Table</b>: `SalaryTable.spec.js`
   - <b>Chart</b>: `Chart.spec.js`

## Tech

- [Create React App](https://github.com/facebook/create-react-app) & Hooks
- [react-chartjs](https://github.com/reactchartjs/react-chartjs-2)
- [Material-UI](https://material-ui.com/)
- [Jest](https://jestjs.io/)
- [Cypress](https://www.cypress.io/)

## Setup

1. Clone the repocd in
2. ```yarn start```
3. Ta-da! Should work

## Points to improve on

- Mobile view could be improved
- Chart testing is not as good as table testing (should use Jest maybe for Chart as it generates a canvas)