import '../imports/ui/layout/layout.js';
import '../imports/ui/home/home.js';
import '../imports/ui/about/about.js';
import '../imports/ui/game/myGames.js';
import '../imports/ui/game/game.js';
import '../imports/ui/stats/stats.js';
import '../imports/ui/users/users.js';
import '../imports/ui/contact/contact.js';
import '../imports/ui/admin/contact.js';
import '../imports/ui/admin/dashboard.js';

FlowRouter.route('/',{
  name: 'home',
  action(){
    BlazeLayout.render('layout', {child:'home'});
  }
});

FlowRouter.route('/about',{
  name: 'about',
  action(){
    BlazeLayout.render('layout', {child:'about'});
  }
});

FlowRouter.route('/users',{
  name: 'users',
  action(){
    BlazeLayout.render('layout', {child:'users'});
  }
});

FlowRouter.route('/mygames',{
  name: 'mygames',
  action(){
    BlazeLayout.render('layout', {child:'myGames'});
  }
});

FlowRouter.route('/games/:gameId',{
  name: 'games',
  action: function(params, queryParams) {
        BlazeLayout.render('layout', {child:'game'});
    }
});

FlowRouter.route('/contact',{
  name: 'contact',
  action(){
    BlazeLayout.render('layout', {child:'contact'});
  }
});

FlowRouter.route('/stats',{
  name: 'stats',
  action(){
    BlazeLayout.render('layout', {child:'stats'});
  }
});


//*********ADMIN ROUTES**********

var adminRoutes = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
  triggersEnter: [function(context, redirect) {
    //make a filter to check the user is logged in
    //and has admin role
  }]
});

// handling /admin route
adminRoutes.route('/', {
  action: function() {
    BlazeLayout.render('layout', {child: 'adminDashboard'});
  }
});

// handling /admin/contact
adminRoutes.route('/contact', {
  action(){
    BlazeLayout.render('layout', {child:'adminContact'});
  }
});
