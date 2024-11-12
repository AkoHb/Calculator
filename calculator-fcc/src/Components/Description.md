### Here contain valid information about project functional

> [!IMPORTANT]
> Description folder's functional

> [!NOTE]
> STATE folder

    State.js was moved in local storage, will contain history and current app settings.

    State.history might contan info looks like object:
    [
        {
            time: contain time when you handleclick button with id="equals",
            userInput: array of user input elements,
            result: calculated userInput joined by ""
        }
    ]  

    State.shortHistory contain 10 lastest operations.

        State.brackets contain count of valid bracets that will displayed in infoLine display section. 
    It will have few states:
        1. User input not contain brackets or all all brackets are paired: display section with "()" has light gray color
        2. User input contain open bracket (brackets pairs count = 1): 
            display section with "()":  opened bracket has gray color, while closed bracket not close - color red. After - state 1.
        3. User input contain open bracket (brackets pairs count = n, n >= 1): 
            display section with "( n )":  opened bracket has gray color, while closed bracket not close - color red. After - state 1.

    State.powerOn contain state to disabled buttons. When the power is off, you can only press the power button.

    

