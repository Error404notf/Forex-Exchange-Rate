# Forex Market Exchange Rates

A simple web app that allows users to check real-time foreign exchange rates between popular currency pairs using an external API.

**Link to project:** https://singular-dodol-677a35.netlify.app/



---

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

This project was built as part of my journey learning API integration and asynchronous JavaScript. The app allows users to select a currency pair (e.g., USDKES, EURUSD) from a dropdown menu and fetches the latest exchange rate using the Exchange Rate API.

I used the `fetch()` method to make HTTP requests and handled the JSON response to dynamically update the DOM with the latest rate. I also implemented string manipulation to extract the base and target currencies from the selected pair, which allowed me to display the result in a clean and readable format.

This project helped reinforce my understanding of:

* Working with APIs
* Handling asynchronous JavaScript (Promises)
* DOM manipulation
* User input handling

---

## Optimizations

One optimization I made was simplifying the logic for extracting currency pairs using string slicing instead of more complex parsing methods. This keeps the code lightweight and efficient.

In future iterations, I would:

* Add loading states to improve user experience
* Handle invalid selections more gracefully
* Cache previously fetched rates to reduce unnecessary API calls

---

## Lessons Learned:

Building this project helped me better understand how real-world applications interact with APIs. One key takeaway was learning how to structure data coming from an external source and display it dynamically on a webpage.

I also gained more confidence working with JavaScript event listeners and debugging API responses in the console. Seeing live exchange rates update based on user input was a great moment and reinforced how powerful even simple JavaScript applications can be.
