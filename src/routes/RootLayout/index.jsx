import React from 'react';
import {
  Outlet,
  // useLoaderData,
  // Form,
  // redirect,
  // NavLink,
  // Link,
  // useNavigation,
  // useSubmit,
} from 'react-router-dom';

export const RootLayout = () => {
  return (
    <div id="RouterRoot">
      <Outlet />
    </div>
  );
};
