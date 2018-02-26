# jb-autoCompleteDropdown
Not my best work, but for sepnding only a few hours (not really a vanilla js developer) it works fairly well.

The most time costly aspect was making it an HTML5 web componet (all new to me)

Task:

Create a reusable component to provide an auto-completing drop-down list.

Don't use a ready-made component even though many are available in all frameworks


Given and array of options in this format:

const options = {

    { label: "Steve Austin", : value: 1 },

    { label: "Jamie Sommers", : value: 2 },

    { label: "Rick Deckard", : value: 3 },

    { label: "John Conner", value: 4 },

    { label: "Gaius Baltar", value: 5 },

    { label: "John Smith" value: 6 },

    { label: "Seven Of Nine", : value: 7 },

    .

    .

    .

}


DONE- Display an input field that autocompletes as the user is typing.

DONE- If user types s or S, 'Steve Austin' and any other options that begin with S will be displayed

DONE- Matching elements will be displayed in a dropdown list below the input field.

DONE- Component should take 'options' as input and notify upon selection

DONE- (item is selected either by pressing 'enter' or clicking on item in the list)

DONE- Result of the selection should display selected 'label' and 'value' as text below the input field.
