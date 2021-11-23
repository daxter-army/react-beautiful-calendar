[![made-with-react](https://img.shields.io/badge/made%20with-react-blue.svg)](https://www.reactjs.org/)
[![MIT-license](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

# react-beautiful-calendar

**A beautiful react calendar component library for your beautiful react apps.**

<p align="center">
    <img src="https://raw.githubusercontent.com/daxter-army/react-beautiful-calendar/main/readme-media/base-calendar-ss.jpg?token=AL3MMOEIBUML7LIXASVVPO3BUZVFA" width="35%" alt="base-calendar-image"/>
</p>

### 🏡 Online Demo

- Visit <a href="https://daxter-army.github.io/react-beautiful-calendar/"><strong>Project Homepage</strong></a> to see live demo.

### ⚡ Specifications

- Pick days, months, years
- Choose size as per your convenience and mood **[COMING SOON!]**
- No third-party module needed, no moment.js

### 🐱‍🏍 Getting Started

- Installation

  - Install it via npm, by using

  ```sh
      npm install react-beautiful-calendar
  ```

  - or via yarn, by hitting

  ```sh
      yarn add react-beautiful-calendar
  ```

- Importing

  - Import it in your project, by using

  ```sh
      import Calendar from "react-beautiful-calendar"
  ```

- Using
  - Use it by adding,
  ```js
  <Calendar onDateChange={your_handler_function} />
  ```

### 🦮 User Guide

#### Calendar

- Displays a complete, interactive calendar widget.

#### Props

- **This documentation is compatible with the current package version, 1.1.11**

|   Prop name    |                                                       Description                                                       | Default value |                 Example                  |
| :------------: | :---------------------------------------------------------------------------------------------------------------------: | :-----------: | :--------------------------------------: |
|   `variant`    |                                    It denotes the type of calendar widgets available                                    |   `default`   |           `variant="default"`            |
|     `font`     |                                             Sets font style for the widget                                              |   `DM Sans`   |             `font="DM Sans"`             |
| `onDateChange` | Handler function, triggers when a date is selected, it returns you an array containing 3 values as date, month and year |       -       | `dateChangeHandler([date, month, year])` |

### Issues

- Issues: [Issues](https://github.com/daxter-army/react-beautiful-calendar/issues)

### 📤 Useful Links

- Icons: [Fontawesome](https://fontawesome.com)

### 📜 License

- MIT License

### 🏆 Author

<table>
  <tr>
    <td>
      <img src="https://github.com/daxter-army.png?s=100" width="100">
    </td>
    <td>
      Mehul Singh Teya<br />
      <a href="mailto:mehulsinghteya@gmail.com">mehulsinghteya@gmail.com</a><br />
      <a href="https://daxter-army.github.io">https://daxter-army.github.io</a>
    </td>
  </tr>
</table>
