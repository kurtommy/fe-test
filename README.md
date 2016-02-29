## Front end test
### Instructions
1. Fetch this repo in your github account.
2. Make a new branch called test-me and add your stuff there.
3. Once you have completed the test make a new PR to this repo, for that branch.
4. You have max 3 hours.

### Infos
4. Default route is `/` which load `testController` controller, and display `test.html` view.
5. You must indent your code, follow the .editorconfig and .eslint rules.

### HTML and CSS part - Todo:
1. Create an html structure with header and content similar as much as possible to the example located in src/assets/layout.png.
2. The page should be responsive with customization for tablet and phone.
3. Write css in sass.

### Angular part - Todo:
2. Write an angular directive called `race-cars-paginator` which display a list of race cars.
2. The directive should fetch cars from the service injected in `TestController`.
Use bootstrap for display the items in a <table>.
3. Limit the items shown in the table at 10.
4. Use `ui-bootstrap` `pagnation` for paginate the table rows.
