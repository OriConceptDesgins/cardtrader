# Project CardTrader

## Concept Overview
Project CardTrader Simulates a content investment application. Users are able to invest in cards , buying and selling them.  Cards increase in value as they get more likes but their value drops significantly if they don't get updated/maintained for over a week. A User can buy shares in a card or sell shares.
The idea is a hypothetical platform to support active content creators and get rewarded with fake money for supporting them by creating a psuedo financial game around it.

## Goals:
- The cards API I've been provided for this project has several different required fields that are not interesting towards my application  ,  I can either send them with placeholder data or use them in a way that they weren't intended to be used:  
   1. phone     11
   2. email
   3. address 
    - country	string		
    - city	string			
    - street	string			
    - houseNumber	number
- Create a card display page with sorting options (name,most liked ascending/descending) 
- Each user will also have a ledger card they don't see that contains information about what shares they own in all cards ,  I will story it in the string of the street part of address object of said card.
- The front end will only present part of the information to the user, I will use a unique identifier in the fields to find the relevant cards on the front end and interpret and present them approrpiately. 

## Current to do list:
- ~~Finish building the layout elements *Kind of done for now*~~
- ~~Build Nav items components for navbar~~
- ~~Use NavItem to populate the Header menu~~
- ~~Do periodic test to see that everything works before proceeding. ~~
- ~~DDo Theme Provider.~~
- Do the User Login/Logout/signup  -> *Finish refactor (see refactor notes below)*
- Do Add Card Page
- Edit what I already did to adapt it to changes from the original idea.


## Other Tasks for Project:
- Do a business info page
- Do entry page that has at least 3 cards , you can create your own via postman if you need.   Each card must have full CRUD functionality according to user permission.
- Handle the User permissions.
- Consider taking Tzach's Project and just modifying that to suit your needs. although I don't like the way he names stuff.  Alternatively just take what he made and connect the endpoints where needed.


## Low priority Tasks:
- Customize color theme via theme provider for both light and dark,  use MUI colors.

## Todo Refactor: 
Had to make renaming changes for readibility and self-documentation that may help to make sense of some of the code. still need finish refactoring everything in the users folder before I continue. 
- renamed hook useUser  to useUserProvider for more readibility.
- renamed hook useUsers to useUserProfile
