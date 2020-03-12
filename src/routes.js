import React from 'react';
import {Switch, Route} from 'react-router-dom';
import TopicList from './Components/TopicList/TopicList';
import Nav from './Components/Nav/Nav';
import Post from './Components/Post/Post';
import Home from './Components/Home/Home';




export default(
<Switch>
    <Route exact path ='/' component = {Home}/>
    <Route path = '/topics' component= {TopicList}/>
    <Route path = '/post/:id' component= {Post}/>
</Switch>

)
