# The concept of ProComponents

Similar to Ant Design Pro Components, Naive UI Pro Components is an advanced component library based on Naive UI, providing higher-level abstractions and encapsulation for backend systems.

We have made some adjustments to the design of Naive UI Pro Components to better align with the design style of Naive UI and provide the ability to quickly and efficiently build high-quality backend applications.

## Design Ideas

> The following content is from Ant Pro Components

For almost any business, we actually define a series of behaviors based on state. Taking a table as an example, first, we need a state `data` to store the data requested from the server. For a better user experience, we also need a `loading` state. So we have a series of behaviors: we need to set `loading=true` first, then make a network request, set `data` to the requested data and `loading=false` when the network request is completed. Although it's very simple, a business system has a considerable number of tables, and each table is defined only once, resulting in a significant amount of work.

If we want to re-request the network, we need to encapsulate the above behaviors into a method. When clicking to reload the data, if there is pagination, we also need a new variable `page`. We need to determine whether to reset the page to the first page before re-requesting based on our needs, which introduces another variable. If your form also needs to control the number of items displayed per page, it will be even more cumbersome. This repetitive work will waste a lot of our time.

## A component !≈ a page

We don't want you to see components as pages, but rather as a superset of functionality. This allows your code to remain flexible, which is also the difference between Naive UI Pro Components and Ant Design Pro Components.

A list page can use the combination of `pro-form` and `pro-table`, while an edit page can utilize `pro-form` plus a `button` or other various components. This allows us to focus on implementing core business logic and page effects.

Based on this reason, we are cautious when developing new components. We try to break down the functionality of components into smaller components as much as possible, so that you can better combine them.
