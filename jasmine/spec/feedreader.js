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


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are defined and not empty', function() {
            var length = allFeeds.length;

            //Cycle through and check to make sure that all urls are defined
            for(var i = 0; i < length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url).not.toEqual('');
            }
         });


        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('feed names are defined and not empty', function() {
            var length = allFeeds.length;

            //Cycle through and check to make sure that all urls are defined
            for(var i = 0; i < length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name).not.toEqual('');
            }
         });
    });


    /* This test suite tests the menu's visibility in the application */
    describe('The menu', function() {

        /* This test ensures that the menu element is
         * hidden by default.
         */
        it('menu is hidden', function() {
            //If the menu is hidden, then it is part of the menu-hidden class
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

         /* This test ensures that the menu changes
          * visibility when the menu icon is clicked.
          */
        it('menu appears and disappears', function() {
            //Similuate the user clicking the menu botton
            $('.menu-icon-link').click();

            //The menu should NOT be hidden
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            //Similuate the user clicking the menu botton
            $('.menu-icon-link').click();

            //The menu should NOT be hidden
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
    });

    /* This test suite tests whether loadFeed function works initially */
    describe('Initial Entries', function() {

        beforeEach(function(done) {
            //Clear the feed div to make sure we are not using the previous loadfeed
            $('.feed').html('');

            //Run the loadFeed with different values passed in for each test
            //and wait for it to complete
            loadFeed(0, function() {
              done();
            });

        });

        /* This test ensures that the loadFeed
         * function is called and completes its work, and there is at least
         * a single .entry element within the .feed container.
         */
        it('loadFeed loads a feed', function(done) {
            //Get the entry's string
            firstEntry = $('.entry').html();

            //Make sure the entry isn't undefined or blank
            expect(firstEntry).toBeTruthy();

            done();
        });
    });

    /* This test suite tests whether loadFeed function works initially */
    describe('New Feed Selection', function() {
        var firstFeed;

        beforeEach(function(done) {
            //Get the first feed for comparison purposes
            firstFeed = $('.feed').html();

            //Clear the feed div to make sure we are not using the previous loadfeed
            $('.feed').html("");

            //Run the loadFeed with different values passed in for each test
            //and wait for it to complete
            loadFeed(1, function() {
              done();
            });
        });

        /* This test ensures that a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
         it('loadFeed changes a feed', function(done) {
            //Get the feed's html
            var secondFeed = $('.feed').html();

            //Make sure the entry isn't undefined or blank
            expect(secondFeed).toBeTruthy();

            //Make sure the entry does not equal the previous entry
            expect(secondFeed).not.toEqual(firstFeed);

            done();
        });

   });
}());
