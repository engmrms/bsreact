/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { Anonymous, Authenticated } from './Auth';
import { Lang } from './Lang';

export const ProtectedRoute = ({ path, component: Component, render, ...rest }) => (
  <Route
    path={path}
    {...rest}
    render={props => (
      <>
        <Authenticated>{Component ? <Component {...props} /> : render(props)}</Authenticated>

        <Anonymous>
          <Redirect to={{ pathname: `/${Lang.CurrentLanguage}/portal/login`, state: { from: props.location } }} />
        </Anonymous>
      </>
    )}
  />
);

export const ResolveUrl = path => `/${Lang.CurrentLanguage}/${path}`;
