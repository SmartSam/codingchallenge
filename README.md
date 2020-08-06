___
## 1. HTML and CSS
Using index.html and style.css files, make a page that has a header bar, body with split content (left column menu, right column main content) and footer. Make the split content stack vertically for screens smaller than 600px wide, with content going above the menu. The header and footer background color should be different from that of the content. Colors, Sizing and other styling details are up to you (don't worry about style too much, you don't need to be a designer, just do something reasonable).

* Header: Bar along top. Contains Left justified text "Css Demo" and also energy logo found in images\also logo.png
* Menu: column on left side (or below content on small screens)
* Content: rest of area to the right of menu (or full width area below the header for small screens)
* Footer: Bar along bottom

___
## 2. Javascript Basics
In main.js create a function that takes an array argument. The array will contain objects of the form 
{first: "Amanda", last: "Byron", group: "Sales"}.
The function should return an object that organizes each entry by group, and combines the name, making sure to put the last name first if 'nameOrder' is "reverse". The example below shows a possible input to the function, but the function should be able to handle any alpha-numeric group names.


The function should take the array:
```javascript
[
    {first: "Amanda", last: "Byron", group: "Sales"},
    {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
    {first: "Miltiades", last: "Crescens", group: "Sales"},
]
```
And yield a return object of:
```javascript
{ 
    receiving: [{name: "Xia Ye"}]
    sales: [{name: "Amanda Byron"}, {name: "Miltiades Crescens"}],       
}
```

