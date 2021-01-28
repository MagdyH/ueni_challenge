UENI coding challenge

The goal of this challenge is not to show a beautiful UI. Boxes with borders are totally ok. We are mostly interested in the solution architecture and structure and decomposition that you choose. Overengineering is welcome if you want to show your skills.

The application fetches a .json file that contains events defined by start, end, id and name. The list is already sorted by “start” field. 

We want to render these events on a scrollable timeline in any ratio.

On the timeline there is another component that demonstrates a selected interval. The element will go green if it does not overlap with any event or turn red otherwise.

There are two ways to change the selected interval. Either by clicking on the timeline (duration is reused) or by Start and End input fields.

There will also be another field that allows events to be filtered out based on the name.

We expect the solution to be demonstrated using TypeScript and React. Even the state management should be implemented via pure React. Using a Date processing library or Vanilla JS is up to you. 


