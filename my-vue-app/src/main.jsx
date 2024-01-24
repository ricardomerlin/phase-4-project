import React from 'react'
import ReactDOM from 'react-dom'
import CreateProfile from './CreateProfile.jsx'
import App from './App.jsx'
import WelcomePage from './WelcomePage.jsx'
import LikedSongs from './LikedStocks.jsx'
import Feed from './feed.jsx'
import SearchBar from './SearchBar.jsx'
import UserProfile from './UserProfile.jsx'
import Login from './Login.jsx'
import ProfilePage from './ProfilePage.jsx'
import CreateProfilePage from './CreateProfile.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>Something went wrong!</h1>,
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/liked-songs",
          element: <LikedSongs />,
        },
  
        {
          path: "/search",
          element: <SearchBar />,
        },

        {
          path:"/user",
          element: <UserProfile />
        },
        {
          path: "/feed",
          element: <Feed />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path: "/createprofile",
          element: <CreateProfilePage />
        }
      ]
    }]);

    ReactDOM.createRoot(document.getElementById("root")).render(
      <React.StrictMode>
        <RouterProvider router={routes} />
      </React.StrictMode>
    );

