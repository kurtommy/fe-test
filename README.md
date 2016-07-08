## Front end test

###Install and run
you need node.js
- npm install -g gulp
- npm install -b bower
- gulp serve

### Instructions
1. Fetch this repo in your github account.
2. Make a new branch called test-me and add your stuff there.
3. Once you have completed the test make a new PR to this repo, for that branch.
4. You have max 3 hours.

### Infos
1. Default route is `/` which loads `TestMeController` controller, and display `test-me.html` view.
2. You must indent your code, follow the .editorconfig and .eslint rules.

### HTML and CSS part - Todo:
1. Create an html structure with header and content similar as much as possible to the example located in src/assets/layout.png.
2. The page should be responsive. Customization for tablet and phone will be a plus.
3. Write css in sass.

### Angular part - Todo:
1. Write an angular directive called `race-cars-paginator` which display a list of race cars.
2. The directive should fetch cars from the service injected in `TestMeController`.
3. Use bootstrap for display the items in a <table>.
4. Limit the items shown in the table at 10.
5. Use `ui-bootstrap` `pagnation` for paginate the table rows.

###Extra
1. Try to use all the best practice that makes Angular fast and cool, one time binding, track by, bindToController, controllerAs ...
2. Write unit-tests for controller and directive (big extra)
