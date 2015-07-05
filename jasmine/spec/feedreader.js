/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are defined and not empty', function() {
            var length = allFeeds.length;

            //Cycle through and check to make sure that all urls are defined
            for(var i = 0; i < length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url).not.toEqual("");
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('feed names are defined and not empty', function() {
            var length = allFeeds.length;

            //Cycle through and check to make sure that all urls are defined
            for(var i = 0; i < length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name).not.toEqual("");
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu is hidden', function() {
            //If the menu is hidden, then it is part of the menu-hidden class
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('menu appears and disappears', function() {
            //Similuate the user clicking the menu botton
            $('.menu-icon-link').click();

            //The menu should NOT be hidden
            expect($("body").hasClass("menu-hidden")).toBeFalsy();

            //Similuate the user clicking the menu botton
            $('.menu-icon-link').click();

            //The menu should NOT be hidden
            expect($("body").hasClass("menu-hidden")).toBeTruthy();
        });
    });

    var firstEntry = ""; //This will save the first entry for comparison purposes

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            //Clear the feed div to make sure we are not using the previous loadfeed
            $('.feed').html("");

            //Run the loadFeed with different values passed in for each test
            //and wait for it to complete
            loadFeed(0, function() {
              done();
            });

        });

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        it('loadFeed loads a feed', function(done) {
            //Get the entry's string
            firstEntry = $("h2", ".entry", ".feed").html();

            //Make sure the entry isn't undefined or blank
            expect(firstEntry).toBeTruthy();

            done();
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {

        beforeEach(function(done) {
            //Clear the feed div to make sure we are not using the previous loadfeed
            $('.feed').html("");

            //Run the loadFeed with different values passed in for each test
            //and wait for it to complete
            loadFeed(1, function() {
              done();
            });
        });

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         it('loadFeed changes a feed', function(done) {
            //Get the entry's string
            var secondEntry = $("h2", ".entry", ".feed").html();

            //Make sure the entry isn't undefined or blank
            expect(secondEntry).toBeTruthy();

            //Make sure the entry does not equal the previous entry
            expect(secondEntry).not.toEqual(firstEntry);

            done();
        });

   });
}());
