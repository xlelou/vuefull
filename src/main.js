import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)


import App from './App'
import store from './store'
import router from './routers'
new Vue({
	router,
	store
}).$mount('#app')


// git config --global user.email "naivebenson@gmail.com"
// git config --global user.name "lybenson"
// #!/bin/sh
// git filter-branch --env-filter '
// OLD_EMAIL="757766483@qq.com"
// CORRECT_NAME="lybenson"
// CORRECT_EMAIL="757766483@qq.com"
// if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
// then
//     export GIT_COMMITTER_NAME="$CORRECT_NAME"
//     export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
// fi
// if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
// then
//     export GIT_AUTHOR_NAME="$CORRECT_NAME"
//     export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
// fi
// ' --tag-name-filter cat -- --branches --tags
