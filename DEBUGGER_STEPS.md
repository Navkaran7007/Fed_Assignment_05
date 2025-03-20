## Breakpoints Explanation


## Breakpoint 1: Before Making the API Request
## Screenshot 1
# Line 4: const response = await fetch
# This is where the API request is about to be made.
# This allows us to inspect the date value and ensure the API endpoint is correctly formed.


## Breakpoint 2: Error Message
## Screenshot 2
## Line 29
## This is where the code checks whether the user has entered a valid date before making an API request.
## If selectedDate is empty, the function should show an error message and stop execution.

## Breakpoint 3: Date
## Screenshot 3
## Line 75
## This is where the script selects the HTML element to update the photo’s date.
## Ensures the element exists and is being modified properly.






